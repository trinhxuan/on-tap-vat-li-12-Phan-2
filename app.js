// ĐƯA CÁC BIẾN TOÀN CỤC VÀ ĐỊNH NGHĨA HÀM RA NGOÀI
let currentTopic = 'nhiet';
const CORRECT_PASSWORD = '123';
let examStartTime = new Date(); // Khởi tạo giá trị mặc định để tránh lỗi NaN
let isSubmitted = false;        // Trạng thái kiểm soát xem học sinh đã bấm nộp bài chưa
// 5. HÀM HIỂN THỊ LÝ THUYẾT & BÀI TẬP CAO CẤP
window.renderQuizzes = function() {
    const contentArea = document.getElementById('contentArea');
    const loginOverlay = document.getElementById('login-overlay');
    if (!contentArea || (loginOverlay && loginOverlay.style.display !== 'none')) return;

    let currentQuizzes = [];
    let theoryHtml = '';
    let isMistakeTab = (currentTopic === 'khac-phuc-loi');
    let isCamNangTab = (currentTopic === 'cam-nang');

    // TÍNH NĂNG MỚI: RENDER TAB CẨM NANG & MẸO LÀM TRÒN SỐ
    if (isCamNangTab) {
        contentArea.innerHTML = `
            <div class="theory-section">
                <h2>📘 CẨM NANG KHOA HỌC & MẸO LÀM TRÒN SỐ</h2>
                
                <div class="lesson-card">
                    <h3>1. Quy tắc chữ số có nghĩa (Significant Figures) – Chuẩn khoa học</h3>
                    <p>Đây là quy tắc tối quan trọng trong Vật lý thực nghiệm. Khi bạn thực hiện các phép tính nhân hoặc chia, <strong>kết quả cuối cùng không được có nhiều chữ số có nghĩa hơn dữ kiện có ít chữ số có nghĩa nhất</strong> do đề bài cung cấp.</p>
                    
                    <div class="highlight-box golden-note" style="margin-top: 14px;">
                        <strong>Ví dụ thực tế từ đề thi:</strong><br>
                        • Độ phóng xạ $H_0 = 7,40 \\cdot 10^{10} \\text{ Bq} \\rightarrow$ có <strong>3 chữ số có nghĩa</strong> (7, 4, và 0).<br>
                        • Khối lượng mol $M = 131 \\text{ g/mol} \\rightarrow$ có <strong>3 chữ số có nghĩa</strong> (1, 3, và 1).<br>
                        Vì các dữ kiện đầu vào đều có 3 chữ số có nghĩa, nên kết quả khối lượng $m_0$ bạn tính ra bắt buộc phải làm tròn về đúng <strong>3 chữ số có nghĩa</strong>.<br>
                        <span style="color: #ef4444;">→ Máy tính hiện:</span> 16,0978981...<br>
                        <span style="color: #4ade80;">→ Kết quả làm tròn chuẩn:</span> Lấy 3 chữ số đầu tiên tính từ trái sang: 1, 6, và 0. Nhìn sang chữ số thứ tư là số 9 ($\\ge 5$), ta tăng chữ số thứ ba lên 1 đơn vị: $16,0 \\rightarrow \\mathbf{16,1}$.
                    </div>
                </div>

                <div class="lesson-card">
                    <h3>2. Quy tắc làm tròn số (Rounding Rules) phổ thông áp dụng trong phòng thi</h3>
                    <p>Khi đi thi, nếu đề bài không yêu cầu khắt khe về chữ số có nghĩa, học sinh áp dụng quy tắc làm tròn số thập phân tiêu chuẩn sau:</p>
                    <div class="concept-box">
                        <ul>
                            <li><strong>Trường hợp 1:</strong> Chữ số ngay sau phần muốn giữ lại <strong>nhỏ hơn 5</strong> $\\rightarrow$ Giữ nguyên.<br><em>Ví dụ:</em> Tính ra 16,043 $\\rightarrow$ làm tròn thành 16,0 hoặc 16.</li>
                            <li style="margin-top: 10px;"><strong>Trường hợp 2:</strong> Chữ số ngay sau phần muốn giữ lại <strong>lớn hơn hoặc bằng 5</strong> $\\rightarrow$ Cộng thêm 1 vào chữ số ngay trước nó.<br><em>Ví dụ:</em> Máy tính ra 16,097... Nếu muốn làm tròn đến 1 chữ số thập phân, xét chữ số tiếp theo là $9 \\ge 5$, do đó 16,0 biến thành 16,1.</li>
                        </ul>
                    </div>
                </div>

                <div class="lesson-card">
                    <h3>3. "Mẹo" xử lý và nhận biết trong đề thi trắc nghiệm</h3>
                    <div class="concept-box" style="border-left-color: #fbbf24; background: rgba(251, 191, 36, 0.02);">
                        <ul>
                            <li><strong>Không làm tròn ở các bước trung gian:</strong> Hãy giữ nguyên kết quả trên máy tính (hoặc lưu vào biến Ans, A, B, C) để tính tiếp các bước sau. Chỉ làm tròn một lần duy nhất ở <strong>kết quả cuối cùng</strong>.</li>
                            <li style="margin-top: 10px;"><strong>Nguyên tắc "Chọn đáp án gần nhất":</strong> Khi làm bài thi trắc nghiệm, các thầy cô ra đề đôi khi sử dụng các nguồn hằng số phụ (như hằng số Avogadro $N_A$, số $\\ln(2)$) đã được làm tròn sẵn, dẫn đến kết quả cuối cùng có thể lệch một vài phần trăm so với khi bạn bấm máy tính bằng hằng số tuyệt đối. Hãy chọn đáp án gần nhất với kết quả của bạn (Ví dụ: Bạn tính ra 16,097 mà các phương án đề bài cho là: <strong>A. 16,1</strong>; B. 15,5; C. 17,2; D. 14,8 thì phương án A chắc chắn là phương án đúng vì sai số cực kỳ nhỏ chỉ khoảng 0,01%).</li>
                        </ul>
                    </div>
                </div>

                <div class="question-card" style="border-top-color: #fbbf24;">
                    <div class="question-context" style="border-left-color: #fbbf24; margin-bottom: 16px;">
                        <strong>🧮 BỘ PHÂN TÍCH CHỮ SỐ CÓ NGHĨA & LÀM TRÒN TỰ ĐỘNG</strong>
                    </div>
                    <p style="margin-bottom: 14px; color: var(--text-secondary); font-size: 0.95rem;">Học sinh có thể tự nhập số liệu bất kỳ để hệ thống tự động đếm số chữ số có nghĩa và biểu diễn làm tròn theo yêu cầu chuẩn khoa học:</p>
                    
                    <div style="display: flex; gap: 12px; margin-bottom: 16px; flex-wrap: wrap;">
                        <input type="text" id="sigFigInput" placeholder="Nhập số... (VD: 16.097 hoặc 0.00131)" style="flex: 1; min-width: 200px; padding: 12px 16px; border-radius: 10px; background: #111827; color: white; border: 1px solid var(--border-card); font-size: 0.95rem;">
                        <input type="number" id="roundToInput" min="1" max="10" placeholder="Số CS có nghĩa cần giữ... (VD: 3)" style="width: 220px; padding: 12px 16px; border-radius: 10px; background: #111827; color: white; border: 1px solid var(--border-card); font-size: 0.95rem;">
                    </div>
                    <button class="btn-check" style="background-color: #d97706; border-color: #fbbf24; margin-top: 0; padding: 12px;" onclick="analyzeSigFigs()">Phân tích & Thực hành làm tròn</button>
                    
                    <div id="sigFigResult" class="stmt-explanation" style="margin-top: 16px; background: #111827; padding: 16px; border-radius: 10px;"></div>
                </div>
            </div>
        `;
        setTimeout(() => {
            if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
                MathJax.typesetPromise([contentArea]).catch((err) => console.log(err));
            }
        }, 100);
        return;
    }

    if (typeof physicsData === 'undefined') {
        contentArea.innerHTML = '<div class="question-card"><p>Lỗi: Không tìm thấy dữ liệu vật lý (physicsData) trong file data.js!</p></div>';
        return;
    }

    // KHỐI XỬ LÝ KHẮC PHỤC LỖI SAI KẾT HỢP DASHBOARD THỐNG KÊ MỚI
    if (isMistakeTab) {
        if (typeof TPhysicsPro === 'undefined') {
            contentArea.innerHTML = '<div class="question-card"><p>Hệ thống lõi TPhysicsPro chưa sẵn sàng...</p></div>';
            return;
        }
        
        const mistakesReport = TPhysicsPro.MistakeLog.getMistakesReport();
        const stats = TPhysicsPro.Analytics ? TPhysicsPro.Analytics.getPerformanceReport() : { answeredCount: 0, mistakesCount: 0, weakestTopic: "Chưa rõ" };

        // TÍNH NĂNG MỚI: DASHBOARD THỐNG KÊ TRỰC QUAN GIAO DIỆN TRẠM LỖI SAI
        theoryHtml = `
            <div class="theory-section" style="border-left: 4px solid #ef4444; background: rgba(239, 68, 68, 0.02); margin-bottom: 24px; padding: 20px; border-radius: 12px; border: 1px solid var(--border-card);">
                <h2 style="color: #f43f5e; margin-bottom: 14px; font-size:1.35rem; font-weight:800; text-align:left;">📊 TRẠM PHÂN TÍCH NĂNG LỰC CÁ NHÂN</h2>
                <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 12px;">
                    <div style="flex: 1; min-width: 140px; background: #0f172a; padding: 12px; border-radius: 8px; border: 1px solid #334155;">
                        <span style="font-size: 0.8rem; color: var(--text-muted); display:block; margin-bottom:4px;">Tổng số ý đã làm</span>
                        <strong style="font-size: 1.25rem; color: #38bdf8;">${stats.answeredCount} mệnh đề</strong>
                    </div>
                    <div style="flex: 1; min-width: 140px; background: #0f172a; padding: 12px; border-radius: 8px; border: 1px solid #334155;">
                        <span style="font-size: 0.8rem; color: var(--text-muted); display:block; margin-bottom:4px;">Mệnh đề chưa chuẩn</span>
                        <strong style="font-size: 1.25rem; color: #f43f5e;">${stats.mistakesCount} ý</strong>
                    </div>
                    <div style="flex: 1; min-width: 140px; background: #0f172a; padding: 12px; border-radius: 8px; border: 1px solid #334155;">
                        <span style="font-size: 0.8rem; color: var(--text-muted); display:block; margin-bottom:4px;">Vùng hổng kiến thức</span>
                        <strong style="font-size: 1.1rem; color: #fbbf24; display:block; text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">${stats.weakestTopic}</strong>
                    </div>
                </div>
                <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0;">* Nhật ký tự động đồng bộ theo thời gian thực từ phòng thi, sắp xếp theo tần suất lỗi giảm dần.</p>
            </div>
        `;

        if (!mistakesReport || mistakesReport.length === 0) {
            contentArea.innerHTML = theoryHtml + `
                <div class="question-card" style="text-align: center; border-top: 4px solid #22c55e; padding: 40px 20px;">
                    <h2 style="color: #22c55e; margin-bottom: 10px;">🎉 TUYỆT VỜI! HỆ THỐNG SẠCH LỖI</h2>
                    <p style="color: #94a3b8;">Học sinh hiện chưa có lỗi sai nào hoặc đã xuất sắc sửa chữa, làm đúng lại toàn bộ các câu hỏi!</p>
                </div>
            `;
            return;
        }

        let uniqueQuizIds = [...new Set(mistakesReport.map(m => m.questionId.split('_')[0]))];
        
        uniqueQuizIds.forEach(qId => {
            for (let topic in physicsData) {
                let foundQuiz = physicsData[topic].quizzes.find(q => q.id === qId);
                if (foundQuiz) {
                    let quizCopy = JSON.parse(JSON.stringify(foundQuiz));
                    let failedStmtIds = mistakesReport.filter(m => m.questionId.startsWith(qId)).map(m => m.questionId.split('_')[1]);
                    
                    quizCopy.statements = quizCopy.statements.filter(s => failedStmtIds.includes(s.id));
                    quizCopy.statements.forEach(s => {
                        let log = mistakesReport.find(m => m.questionId === `${qId}_${s.id}`);
                        s.failCount = log ? log.failCount : 1;
                    });
                    currentQuizzes.push(quizCopy);
                    break;
                }
            }
        });
    } else {
        if (!physicsData[currentTopic]) {
            contentArea.innerHTML = '<div class="question-card"><p>Dữ liệu chuyên đề đang được cập nhật...</p></div>';
            return;
        }
        
        if (physicsData[currentTopic].theory) {
            theoryHtml = `<div class="theory-section">${physicsData[currentTopic].theory}</div>
                          <h2 style="margin: 40px 0 24px 0; font-size: 1.5rem; text-transform: uppercase; color: var(--primary-color); text-align: center;">PHẦN BÀI TẬP VẬN DỤNG</h2>`;
        }

        currentQuizzes = physicsData[currentTopic].quizzes || [];
        if (!window.currentUserAnswers) window.currentUserAnswers = {};
    }

    let headerTitle = isMistakeTab ? `<h2 style="color: #f43f5e; margin-bottom: 24px; text-align: center; font-size: 1.5rem; font-weight:800; text-transform: uppercase;">🎯 ĐỀ ÔN TẬP CÁ NHÂN HÓA (${currentQuizzes.length} câu)</h2>` : '';
    
    let quizzesHtml = currentQuizzes.map((quiz, index) => {
        let contextText = quiz.context.replace(/(<strong[^>]*>)\s*Câu\s*\d+\s*[:\-\.]*\s*/i, '$1').replace(/^Câu\s*\d+\s*[:\-\.]*\s*/i, '');
        let imageHtml = quiz.image ? `<img src="${quiz.image}" class="question-img" alt="Sơ đồ minh họa">` : '';

        let borderTopColor = 'var(--primary-color)'; 
        if (isMistakeTab) borderTopColor = '#ef4444';
        else if (currentTopic === 'nhiet') borderTopColor = 'var(--color-nhiet)';
        else if (currentTopic === 'khi') borderTopColor = 'var(--color-khi)';
        else if (currentTopic === 'tu') borderTopColor = 'var(--color-tu)';
        else if (currentTopic === 'hatnhan') borderTopColor = 'var(--color-hatnhan)';

        return `
            <div class="question-card" id="card_${quiz.id}" style="border-top-color: ${borderTopColor}">
                <div class="question-context"><strong>Câu ${index + 1}:</strong> ${contextText}</div>
                ${imageHtml}
                <div class="statements-container">
                    ${quiz.statements.map((s, sIndex) => {
                        let prefixMatch = s.text.match(/^[a-d](?=\s*[)\.])/i);
                        let letter = prefixMatch ? prefixMatch[0].toLowerCase() : (s.id && s.id.length === 1 ? s.id.toLowerCase() : String.fromCharCode(97 + sIndex));
                        let labelText = `<strong>${letter}) </strong>`;
                        let cleanText = s.text.replace(/^[a-d]\s*[)\.]\s*/i, '');
                        
                        const savedAnswers = window.currentUserAnswers[quiz.id];
                        const currentChoice = savedAnswers ? savedAnswers[s.id] : undefined;
                        
                        const isTrueChecked = currentChoice === true ? 'checked' : '';
                        const isFalseChecked = currentChoice === false ? 'checked' : '';

                        let alertBadge = isMistakeTab ? `<span style="background: rgba(239, 68, 68, 0.2); color: #fca5a5; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; border: 1px solid rgba(239,68,68,0.3); margin-left: 8px;">Sai ${s.failCount} lần</span>` : '';

                        // TÍNH NĂNG MỚI: Xử lý màu sắc hiển thị và phản hồi Đúng/Sai trực quan sau khi đã nộp bài
                        let stmtFeedbackClass = '';
                        let checkStatusText = '';
                        
                        if (window.isSubmitted) {
                            if (currentChoice !== undefined) {
                                if (currentChoice === s.isTrue) {
                                    stmtFeedbackClass = 'style="background: rgba(74, 222, 128, 0.05); border: 1px solid rgba(74, 222, 128, 0.3); padding: 8px; border-radius:8px; margin-bottom:8px;"';
                                    checkStatusText = '<span style="color:#4ade80; font-weight:700; font-size:0.85rem; margin-left:8px;">✔ Chính xác</span>';
                                } else {
                                    stmtFeedbackClass = 'style="background: rgba(244, 63, 94, 0.05); border: 1px solid rgba(244, 63, 94, 0.3); padding: 8px; border-radius:8px; margin-bottom:8px;"';
                                    checkStatusText = '<span style="color:#f43f5e; font-weight:700; font-size:0.85rem; margin-left:8px;">❌ Sai lệch</span>';
                                }
                            } else {
                                stmtFeedbackClass = 'style="background: rgba(251, 191, 36, 0.03); border: 1px dashed rgba(251, 191, 36, 0.3); padding: 8px; border-radius:8px; margin-bottom:8px;"';
                                checkStatusText = `<span style="color:#fbbf24; font-size:0.82rem; margin-left:8px;">⚠️ Bỏ trống (Đáp án: ${s.isTrue ? 'Đúng' : 'Sai'})</span>`;
                            }
                        } else {
                            stmtFeedbackClass = 'class="statement"';
                        }

                        // Tạo chuỗi hộp giải thích (Chỉ mở ra khi đã bấm nộp bài tổng hoặc bấm xem đơn lẻ trước đó)
                        let isSingleCheckedExp = (document.getElementById(`exp_${quiz.id}_${s.id}`) && document.getElementById(`exp_${quiz.id}_${s.id}`).innerHTML !== '');
                        let displayExpHtml = (window.isSubmitted && s.exp) ? `block` : (isSingleCheckedExp ? 'block' : 'none');
                        let contentExpHtml = (window.isSubmitted && s.exp) ? `💡 <strong>Giải thích chuẩn:</strong> ${s.exp}` : '';

                        return `
                        <div ${stmtFeedbackClass} id="stmt_${quiz.id}_${s.id}">
                            <div class="stmt-row">
                                <div class="statement-text">${labelText}${cleanText} ${alertBadge} ${checkStatusText}</div>
                                <div class="options">
                                    <label class="opt-btn">
                                        <input type="radio" name="${quiz.id}-${s.id}" value="true" ${isTrueChecked} ${window.isSubmitted ? 'disabled' : ''} onclick="selectAnswer('${quiz.id}', '${s.id}', true)"> Đúng
                                    </label>
                                    <label class="opt-btn">
                                        <input type="radio" name="${quiz.id}-${s.id}" value="false" ${isFalseChecked} ${window.isSubmitted ? 'disabled' : ''} onclick="selectAnswer('${quiz.id}', '${s.id}', false)"> Sai
                                    </label>
                                </div>
                            </div>
                            <div class="stmt-explanation" id="exp_${quiz.id}_${s.id}" style="display: ${displayExpHtml}; margin-top:8px; background:#0f172a; padding:10px; border-radius:6px; border-left:3px solid #fbbf24; font-size:0.88rem; line-height:1.5;">${contentExpHtml}</div>
                        </div>
                        `;
                    }).join('')}
                </div>
                <button class="btn-check" style="${isMistakeTab ? 'background-color: #991b1b; border-color: #ef4444;' : ''}" ${window.isSubmitted ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''} onclick="checkAnswers('${quiz.id}')">Kiểm tra kết quả</button>
            </div>
        `;
    }).join('');

    // NÚT ĐIỀU HƯỚNG BÀI THI: NỘP BÀI TỔNG HỢP / THI LẠI ĐỀ MỚI
    let submitHtml = '';
    if (!isCamNangTab && currentQuizzes.length > 0) {
        submitHtml = `
            <div style="text-align: center; margin: 40px 0 20px 0; display:flex; gap:16px; justify-content:center; flex-wrap:wrap;">
                <button class="submit-btn-global" onclick="submitAndScore()">
                     🚀 Nộp bài và xem kết quả toàn diện
                </button>
                ${window.isSubmitted ? `
                    <button class="submit-btn-global" style="background: linear-gradient(135deg, #475569, #334155); border-color:#64748b;" onclick="window.isSubmitted = false; window.initApp();">
                         🔄 Reset làm lại đề này
                    </button>
                ` : ''}
            </div>
        `;
    }

    // Đổ toàn bộ dữ liệu ra màn hình
    contentArea.innerHTML = theoryHtml + headerTitle + quizzesHtml + submitHtml;

    setTimeout(() => {
        if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
            MathJax.typesetPromise([contentArea]).catch((err) => console.log(err));
        }
    }, 100);
};

// LOGIC XỬ LÝ CÔNG CỤ TƯƠNG TÁC CHỮ SỐ CÓ NGHĨA
window.analyzeSigFigs = function() {
    const inputVal = document.getElementById('sigFigInput').value.trim();
    const targetVal = document.getElementById('roundToInput').value.trim();
    const resultDiv = document.getElementById('sigFigResult');
    
    if (!inputVal || isNaN(Number(inputVal))) {
        resultDiv.innerHTML = `<span style="color: #ef4444; font-weight: 600;">⚠️ Vui lòng nhập một số hợp lệ!</span>`;
        resultDiv.classList.add('show');
        return;
    }

    let s = inputVal.replace(/^-/, '').trim(); 
    let sigFigsCount = 0;
    let nuanceNote = '';

    // Thuật toán đếm Chữ số có nghĩa chuẩn Vật Lý
    if (parseFloat(s) === 0) {
        let dotIdx = s.indexOf('.');
        sigFigsCount = (dotIdx === -1) ? 1 : (s.length - 1);
    } else if (s.includes('.')) {
        let clean = s.replace('.', '').replace(/^0+/, '');
        sigFigsCount = clean.length;
    } else {
        let clean = s.replace(/^0+/, '');
        sigFigsCount = clean.length;
        if (clean.endsWith('0')) {
            nuanceNote = `<br><small style="color: #fbbf24;">* <em>Lưu ý thực tế:</em> Với số nguyên kết thúc bằng số 0 (như ${inputVal}), các chữ số 0 cuối có thể là có nghĩa hoặc chỉ là định vị thập phân tùy thuộc độ chính xác thiết bị đo.</small>`;
        }
    }

    let reportHtml = `<strong style="color: #4ade80; font-size: 1rem;">🔍 Kết quả phân tích số ${inputVal}:</strong><br>`;
    reportHtml += `• Số chữ số có nghĩa hiện tại: <strong style="color: #38bdf8; font-size: 1.15rem;">${sigFigsCount}</strong> chữ số.${nuanceNote}<br>`;

    // Xử lý làm tròn khoa học dựa theo hàm toPrecision cao cấp của JavaScript
    if (targetVal && !isNaN(targetVal) && parseInt(targetVal) > 0) {
        let sig = parseInt(targetVal);
        let num = Number(inputVal);
        let standardDisplay = num.toPrecision(sig);

        reportHtml += `• Làm tròn về đúng <strong style="color: #fbbf24;">${sig}</strong> chữ số có nghĩa: <strong style="color: #f59e0b; font-size: 1.25rem; background: rgba(245,158,11,0.12); padding: 2px 10px; border-radius: 6px; border: 1px solid rgba(245,158,11,0.2); margin-left: 4px;">${standardDisplay}</strong><br>`;
        reportHtml += `<small style="color: var(--text-muted); margin-top: 6px; display: block;">💡 <em>Giải trình cơ chế:</em> ${sig === sigFigsCount ? "Số liệu đã trùng khớp với số lượng mong muốn." : (sig < sigFigsCount ? "Hệ thống triệt tiêu các chữ số kém ý nghĩa và tự động áp dụng quy tắc làm tròn tiêu chuẩn (≥ 5 tăng tiến, < 5 giữ nguyên)." : "Hệ thống bổ sung thêm chữ số 0 có nghĩa ở cuối hoặc chuyển đổi dạng lũy thừa cơ số 10 chuẩn hóa để đảm bảo độ chính xác thực nghiệm.")}</small>`;
    } else {
        reportHtml += `<span style="color: #fbbf24; display: block; margin-top: 6px;">💡 Điền thêm số chữ số cần giữ ở ô bên cạnh (Ví dụ: 3) để thực hành quy tắc làm tròn phòng thi tự động.</span>`;
    }

    resultDiv.innerHTML = reportHtml;
    resultDiv.classList.add('show');
};

// 6. CẬP NHẬT KHI CHỌN ĐÁP ÁN
window.selectAnswer = function(questionId, statementId, isTrueSelected) {
    if (!window.currentUserAnswers) window.currentUserAnswers = {};
    if (!window.currentUserAnswers[questionId]) window.currentUserAnswers[questionId] = {};
    window.currentUserAnswers[questionId][statementId] = isTrueSelected;

    try {
        if (typeof TPhysicsPro !== 'undefined' && currentTopic !== 'khac-phuc-loi' && currentTopic !== 'cam-nang') {
            TPhysicsPro.Progress.saveProgress(currentTopic, 0, window.currentUserAnswers);
        }
    } catch (e) {}
};

// 7. HÀM CHUYỂN CHUYÊN ĐỀ
window.switchTopic = function(topic, element) {
    currentTopic = topic;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    
    if (topic !== 'khac-phuc-loi' && topic !== 'cam-nang') {
        try {
            if (typeof TPhysicsPro !== 'undefined') {
                let savedState = TPhysicsPro.Progress.loadProgress(currentTopic);
                window.currentUserAnswers = savedState ? savedState.answers || {} : {};
            } else { window.currentUserAnswers = {}; }
        } catch (e) { window.currentUserAnswers = {}; }
    } else {
        window.currentUserAnswers = {};
    }
    renderQuizzes();
if (typeof window.updateDashboard === 'function') window.updateDashboard(); 
};

// 8. HÀM KIỂM TRA ĐÁP ÁN CỤC BỘ
window.checkAnswers = function(quizId) {
    const contentArea = document.getElementById('contentArea');
    
    // SỬA LỖI "RÂU ÔNG NỌ CẮM CẰM BÀ KIA": Chỉ tìm câu hỏi trong chuyên đề hiện tại
    let quizData = null;
    if (physicsData[currentTopic] && physicsData[currentTopic].quizzes) {
        quizData = physicsData[currentTopic].quizzes.find(q => q.id === quizId);
    }
    
    if (!quizData) return;

    quizData.statements.forEach(stmt => {
        const selected = document.querySelector(`input[name="${quizId}-${stmt.id}"]:checked`);
        const stmtDiv = document.getElementById(`stmt_${quizId}_${stmt.id}`);
        const expDiv = document.getElementById(`exp_${quizId}_${stmt.id}`);
        
        if (stmtDiv && expDiv) {
            stmtDiv.classList.remove('correct', 'wrong');

            if (!selected) {
                expDiv.innerHTML = `<span style="color: #fbbf24; font-weight: 500;">⚠️ Bạn chưa chọn đáp án cho ý này!</span>`;
                // SỬA LỖI KHÔNG HIỆN KẾT QUẢ: Ép hiển thị đè lên CSS cũ
                expDiv.style.display = 'block'; 
                expDiv.classList.add('show');
            } else {
                const isUserTrue = selected.value === 'true';
                const isCorrect = (isUserTrue === stmt.isTrue);

                let statusText = isCorrect 
                    ? '<strong style="color: #4ade80; font-size: 0.95rem;">✔ Chính xác!</strong>' 
                    : '<strong style="color: #f87171; font-size: 0.95rem;">✘ Không chính xác!</strong>';

                if (isCorrect) {
                    stmtDiv.classList.add('correct');
                    try { if (typeof TPhysicsPro !== 'undefined') TPhysicsPro.MistakeLog.resolveMistake(`${quizId}_${stmt.id}`); } catch(e){}
                } else {
                    stmtDiv.classList.add('wrong');
                    try {
                        if (typeof TPhysicsPro !== 'undefined') {
                            TPhysicsPro.MistakeLog.logMistake(`${quizId}_${stmt.id}`, {
                                topic: currentTopic,
                                userChoice: isUserTrue,
                                correctInterpretation: stmt.isTrue
                            });
                        }
                    } catch(e){}
                }
                
                expDiv.innerHTML = `${statusText} <br> <strong style="color:#38bdf8;">💡 Giải thích:</strong> ${stmt.exp || "Chưa có lời giải chi tiết."}`;
                // SỬA LỖI KHÔNG HIỆN KẾT QUẢ: Ép hiển thị đè lên CSS cũ
                expDiv.style.display = 'block'; 
                expDiv.classList.add('show');
            }
        }
    });

    // Cập nhật lại công thức Toán học MathJax nếu có
   

    if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
        MathJax.typesetPromise([contentArea]).catch((err) => console.log("MathJax Error: ", err));
    }
};
// 9. HÀM NỘP BÀI TỔNG HỢP TOÀN ĐỀ
window.submitAndScore = function() {
    if (typeof physicsData === 'undefined' || !physicsData[currentTopic] || !physicsData[currentTopic].quizzes) {
        alert("Không tìm thấy dữ liệu để chấm điểm!");
        return;
    }

    const currentQuizzes = physicsData[currentTopic].quizzes;
    let totalQuestions = currentQuizzes.length;
    let totalStatements = 0;
    let correctStatementsCount = 0;
    let perfectQuestionsCount = 0;
    let totalScore = 0; 
    let reportDetailsHtml = '';
    
    let isMistakeTab = (currentTopic === 'khac-phuc-loi');

    if (!examStartTime) examStartTime = new Date();
    const timeElapsed = Math.floor((new Date() - examStartTime) / 1000);
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    let timeString = `${minutes} phút ${seconds} giây`;

    currentQuizzes.forEach((quiz, index) => {
        let quizCorrectStatements = 0;
        let quizTotalStatements = quiz.statements.length;
        totalStatements += quizTotalStatements;

        quiz.statements.forEach(stmt => {
            const savedAnswers = window.currentUserAnswers?.[quiz.id];
            const userChoice = savedAnswers?.[stmt.id];
            
            if (userChoice !== undefined && userChoice === stmt.isTrue) {
                correctStatementsCount++;
                quizCorrectStatements++;
                if (isMistakeTab && typeof TPhysicsPro !== 'undefined') {
                    TPhysicsPro.MistakeLog.resolveMistake(`${quiz.id}_${stmt.id}`);
                }
            } else if (userChoice !== undefined && userChoice !== stmt.isTrue) {
                if (typeof TPhysicsPro !== 'undefined') {
                    TPhysicsPro.MistakeLog.logMistake(`${quiz.id}_${stmt.id}`, {
                        topic: currentTopic,
                        context: quiz.context,
                        statementText: stmt.text
                    });
                }
            }
        });

        let isPerfect = (quizCorrectStatements === quizTotalStatements);
        if (isPerfect) perfectQuestionsCount++;

        let quizScore = 0;
        if (quizCorrectStatements === 1) quizScore = 0.1;
        else if (quizCorrectStatements === 2) quizScore = 0.25;
        else if (quizCorrectStatements === 3) quizScore = 0.5;
        else if (quizCorrectStatements === 4) quizScore = 1.0;
        
        totalScore += quizScore;

        let shortContext = quiz.context.split('.')[0] || `Câu ${index + 1}`;

        reportDetailsHtml += `
            <tr>
                <td><strong>Câu ${index + 1}</strong>: <span style="font-size:0.85rem; color:var(--text-muted);">${shortContext}</span></td>
                <td><span class="badge-info">${quizCorrectStatements}/${quizTotalStatements} ý</span></td>
                <td>${isPerfect ? '<span style="color: #4ade80; font-weight: bold;">✔ Tuyệt đối</span>' : '<span style="color: #94a3b8;">Chưa trọn vẹn</span>'}</td>
                <td><strong style="color: #fbbf24;">${quizScore.toFixed(2)}đ</strong></td>
            </tr>
        `;
    });

    isSubmitted = true;

    // Lưu bài học sinh đã làm vào LocalStorage và lưu Lịch sử điểm
    if (typeof TPhysicsPro !== 'undefined' && currentTopic !== 'khac-phuc-loi' && currentTopic !== 'cam-nang') {
        TPhysicsPro.Progress.saveProgress(currentTopic, window.currentUserAnswers);
        
        let topicNames = { 'nhiet': 'Vật lý Nhiệt', 'khi': 'Khí Lý Tưởng', 'tu': 'Từ Trường', 'hatnhan': 'Vật Lý Hạt Nhân' };
        if (TPhysicsPro.ScoreHistory) {
            TPhysicsPro.ScoreHistory.saveScore(currentTopic, topicNames[currentTopic] || currentTopic, totalScore, correctStatementsCount, totalStatements, timeString);
        }
    }

    let modalHtml = `
        <div class="modal-overlay" id="scoreModal" style="position: fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); display:flex; align-items:center; justify-content:center; z-index:9999; padding: 20px;">
            <div class="modal-content" style="background: var(--bg-container); border: 1px solid var(--border-card); width:100%; max-width:700px; max-height: 85vh; border-radius:16px; display:flex; flex-direction:column; box-shadow: 0 10px 30px rgba(0,0,0,0.5); overflow:hidden;">
                <div style="background: linear-gradient(135deg, #1e3a8a, #3b82f6); padding: 20px; text-align:center;">
                    <h2 style="color:#fff; margin:0; font-size:1.6rem; font-weight:800;">🎉 KẾT QUẢ KIỂM TRA TOÀN DIỆN</h2>
                    <p style="color:#bfdbfe; margin:5px 0 0 0; font-size:0.9rem;">Chuyên đề: ${currentTopic === 'nhiet' ? 'Vật lý Nhiệt' : currentTopic}</p>
                </div>
                <div style="padding: 24px; overflow-y:auto; flex:1;">
                    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap:12px; margin-bottom:24px;">
                        <div style="background:#0f172a; padding:12px; border-radius:10px; text-align:center; border:1px solid #334155;">
                            <span style="font-size:0.8rem; color:var(--text-muted); display:block;">Tổng điểm đạt</span>
                            <strong style="font-size:1.6rem; color:#f59e0b;">${totalScore.toFixed(2)}đ</strong>
                        </div>
                        <div style="background:#0f172a; padding:12px; border-radius:10px; text-align:center; border:1px solid #334155;">
                            <span style="font-size:0.8rem; color:var(--text-muted); display:block;">Số ý chính xác</span>
                            <strong style="font-size:1.4rem; color:#10b981;">${correctStatementsCount}/${totalStatements}</strong>
                        </div>
                        <div style="background:#0f172a; padding:12px; border-radius:10px; text-align:center; border:1px solid #334155;">
                            <span style="font-size:0.8rem; color:var(--text-muted); display:block;">Câu hoàn hảo</span>
                            <strong style="font-size:1.4rem; color:#38bdf8;">${perfectQuestionsCount}/${totalQuestions}</strong>
                        </div>
                        <div style="background:#0f172a; padding:12px; border-radius:10px; text-align:center; border:1px solid #334155;">
                            <span style="font-size:0.8rem; color:var(--text-muted); display:block;">Thời gian làm</span>
                            <strong style="font-size:0.95rem; color:#e2e8f0; display:block; margin-top:8px; font-weight:700;">${timeString}</strong>
                        </div>
                    </div>
                    <h3 style="font-size:1.1rem; color:var(--text-primary); margin-bottom:12px; border-left:3px solid #38bdf8; padding-left:8px;">Bảng Phân Tích Chi Tiết</h3>
                    <div class="table-responsive">
                        <table class="styled-table" style="width:100%; font-size:0.9rem;">
                            <thead>
                                <tr>
                                    <th>Nội dung câu</th>
                                    <th>Số ý đúng</th>
                                    <th>Đánh giá</th>
                                    <th>Điểm số</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${reportDetailsHtml}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div style="padding: 16px; background:#1e293b; border-top:1px solid var(--border-card); text-align:right; display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:0.8rem; color:var(--text-muted);">* Hệ thống đã khóa bài thi để bạn xem lại đáp án và giải thích.</span>
                    <button onclick="document.getElementById('scoreModal').remove();" class="btn-primary" style="padding: 8px 20px; font-size:0.9rem; margin:0; background:linear-gradient(135deg, #d97706, #b45309);">Đóng bảng điểm</button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    window.renderQuizzes(); 
};

// 10. HÀM HIỂN THỊ BẢNG LỊCH SỬ ĐIỂM SỐ
window.showScoreHistory = function() {
    if (typeof TPhysicsPro === 'undefined' || !TPhysicsPro.ScoreHistory) {
        alert("Đang tải dữ liệu, vui lòng thử lại sau!");
        return;
    }

    const history = TPhysicsPro.ScoreHistory.getHistory();
    let historyHtml = '';

    if (history.length === 0) {
        historyHtml = `<div style="text-align: center; padding: 40px; color: var(--text-muted); font-size: 0.95rem;">Chưa có dữ liệu. Bạn hãy hoàn thành một bài kiểm tra để hệ thống lưu lại kết quả nhé!</div>`;
    } else {
        historyHtml = `
            <div class="table-responsive">
                <table class="styled-table" style="width:100%; font-size:0.9rem;">
                    <thead>
                        <tr>
                            <th>Thời gian nộp bài</th>
                            <th>Tên Chuyên Đề</th>
                            <th>Số ý đúng</th>
                            <th>Thời gian làm</th>
                            <th>Điểm số</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${history.map(record => {
                            const dateObj = new Date(record.date);
                            const dateStr = dateObj.toLocaleDateString('vi-VN') + ' - ' + dateObj.toLocaleTimeString('vi-VN', {hour: '2-digit', minute:'2-digit'});
                            return `
                                <tr>
                                    <td><span style="color:#94a3b8; font-size:0.85rem;">${dateStr}</span></td>
                                    <td><strong style="color:#e2e8f0;">${record.topicName}</strong></td>
                                    <td><span class="badge-info" style="background: rgba(16, 185, 129, 0.15); color: #34d399; padding: 4px 8px; border-radius:6px; border: 1px solid rgba(16, 185, 129, 0.3);">${record.correctStatements}/${record.totalStatements}</span></td>
                                    <td><span style="color:#cbd5e1;">${record.timeString}</span></td>
                                    <td><strong style="color: #fbbf24; font-size:1.1rem;">${record.score.toFixed(2)}đ</strong></td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }

    let modalHtml = `
        <div class="modal-overlay" id="historyModal" style="position: fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); display:flex; align-items:center; justify-content:center; z-index:9999; padding: 20px;">
            <div class="modal-content" style="background: var(--bg-container); border: 1px solid var(--border-card); width:100%; max-width:850px; max-height: 85vh; border-radius:16px; display:flex; flex-direction:column; box-shadow: 0 10px 30px rgba(0,0,0,0.5); overflow:hidden;">
                <div style="background: linear-gradient(135deg, #0f172a, #1e293b); padding: 20px; text-align:center; border-bottom: 1px solid var(--border-card);">
                    <h2 style="color:#fff; margin:0; font-size:1.5rem; font-weight:800;">⏱ LỊCH SỬ LÀM BÀI</h2>
                    <p style="color:var(--text-muted); margin:5px 0 0 0; font-size:0.9rem;">Hành trình nỗ lực và điểm số của bạn</p>
                </div>
                <div style="padding: 24px; overflow-y:auto; flex:1;">
                    ${historyHtml}
                </div>
                <div style="padding: 16px; background:#1e293b; border-top:1px solid var(--border-card); text-align:right;">
                    <button onclick="document.getElementById('historyModal').remove();" style="padding: 10px 24px; font-size:0.95rem; background: var(--primary-color); color:white; border:none; border-radius:8px; cursor:pointer; font-weight:700;">Đóng bảng lịch sử</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
};

// 11. HÀM CẬP NHẬT DASHBOARD
window.updateDashboard = function() {
    const resumeText = document.getElementById('resumeText');
    const resumeBtn = document.getElementById('resumeBtn');
    const resumeCard = document.getElementById('resumeCard'); 

    if (!resumeText || !resumeBtn) return;

    const topicsMap = { 'nhiet': 'Vật lý Nhiệt', 'khi': 'Khí Lý Tưởng', 'tu': 'Từ Trường', 'hatnhan': 'Vật Lý Hạt Nhân' };
    let lastTopicId = null; let lastTime = 0; let answeredQuestionsCount = 0; let targetScrollQuizId = null;

    try {
        if (typeof TPhysicsPro !== 'undefined') {
            for (let key in topicsMap) {
                let prog = TPhysicsPro.Progress.loadProgress(key);
                if (prog && prog.lastUpdated) {
                    let time = new Date(prog.lastUpdated).getTime();
                    if (time > lastTime) {
                        lastTime = time; lastTopicId = key;
                        answeredQuestionsCount = prog.answers ? Object.keys(prog.answers).length : 0;

                        if (typeof physicsData !== 'undefined' && physicsData[key] && physicsData[key].quizzes) {
                            const quizzes = physicsData[key].quizzes;
                            let lastAnsIdx = -1;
                            for (let i = 0; i < quizzes.length; i++) {
                                if (prog.answers && prog.answers[quizzes[i].id]) lastAnsIdx = i;
                            }
                            let nextIdx = lastAnsIdx + 1;
                            if (nextIdx >= quizzes.length) nextIdx = quizzes.length - 1;
                            if (nextIdx >= 0 && quizzes[nextIdx]) targetScrollQuizId = quizzes[nextIdx].id;
                        }
                    }
                }
            }
        }
    } catch (e) { console.error("Lỗi:", e); }

    if (lastTopicId) {
        resumeText.innerText = `Bài: ${topicsMap[lastTopicId]} - Đã làm ${answeredQuestionsCount} ý`;
        resumeBtn.innerText = "Tiếp tục ngay";
    } else {
        resumeText.innerText = "Chưa có dữ liệu. Hãy chọn một chuyên đề để bắt đầu!";
        resumeBtn.innerText = "Bắt đầu học";
    }

    const handleResumeClick = function(e) {
        if(e) e.stopPropagation(); 
        if (lastTopicId) {
            let tabIndex = Object.keys(topicsMap).indexOf(lastTopicId);
            const tabBtns = document.querySelectorAll('.tab-btn');
            if(tabBtns[tabIndex]) {
                tabBtns[tabIndex].click(); 
                if (targetScrollQuizId) {
                    setTimeout(() => {
                        const targetCard = document.getElementById(`card_${targetScrollQuizId}`);
                        if (targetCard) {
                            targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            targetCard.style.transition = "all 0.5s ease";
                            targetCard.style.boxShadow = "0 0 25px 8px rgba(217, 119, 6, 0.4)";
                            targetCard.style.borderColor = "var(--primary-color)";
                            setTimeout(() => { targetCard.style.boxShadow = ""; }, 2000);
                        }
                    }, 400); 
                }
            }
        } else {
            document.querySelectorAll('.tab-btn')[0].click(); 
        }
    };

    resumeBtn.onclick = handleResumeClick;
    if (resumeCard) resumeCard.onclick = handleResumeClick;
};

// 12. KHỞI TẠO ỨNG DỤNG SAU KHI DOM LOAD XONG
document.addEventListener('DOMContentLoaded', () => {
    const loginOverlay = document.getElementById('login-overlay');
    const passInput = document.getElementById('passInput');
    const userInput = document.getElementById('userInput');
    const loginError = document.getElementById('login-error');

    window.initApp = function() {
        window.currentUserAnswers = {};
        examStartTime = new Date(); 
        isSubmitted = false;        

        try {
            if (typeof TPhysicsPro !== 'undefined' && currentTopic !== 'khac-phuc-loi' && currentTopic !== 'cam-nang') {
                let savedState = TPhysicsPro.Progress.loadProgress(currentTopic);
                if (savedState && savedState.answers) window.currentUserAnswers = savedState.answers;
            }
        } catch (e) { console.error("Lỗi:", e); }
        
        window.updateDashboard(); 
        window.renderQuizzes(); 
    };

    try {
        if (typeof TPhysicsPro !== 'undefined' && TPhysicsPro.Auth.isLoggedIn()) {
            if (loginOverlay) loginOverlay.style.display = 'none';
            window.initApp(); 
        } else if (!loginOverlay) {
            window.initApp();
        }
    } catch (e) { window.initApp(); }

    window.handleLogin = function() {
        if (!passInput) return;
        const user = userInput ? userInput.value.trim() : "Học sinh";
        const pass = passInput.value.trim();
        const isRemember = document.getElementById('chkRememberMe')?.checked || false;

        if (pass === CORRECT_PASSWORD) {
            try { if (typeof TPhysicsPro !== 'undefined') TPhysicsPro.Auth.login(user, pass, isRemember); } catch(e){}
            if (loginOverlay) loginOverlay.style.display = 'none';
            window.initApp();
        } else {
            if (loginError) {
                loginError.textContent = '❌ Mật khẩu không chính xác, vui lòng thử lại!';
                loginError.style.display = 'block';
            }
            passInput.value = ''; passInput.focus();
        }
    };

    if (passInput) passInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleLogin(); });
    if (userInput) userInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') passInput.focus(); });
});