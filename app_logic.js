/**
 * T-PHYSICS PRO - HỆ THỐNG QUẢN LÝ TIẾN ĐỘ & HỌC TẬP
 * Cấu trúc module chuyên nghiệp, dễ dàng mở rộng và tích hợp Firebase sau này.
 */

const TPhysicsPro = (function () {
    // KHOÁ LƯU TRỮ (LOCAL STORAGE KEYS)
   const KEYS = {
        USER_TOKEN: 'tphysics_user_token',
        USER_PROFILE: 'tphysics_user_profile',
        QUIZ_PROGRESS: 'tphysics_quiz_progress',
        MISTAKES_LOG: 'tphysics_mistakes_log',
        SCORE_HISTORY: 'tphysics_score_history' // <-- THÊM DÒNG NÀY VÀO ĐÂY
    };

    // ==========================================
    // 1. MODULE XÁC THỰC (AUTHENTICATION)
    // ==========================================
    class Auth {
        /**
         * Xử lý đăng nhập và lưu trạng thái (Remember Me)
         * Trong thực tế, nên kết nối hàm này với Firebase Auth
         */
        static login(username, password, rememberMe) {
            // Giả lập gọi API kiểm tra tài khoản
            if (username && password) {
                // Tạo một token giả lập (Thực tế sẽ do server/Firebase cấp)
                const mockToken = btoa(username + new Date().getTime());
                const userProfile = { username: username, role: 'student', lastLogin: new Date().toISOString() };

                if (rememberMe) {
                    localStorage.setItem(KEYS.USER_TOKEN, mockToken);
                    localStorage.setItem(KEYS.USER_PROFILE, JSON.stringify(userProfile));
                } else {
                    sessionStorage.setItem(KEYS.USER_TOKEN, mockToken);
                    sessionStorage.setItem(KEYS.USER_PROFILE, JSON.stringify(userProfile));
                }
                console.log("T-Physics Pro: Đăng nhập thành công!");
                return true;
            }
            return false;
        }

        static logout() {
            localStorage.removeItem(KEYS.USER_TOKEN);
            localStorage.removeItem(KEYS.USER_PROFILE);
            sessionStorage.removeItem(KEYS.USER_TOKEN);
            console.log("T-Physics Pro: Đã đăng xuất!");
        }

        static isLoggedIn() {
            return localStorage.getItem(KEYS.USER_TOKEN) || sessionStorage.getItem(KEYS.USER_TOKEN);
        }
    }

    // ==========================================
    // 2. MODULE QUẢN LÝ TIẾN ĐỘ (PROGRESS TRACKER)
    // ==========================================
    class Progress {
        /**
         * Lưu trạng thái bài làm hiện tại để học sinh có thể thoát ra và làm tiếp
         */
        static saveProgress(topicId, currentQuestionIndex, userAnswers) {
            let allProgress = JSON.parse(localStorage.getItem(KEYS.QUIZ_PROGRESS)) || {};
            
            allProgress[topicId] = {
                lastUpdated: new Date().toISOString(),
                currentIndex: currentQuestionIndex,
                answers: userAnswers // Ví dụ: { 'q1_a': true, 'q1_b': false... }
            };

            localStorage.setItem(KEYS.QUIZ_PROGRESS, JSON.stringify(allProgress));
        }

        /**
         * Tải lại tiến độ đang làm dở
         */
        static loadProgress(topicId) {
            let allProgress = JSON.parse(localStorage.getItem(KEYS.QUIZ_PROGRESS)) || {};
            return allProgress[topicId] || null; // Trả về null nếu chưa làm
        }

        static clearProgress(topicId) {
            let allProgress = JSON.parse(localStorage.getItem(KEYS.QUIZ_PROGRESS)) || {};
            delete allProgress[topicId];
            localStorage.setItem(KEYS.QUIZ_PROGRESS, JSON.stringify(allProgress));
        }
    }

    // ==========================================
    // 3. MODULE PHÂN TÍCH SAI LẦM (MISTAKE ANALYZER)
    // ==========================================
    class MistakeLog {
        /**
         * Ghi nhận câu hỏi học sinh làm sai để ôn tập lại
         * @param {string} questionId - ID câu hỏi (VD: 'q21')
         * @param {object} mistakeDetails - Chi tiết lỗi sai
         */
        static logMistake(questionId, mistakeDetails) {
            let mistakes = JSON.parse(localStorage.getItem(KEYS.MISTAKES_LOG)) || {};
            
            // Nếu đã sai câu này trước đó, tăng biến đếm (failCount)
            if (mistakes[questionId]) {
                mistakes[questionId].failCount += 1;
                mistakes[questionId].lastFailed = new Date().toISOString();
                mistakes[questionId].details = mistakeDetails;
            } else {
                mistakes[questionId] = {
                    failCount: 1,
                    lastFailed: new Date().toISOString(),
                    details: mistakeDetails
                };
            }

            localStorage.setItem(KEYS.MISTAKES_LOG, JSON.stringify(mistakes));
        }

        /**
         * Lấy danh sách các câu sai nhiều nhất để tạo đề "Khắc phục yếu kém"
         */
        static getMistakesReport() {
            let mistakes = JSON.parse(localStorage.getItem(KEYS.MISTAKES_LOG)) || {};
            let report = Object.keys(mistakes).map(qId => {
                return {
                    questionId: qId,
                    failCount: mistakes[qId].failCount,
                    lastFailed: mistakes[qId].lastFailed,
                    details: mistakes[qId].details
                };
            });

            // Sắp xếp ưu tiên những câu sai nhiều nhất lên đầu
            return report.sort((a, b) => b.failCount - a.failCount);
        }

        /**
         * Xóa lịch sử sai lầm sau khi học sinh đã ôn tập và làm đúng
         */
        static resolveMistake(questionId) {
            let mistakes = JSON.parse(localStorage.getItem(KEYS.MISTAKES_LOG)) || {};
            if (mistakes[questionId]) {
                delete mistakes[questionId];
                localStorage.setItem(KEYS.MISTAKES_LOG, JSON.stringify(mistakes));
            }
        }
    }
// ==========================================
    // 4. MODULE THỐNG KÊ (ANALYTICS DASHBOARD)
    // ==========================================
    class Analytics {
        static getPerformanceReport() {
            const progress = JSON.parse(localStorage.getItem(KEYS.QUIZ_PROGRESS)) || {};
            const mistakes = JSON.parse(localStorage.getItem(KEYS.MISTAKES_LOG)) || {};
            
            let totalAnsweredStatements = 0;
            Object.keys(progress).forEach(topic => {
                if (progress[topic] && progress[topic].answers) {
                    totalAnsweredStatements += Object.keys(progress[topic].answers).length;
                }
            });

            const totalMistakesCount = Object.keys(mistakes).length;
            
            // Phân tích xem chủ đề nào đang sai nhiều nhất
            const topicWeakness = {};
            Object.keys(mistakes).forEach(mId => {
                const item = mistakes[mId];
                if (item.details && item.details.topic) {
                    topicWeakness[item.details.topic] = (topicWeakness[item.details.topic] || 0) + item.failCount;
                }
            });

            let weakestTopic = "Chưa ghi nhận";
            let maxFails = 0;
            Object.keys(topicWeakness).forEach(t => {
                if (topicWeakness[t] > maxFails) {
                    maxFails = topicWeakness[t];
                    if (t === 'nhiet') weakestTopic = 'Vật lý Nhiệt';
                    else if (t === 'hat-nhan') weakestTopic = 'Vật lý Hạt nhân';
                    else weakestTopic = t;
                }
            });

            return {
                answeredCount: totalAnsweredStatements,
                mistakesCount: totalMistakesCount,
                weakestTopic: weakestTopic
            };
        }
    }
	// ==========================================
    // 5. MODULE LỊCH SỬ ĐIỂM SỐ (SCORE HISTORY)
    // ==========================================
    class ScoreHistory {
        static saveScore(topicId, topicName, score, correctStatements, totalStatements, timeString) {
            let history = JSON.parse(localStorage.getItem(KEYS.SCORE_HISTORY)) || [];
            
            // Tạo bản ghi mới nhất
            const newRecord = {
                id: new Date().getTime(),
                date: new Date().toISOString(),
                topicId: topicId,
                topicName: topicName,
                score: score,
                correctStatements: correctStatements,
                totalStatements: totalStatements,
                timeString: timeString
            };

            // Đẩy bài thi mới nhất lên đầu danh sách
            history.unshift(newRecord); 
            
            // Tối ưu bộ nhớ: Chỉ giữ lại 20 bài thi gần nhất để tránh nặng trình duyệt
            if (history.length > 20) {
                history.pop();
            }

            localStorage.setItem(KEYS.SCORE_HISTORY, JSON.stringify(history));
        }

        static getHistory() {
            return JSON.parse(localStorage.getItem(KEYS.SCORE_HISTORY)) || [];
        }
    }
    // Export các module để sử dụng ở file giao diện (UI)
    return {
        Auth: Auth,
        Progress: Progress,
        MistakeLog: MistakeLog,
        Analytics: Analytics,
        ScoreHistory: ScoreHistory // <-- NHỚ THÊM DÒNG NÀY
    };
})();