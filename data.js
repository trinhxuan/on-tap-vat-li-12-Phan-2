const physicsData = {
    nhiet: {
        theory: `
            <h2>Kiến thức trọng tâm: Vật lí nhiệt</h2>
            
            <div class="lesson-card">
                <h3>Bài 1. Cấu trúc của chất. Sự chuyển thể</h3>
                
                <div class="concept-box">
                    <h4>1. Mô hình động học phân tử</h4>
                    <ul>
                        <li><strong>Cấu tạo:</strong> Các chất được cấu tạo từ các hạt riêng biệt (phân tử, nguyên tử).</li>
                        <li><strong>Chuyển động:</strong> Chuyển động nhiệt hỗn loạn không ngừng. Nhiệt độ càng cao, chuyển động càng nhanh.</li>
                        <li><strong>Tương tác:</strong> Giữa các phân tử luôn tồn tại lực hút và lực đẩy phân tử.</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>2. So sánh 3 thể của vật chất</h4>
                    <div class="table-responsive">
                        <table class="styled-table">
                            <thead>
                                <tr>
                                    <th>Đặc điểm</th>
                                    <th>Thể Rắn</th>
                                    <th>Thể Lỏng</th>
                                    <th>Thể Khí</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Khoảng cách phân tử</strong></td>
                                    <td>Rất nhỏ</td>
                                    <td>Nhỏ</td>
                                    <td>Rất lớn</td>
                                </tr>
                                <tr>
                                    <td><strong>Lực tương tác</strong></td>
                                    <td>Rất mạnh</td>
                                    <td>Yếu hơn thể rắn</td>
                                    <td>Rất yếu (bỏ qua)</td>
                                </tr>
                                <tr>
                                    <td><strong>Chuyển động</strong></td>
                                    <td>Dao động quanh vị trí cân bằng cố định</td>
                                    <td>Dao động quanh VTCB di chuyển được</td>
                                    <td>Hỗn loạn về mọi phía</td>
                                </tr>
                                <tr>
                                    <td><strong>Hình dạng & Thể tích</strong></td>
                                    <td>Xác định</td>
                                    <td>Hình dạng của bình chứa, thể tích xác định</td>
                                    <td>Không xác định (chiếm toàn bộ bình)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="concept-box">
                    <h4>3. Sự chuyển thể</h4>
                    <ul>
                        <li><strong>Nóng chảy & Đông đặc:</strong> Chuyển qua lại giữa Rắn $\\leftrightarrow$ Lỏng.</li>
                        <li><strong>Hóa hơi & Ngưng tụ:</strong> Chuyển qua lại giữa Lỏng $\\leftrightarrow$ Khí.</li>
                    </ul>
                    <div class="highlight-box golden-note">
                        <strong>Lưu ý "Vàng":</strong> Trong suốt quá trình chuyển thể (ví dụ: đang nóng chảy hoặc đang sôi), nhiệt độ của chất tinh khiết không thay đổi dù vẫn tiếp tục cung cấp nhiệt.
                    </div>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Học sinh thường cho rằng khi đang đun sôi hoặc nóng chảy, nhiệt độ của khối chất sẽ tiếp tục tăng do vẫn được cấp nhiệt liên tục.</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Ghi nhớ nguyên tắc Lưu ý Vàng: <em>"Trong pha chuyển thể của chất tinh khiết, nhiệt độ tuyệt đối không thay đổi"</em>. Nhiệt lượng lúc này dùng để phá vỡ cấu trúc tinh thể/liên kết phân tử, không làm tăng động năng.</div>
            </div>

            <div class="lesson-card">
                <h3>Bài 2. Nội năng. Định luật I của nhiệt động lực học</h3>
                
                <div class="concept-box">
                    <h4>1. Nội năng ($U$)</h4>
                    <ul>
                        <li><strong>Khái niệm:</strong> Là tổng động năng chuyển động nhiệt và thế năng tương tác của các phân tử cấu tạo nên vật.</li>
                        <li><strong>Sự phụ thuộc:</strong> Phụ thuộc vào nhiệt độ ($T$) và thể tích ($V$). Riêng với khí lí tưởng, nội năng chỉ phụ thuộc vào nhiệt độ.</li>
                        <li><strong>Cách làm thay đổi nội năng:</strong> Thực hiện công hoặc Truyền nhiệt.</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>2. Định luật I Nhiệt động lực học</h4>
                    <p><strong>Biểu thức:</strong></p>
                    <div class="formula-box">
                        $$\\Delta U = A + Q$$
                    </div>
                    <p><strong>Quy ước dấu (Cực kỳ quan trọng để làm bài tập):</strong></p>
                    <div class="table-responsive">
                        <table class="styled-table">
                            <thead>
                                <tr>
                                    <th>Đại lượng</th>
                                    <th>Giá trị dương (>0)</th>
                                    <th>Giá trị âm (<0)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>$Q$</strong></td>
                                    <td>Hệ nhận nhiệt lượng</td>
                                    <td>Hệ tỏa nhiệt lượng</td>
                                </tr>
                                <tr>
                                    <td><strong>$A$</strong></td>
                                    <td>Hệ nhận công (bị nén)</td>
                                    <td>Hệ thực hiện công (giãn nở)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Áp dụng sai dấu của $A$ và $Q$, đặc biệt hay nhầm lẫn câu chữ giữa "hệ thực hiện công" và "hệ nhận công".</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Áp dụng "Quy tắc túi tiền": <br> - Tiền đi vào (Hệ nhận nhiệt $Q > 0$, nhận công $A > 0$).<br> - Tiền đi ra (Hệ tỏa nhiệt $Q < 0$, thực hiện công $A < 0$).</div>
            </div>

            <div class="lesson-card">
                <h3>Bài 3. Nhiệt độ. Thang nhiệt độ – nhiệt kế</h3>
                
                <div class="concept-box">
                    <h4>1. Chiều truyền nhiệt</h4>
                    <ul>
                        <li>Nhiệt lượng tự phát truyền từ vật có nhiệt độ cao sang vật có nhiệt độ thấp.</li>
                        <li>Quá trình truyền nhiệt dừng lại khi hai vật đạt trạng thái cân bằng nhiệt (cùng nhiệt độ).</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>2. Các thang nhiệt độ</h4>
                    <ul>
                        <li><strong>Thang Celsius ($^\\circ\\text{C}$):</strong> Mốc nước đá đang tan là $0^\\circ\\text{C}$, nước sôi ở áp suất tiêu chuẩn là $100^\\circ\\text{C}$.</li>
                        <li><strong>Thang Kelvin (K):</strong> Là thang nhiệt độ tuyệt đối.</li>
                        <li><strong>Nhiệt độ "Không tuyệt đối" (0 K):</strong> Là trạng thái giới hạn mà mọi phân tử ngừng chuyển động nhiệt, động năng bằng 0, thế năng tối thiểu.</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>3. Chuyển đổi nhiệt độ</h4>
                    <p><strong>Công thức:</strong></p>
                    <div class="formula-box">
                        $$T = t + 273,15$$
                    </div>
                    <div class="highlight-box">
                        <strong>Mẹo ghi nhớ:</strong> Độ biến thiên nhiệt độ trên hai thang đo là như nhau: $\\Delta T = \\Delta t$.
                    </div>
                </div>
            </div>

            <div class="lesson-card">
                <h3>Bài 4. Nhiệt dung riêng</h3>
                <div class="concept-box">
                    <ul>
                        <li><strong>Ý nghĩa:</strong> Đặc trưng cho khả năng thu hoặc tỏa nhiệt của một chất khi nhiệt độ thay đổi.</li>
                        <li><strong>Định nghĩa:</strong> Là nhiệt lượng cần cung cấp để 1 kg chất đó tăng thêm 1 K (hoặc $1^\\circ\\text{C}$).</li>
                    </ul>
                    <p><strong>Công thức tính nhiệt lượng:</strong></p>
                    <div class="formula-box">
                        $$Q = mc\\Delta T$$
                    </div>
                    <p><em>Trong đó:</em></p>
                    <ul>
                        <li>$Q$: Nhiệt lượng thu vào / tỏa ra (J)</li>
                        <li>$m$: Khối lượng vật (kg)</li>
                        <li>$c$: Nhiệt dung riêng (J/kg.K)</li>
                        <li>$\\Delta T$: Độ biến thiên nhiệt độ (K hoặc $^\\circ\\text{C}$)</li>
                    </ul>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Cộng thêm 273,15 vào cả công thức tính <strong>độ biến thiên</strong> nhiệt độ ($\\Delta T$) khi tính nhiệt lượng.</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Phân biệt rõ: Giá trị nhiệt độ thì lệch nhau 273,15, nhưng <strong>độ biến thiên thì bằng nhau</strong> ($\\Delta T = \\Delta t$). Khi giải bài toán tính $Q$, tăng $10^\\circ\\text{C}$ chính là tăng $10\\text{ K}$, KHÔNG ĐƯỢC cộng thêm 273,15.</div>
            </div>

            <div class="lesson-card">
                <h3>Bài 5. Nhiệt nóng chảy riêng</h3>
                <div class="concept-box">
                    <ul>
                        <li><strong>Ý nghĩa:</strong> Đặc trưng cho khả năng thay đổi trạng thái từ Rắn sang Lỏng của vật liệu (rất quan trọng trong ngành luyện kim, đúc).</li>
                        <li><strong>Định nghĩa:</strong> Là nhiệt lượng cần cung cấp cho 1 kg chất rắn ở nhiệt độ nóng chảy để nó chuyển hoàn toàn sang thể lỏng.</li>
                    </ul>
                    <p><strong>Công thức tính nhiệt lượng nóng chảy:</strong></p>
                    <div class="formula-box">
                        $$Q = \\lambda m$$
                    </div>
                    <p><em>Trong đó:</em></p>
                    <ul>
                        <li>$\\lambda$: Nhiệt nóng chảy riêng (J/kg)</li>
                        <li>$m$: Khối lượng chất rắn (kg)</li>
                    </ul>
                </div>
            </div>

            <div class="lesson-card">
                <h3>Bài 6. Nhiệt hoá hơi riêng</h3>
                <div class="concept-box">
                    <ul>
                        <li><strong>Ý nghĩa:</strong> Đặc trưng cho lượng nhiệt cần thiết để chuyển chất từ Lỏng sang Khí. (Nước có nhiệt hóa hơi rất lớn, ứng dụng để làm mát cơ thể khi đổ mồ hôi).</li>
                        <li><strong>Định nghĩa:</strong> Là nhiệt lượng cần cung cấp cho 1 kg chất lỏng hóa hơi hoàn toàn ở một nhiệt độ xác định.</li>
                    </ul>
                    <p><strong>Công thức tính nhiệt lượng hóa hơi:</strong></p>
                    <div class="formula-box">
                        $$Q = L m$$
                    </div>
                    <p><em>Trong đó:</em></p>
                    <ul>
                        <li>$L$: Nhiệt hóa hơi riêng (J/kg)</li>
                        <li>$m$: Khối lượng khối chất lỏng (kg)</li>
                    </ul>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc (Bài 5 & 6):</strong> Dùng nhầm công thức $Q = mc\\Delta T$ cho quá trình vật đang nóng chảy hoặc đang sôi.</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Nhìn vào trạng thái của bài toán: <br>- Đang <strong>thay đổi nhiệt độ</strong> (nóng lên/nguội đi) $\\rightarrow$ Dùng $Q = mc\\Delta T$.<br>- Đang <strong>chuyển thể</strong> (đá đang tan, nước đang sôi ở $100^\\circ\\text{C}$) $\\rightarrow$ Dùng $Q = \\lambda m$ hoặc $Q = Lm$.</div>
            </div>
        `,
     quizzes: [
    {
        id: "nhiet_1",
        context: "<strong>Câu 1.</strong> (Mô hình động học phân tử) Xét một khối nước đá (đang ở nhiệt độ dưới $0^\\circ\\text{C}$) được cung cấp nhiệt lượng để nóng chảy hoàn toàn thành nước lỏng.",
        statements: [
            { id: "a", text: "a) Ở thể rắn (nước đá), các phân tử nước dao động nhiệt xung quanh các vị trí cân bằng cố định.", isTrue: true, exp: "Đúng. Đây là định nghĩa và đặc điểm cơ bản của thể rắn." },
            { id: "b", text: "b) Trong quá trình chuyển từ thể rắn sang thể lỏng, khoảng cách trung bình giữa các phân tử nước tăng lên hàng nghìn lần giống như khi chuyển sang thể khí.", isTrue: false, exp: "Sai. Khoảng cách phân tử ở thể lỏng và thể rắn xấp xỉ nhau, chỉ khi chuyển sang thể khí khoảng cách mới tăng lên hàng nghìn lần." },
            { id: "c", text: "c) Lực tương tác giữa các phân tử ở thể lỏng nhỏ hơn so với thể rắn nhưng vẫn đủ lớn để giữ các phân tử không rời xa nhau hoàn toàn.", isTrue: true, exp: "Đúng. Bản chất lực tương tác phân tử ở thể lỏng trung gian giữa rắn và khí." },
            { id: "d", text: "d) Việc mô tả cấu trúc rắn, lỏng, khí dựa trên sự chuyển động và khoảng cách giữa các hạt gọi là mô hình động học phân tử.", isTrue: true, exp: "Đúng. Định nghĩa khái niệm mô hình động học phân tử." }
        ]
    },
    {
        id: "nhiet_2",
        context: "<strong>Câu 2.</strong> (Sự chuyển thể) Đun sôi một ấm nước tinh khiết ở áp suất khí quyển tiêu chuẩn ($1\\text{ atm} = 1{,}013 \\cdot 10^5\\text{ Pa}$).",
        statements: [
            { id: "a", text: "a) Nước chỉ có thể bay hơi khi đạt đến nhiệt độ sôi $100^\\circ\\text{C}$.", isTrue: false, exp: "Sai. Sự bay hơi xảy ra ở mọi nhiệt độ và chỉ diễn ra trên bề mặt chất lỏng, còn sự sôi mới xảy ra tại nhiệt độ xác định." },
            { id: "b", text: "b) Sự hóa hơi của nước bao gồm hai hình thức: sự bay hơi (xảy ra trên bề mặt) và sự sôi (xảy ra cả bên trong lòng chất lỏng).", isTrue: true, exp: "Đúng. Định nghĩa phân loại hai hình thức hóa hơi." },
            { id: "c", text: "c) Khi nước đang sôi, mặc dù vẫn tiếp tục được cung cấp nhiệt lượng từ bếp nhưng nhiệt độ của khối nước không thay đổi.", isTrue: true, exp: "Đúng. Trong suốt quá trình chuyển pha của chất tinh khiết, nhiệt lượng nhận được dùng để phá vỡ liên kết phân tử, nhiệt độ giữ cố định." },
            { id: "d", text: "d) Nếu đem ấm nước này lên đỉnh núi cao (nơi có áp suất khí quyển thấp hơn $1\\text{ atm}$) thì nước sẽ sôi ở nhiệt độ lớn hơn $100^\\circ\\text{C}$.", isTrue: false, exp: "Sai. Áp suất khí quyển giảm thì nhiệt độ sôi của chất lỏng giảm, nước sẽ sôi ở nhiệt độ nhỏ hơn $100^\\circ\\text{C}$." }
        ]
    },
    {
        id: "nhiet_3",
        context: "<strong>Câu 3.</strong> (Nội năng) Xét một khối khí lý tưởng đơn nguyên tử được chứa trong một xi-lanh kín, cách nhiệt có thể tích không đổi.",
        statements: [
            { id: "a", text: "a) Nội năng của khối khí là tổng động năng chuyển động nhiệt của các phân tử và thế năng tương tác giữa chúng.", isTrue: true, exp: "Đúng. Định nghĩa tổng quát về nội năng của một hệ nhiệt động." },
            { id: "b", text: "b) Vì là khối khí lý tưởng nên thế năng tương tác giữa các phân tử khí được coi là bằng không.", isTrue: true, exp: "Đúng. Theo mô hình khí lý tưởng, ta bỏ qua lực tương tác giữa các phân tử khi chúng chưa va chạm." },
            { id: "c", text: "c) Nội năng của khối khí lý tưởng này phụ thuộc vào cả nhiệt độ tuyệt đối $T$ và thể tích $V$ của khối khí.", isTrue: false, exp: "Sai. Nội năng của khí lý tưởng chỉ phụ thuộc vào nhiệt độ tuyệt đối $T$ vì thế năng tương tác phân tử bằng $0$." },
            { id: "d", text: "d) Có thể làm tăng nội năng của khối khí bằng cách thực hiện công (nén khí) hoặc truyền nhiệt lượng cho khối khí.", isTrue: true, exp: "Đúng. Đây là hai cách làm thay đổi nội năng của một hệ." }
        ]
    },
    {
        id: "nhiet_4",
        context: "<strong>Câu 4.</strong> (Định luật 1 Nhiệt động lực học - Lý thuyết) Áp dụng định luật 1 Nhiệt động lực học ($\\Delta U = A + Q$) cho một hệ nhiệt động kín.",
        statements: [
            { id: "a", text: "a) $\\Delta U$ biểu diễn độ biến thiên nội năng của hệ trong một quá trình biến đổi.", isTrue: true, exp: "Đúng. Ý nghĩa của đại lượng $\\Delta U$." },
            { id: "b", text: "b) Khi hệ truyền nhiệt cho môi trường xung quanh (quá trình tỏa nhiệt) thì quy ước dấu là $Q > 0$.", isTrue: false, exp: "Sai. Theo quy ước, hệ nhận nhiệt thì $Q > 0$, hệ truyền nhiệt (tỏa nhiệt) thì $Q < 0$." },
            { id: "c", text: "c) Khi hệ thực hiện công lên môi trường xung quanh (hệ sinh công) thì quy ước dấu là $A < 0$.", isTrue: true, exp: "Đúng. Hệ nhận công thì $A > 0$, hệ sinh công thì $A < 0$." },
            { id: "d", text: "d) Nếu hệ thực hiện một chu trình kín (trạng thái cuối trùng với trạng thái đầu) thì tổng nhiệt lượng và công hệ trao đổi bằng không ($A + Q = 0$).", isTrue: true, exp: "Đúng. Chu trình kín có trạng thái đầu và cuối trùng nhau nên $T_1 = T_2 \\Rightarrow \\Delta U = 0$. Do đó $A + Q = 0$." }
        ]
    },
    {
        id: "nhiet_5",
        context: "<strong>Câu 5.</strong> (Định luật 1 Nhiệt động lực học - Tính toán) Người ta cung cấp cho khối khí lý tưởng trong một xi-lanh một nhiệt lượng là $150\\text{ J}$. Khối khí dãn nở đẩy pít-tông lên thực hiện một công có độ lớn là $40\\text{ J}$.",
        statements: [
            { id: "a", text: "a) Nhiệt lượng mà khối khí nhận được từ môi trường ngoài là $Q = +150\\text{ J}$.", isTrue: true, exp: "Đúng. Hệ nhận nhiệt lượng nên đại lượng mang giá trị dương." },
            { id: "b", text: "b) Công mà khối khí trao đổi trong quá trình này là $A = +40\\text{ J}$.", isTrue: false, exp: "Sai. Khí dãn nở thực hiện công (sinh công) nên giá trị đại số của công phải âm: $A = -40\\text{ J}$." },
            { id: "c", text: "c) Độ biến thiên nội năng của khối khí trong quá trình dãn nở trên là $\\Delta U = 190\\text{ J}$.", isTrue: false, exp: "Sai. Vận dụng Định luật 1: $\\Delta U = A + Q = -40 + 150 = 110\\text{ J}$." },
            { id: "d", text: "d) Trong quá trình dãn nở này, nội năng của khối khí đã tăng lên so với trạng thái ban đầu.", isTrue: true, exp: "Đúng. Vì $\\Delta U = +110\\text{ J} > 0$ nên nội năng của hệ tăng." }
        ]
    },
    {
        id: "nhiet_6",
        context: "<strong>Câu 6.</strong> (Chiều truyền nhiệt) Cho hai vật kim loại $A$ và $B$ đặt cách ly nhau. Biết nội năng của vật $A$ lớn hơn nội năng của vật $B$, nhưng nhiệt độ của vật $A$ ($30^\\circ\\text{C}$) thấp hơn nhiệt độ của vật $B$ ($50^\\circ\\text{C}$). Đưa hai vật tiếp xúc nhiệt với nhau.",
        statements: [
            { id: "a", text: "a) Chiều truyền năng lượng nhiệt vĩ mô luôn đi từ vật có nội năng lớn sang vật có nội năng nhỏ.", isTrue: false, exp: "Sai. Năng lượng nhiệt tự phát truyền từ vật có nhiệt độ cao sang vật có nhiệt độ thấp, không phụ thuộc vào giá trị nội năng." },
            { id: "b", text: "b) Năng lượng nhiệt sẽ truyền tự phát từ vật $B$ sang vật $A$.", isTrue: true, exp: "Đúng. Quá trình truyền nhiệt diễn ra vì nhiệt độ vật $B$ ($50^\\circ\\text{C}$) cao hơn vật $A$ ($30^\\circ\\text{C}$)." },
            { id: "c", text: "c) Khi hai vật đạt cùng một nhiệt độ (trạng thái cân bằng nhiệt) thì sẽ không còn sự truyền năng lượng nhiệt vĩ mô giữa chúng.", isTrue: true, exp: "Đúng. Đây là bản chất của trạng thái cân bằng nhiệt." },
            { id: "d", text: "d) Nhiệt độ của hệ khi đạt trạng thái cân bằng nhiệt chắc chắn là trung bình cộng của hai nhiệt độ ban đầu ($40^\\circ\\text{C}$).", isTrue: false, exp: "Sai. Nhiệt độ cân bằng phụ thuộc vào khối lượng và nhiệt dung riêng của từng vật ($m_Ac_A\\Delta t_A = m_Bc_B\\Delta t_B$), không bắt buộc là trung bình cộng." }
        ]
    },
    {
        id: "nhiet_7",
        context: "<strong>Câu 7.</strong> (Thang nhiệt độ Celsius và Kelvin) Khi tiến hành khảo sát các thang đo nhiệt độ phổ biến trong khoa học và đời sống.",
        statements: [
            { id: "a", text: "a) Trong thang Celsius, nhiệt độ của nước đá đang tan ở áp suất tiêu chuẩn được chọn làm mốc quy ước là $0^\\circ\\text{C}$.", isTrue: true, exp: "Đúng. Điểm mốc chuẩn dưới của thang đo Celsius." },
            { id: "b", text: "b) Một độ chia ($1^\\circ\\text{C}$) trong thang Celsius bằng $\\frac{1}{100}$ khoảng cách giữa nhiệt độ tan chảy của nước đá và nhiệt độ sôi của nước tinh khiết ở áp suất tiêu chuẩn.", isTrue: true, exp: "Đúng. Định nghĩa phân khoảng độ chia của thang đo Celsius." },
            { id: "c", text: "c) Công thức chuyển đổi giá trị nhiệt độ từ thang Celsius sang thang Kelvin là: $T = t + 273{,}15$.", isTrue: true, exp: "Đúng. Công thức chuyển đổi chuẩn hóa giữa hai thang nhiệt độ." },
            { id: "d", text: "d) Nếu nhiệt độ phòng tăng từ $25^\\circ\\text{C}$ lên $30^\\circ\\text{C}$ thì theo thang Kelvin, nhiệt độ phòng đã tăng thêm một lượng bằng $278{,}15\\text{ K}$.", isTrue: false, exp: "Sai. Độ biến thiên nhiệt độ trong hai thang đo là tương đương: $\\Delta T = \\Delta t = 5\\text{ K}$. Tuyệt đối không cộng $273{,}15$ vào giá trị của độ biến thiên." }
        ]
    },
    {
        id: "nhiet_8",
        context: "<strong>Câu 8.</strong> (Nhiệt độ không tuyệt đối) Khái niệm nhiệt độ không tuyệt đối ($0\\text{ K}$) là một giới hạn lý thuyết đặc biệt quan trọng trong vật lý nhiệt.",
        statements: [
            { id: "a", text: "a) Nhiệt độ không tuyệt đối có giá trị bằng $0\\text{ K}$ và tương đương với $-273{,}15^\\circ\\text{C}$ trên thang đo Celsius.", isTrue: true, exp: "Đúng. Giá trị tương đương giữa hai thang đo." },
            { id: "b", text: "b) Tại nhiệt độ không tuyệt đối, động năng chuyển động nhiệt của các phân tử bằng không và thế năng của hệ là tối thiểu.", isTrue: true, exp: "Đúng. Bản chất vi mô của các hạt vật chất tại độ không tuyệt đối." },
            { id: "c", text: "c) Mọi thang nhiệt độ thông dụng hiện nay (Celsius, Kelvin, Fahrenheit) đều không thể nhận giá trị âm.", isTrue: false, exp: "Sai. Thang Celsius và Fahrenheit hoàn toàn có trị số âm. Chỉ riêng thang Kelvin là thang nhiệt độ tuyệt đối không nhận giá trị âm." },
            { id: "d", text: "d) Bằng hệ thống máy làm lạnh hiện đại, con người hiện nay đã đưa được vật chất đạt đến chính xác nhiệt độ $0\\text{ K}$ trong phòng thí nghiệm.", isTrue: false, exp: "Sai. Theo Nguyên lý thứ 3 của Nhiệt động lực học, nhiệt độ không tuyệt đối là giới hạn lý thuyết, chỉ có thể tiệm cận sát chứ không thể đạt đến chính xác $0\\text{ K}$." }
        ]
    },
    {
        id: "nhiet_9",
        context: "<strong>Câu 9.</strong> (Nhiệt dung riêng - Ý nghĩa & Tính toán) Cho biết giá trị nhiệt dung riêng của nhôm tinh khiết là $c = 880\\text{ J/(kg}\\cdot\\text{K)}$.",
        statements: [
            { id: "a", text: "a) Con số này cho biết cần cung cấp một nhiệt lượng là $880\\text{ J}$ để làm cho $1\\text{ kg}$ nhôm tăng thêm một nhiệt độ là $1\\text{ K}$ (hoặc $1^\\circ\\text{C}$).", isTrue: true, exp: "Đúng. Định nghĩa bản chất ý nghĩa của đại lượng nhiệt dung riêng." },
            { id: "b", text: "b) Đơn vị của nhiệt dung riêng có thể viết tương đương dưới dạng kí hiệu là $\\text{J/(kg}\\cdot^\\circ\\text{C)}$.", isTrue: true, exp: "Đúng. Vì độ chia và khoảng biến thiên của $1\\text{ K}$ bằng $1^\\circ\\text{C}$." },
            { id: "c", text: "c) Nhôm có nhiệt dung riêng nhỏ hơn nước ($4200\\text{ J/(kg}\\cdot\\text{K)}$), nên khi có cùng khối lượng và nhận cùng một nhiệt lượng như nhau, nhôm sẽ tăng nhiệt độ ít hơn nước.", isTrue: false, exp: "Sai. Từ công thức $\\Delta t = \\frac{Q}{mc}$, vật nào có $c$ nhỏ hơn thì độ tăng nhiệt độ $\\Delta t$ phải lớn hơn. Nhôm sẽ nóng lên nhanh và nhiều hơn nước." },
            { id: "d", text: "d) Nhiệt lượng cần thiết để làm một khối nhôm khối lượng $2\\text{ kg}$ tăng nhiệt độ từ $20^\\circ\\text{C}$ lên $70^\\circ\\text{C}$ là $88\\text{ kJ}$.", isTrue: true, exp: "Đúng. Áp dụng công thức: $Q = mc\\Delta t = 2 \\cdot 880 \\cdot (70 - 20) = 88\\,000\\text{ J} = 88\\text{ kJ}$." }
        ]
    },
    {
        id: "nhiet_10",
        context: "<strong>Câu 10.</strong> (Nhiệt nóng chảy riêng) Xét quá trình kỹ thuật đúc tượng đồng, người ta tra cứu đại lượng nhiệt nóng chảy riêng của đồng tấm là $\\lambda = 1{,}8 \\cdot 10^5\\text{ J/kg}$.",
        statements: [
            { id: "a", text: "a) Khái niệm nhiệt nóng chảy riêng được áp dụng để tính toán năng lượng cho quá trình một chất chuyển từ thể rắn sang thể khí.", isTrue: false, exp: "Sai. Nhiệt nóng chảy riêng áp dụng cho quá trình chuyển từ thể rắn sang thể lỏng ở nhiệt độ nóng chảy." },
            { id: "b", text: "b) Giá trị trên có ý nghĩa là cần cung cấp một nhiệt lượng bằng $1{,}8 \\cdot 10^5\\text{ J}$ để làm nóng chảy hoàn toàn $1\\text{ kg}$ đồng ở nhiệt độ nóng chảy của nó.", isTrue: true, exp: "Đúng. Ý nghĩa vật lý của hằng số nhiệt nóng chảy riêng $\\lambda$." },
            { id: "c", text: "c) Trong suốt giai đoạn khối đồng đang nóng chảy, mặc dù bếp lò vẫn cung cấp nhiệt lượng liên tục nhưng nhiệt độ của khối đồng không tăng.", isTrue: true, exp: "Đúng. Năng lượng hấp thụ dùng để phá vỡ mạng tinh thể chất rắn kết tinh, động năng trung bình không đổi nên nhiệt độ giữ nguyên." },
            { id: "d", text: "d) Nhiệt nóng chảy riêng $\\lambda$ của một chất tỉ lệ thuận với khối lượng của chất được đem đi nung chảy.", isTrue: false, exp: "Sai. Nhiệt nóng chảy riêng $\\lambda$ là hằng số đặc trưng cho bản chất của vật liệu, không phụ thuộc khối lượng. Nhiệt lượng nóng chảy $Q = \\lambda \\cdot m$ mới tỉ lệ với khối lượng." }
        ]
    },
    {
        id: "nhiet_11",
        context: "<strong>Câu 11.</strong> (Nhiệt hóa hơi riêng) Nước có hằng số nhiệt hóa hơi riêng rất lớn, giá trị đạt mức $L = 2{,}26 \\cdot 10^6\\text{ J/kg}$ đo ở nhiệt độ sôi $100^\\circ\\text{C}$.",
        statements: [
            { id: "a", text: "a) Nhiệt hóa hơi riêng là nhiệt lượng cần thiết để làm bay hơi hoàn toàn $1\\text{ kg}$ chất lỏng ở một nhiệt độ xác định.", isTrue: true, exp: "Đúng. Định nghĩa chuẩn hóa của đại lượng $L$." },
            { id: "b", text: "b) Để làm bay hơi hoàn toàn khối lượng $0{,}5\\text{ kg}$ nước ở nhiệt độ sôi $100^\\circ\\text{C}$ cần cung cấp một nhiệt lượng bằng $1{,}13 \\cdot 10^6\\text{ J}$.", isTrue: true, exp: "Đúng. Áp dụng hệ thức tính toán: $Q = L \\cdot m = 2{,}26 \\cdot 10^6 \\cdot 0{,}5 = 1{,}13 \\cdot 10^6\\text{ J}$." },
            { id: "c", text: "c) Nhờ nước có hằng số nhiệt hóa hơi riêng lớn, sự bài tiết và bay hơi mồ hôi trên da là cơ chế sinh học điều hòa làm mát cơ thể con người rất hiệu quả.", isTrue: true, exp: "Đúng. Khối lượng mồ hôi nhỏ bay hơi có thể thu một lượng nhiệt lớn từ cơ thể." },
            { id: "d", text: "d) Đơn vị đo của nhiệt hóa hơi riêng là $\\text{J/kg}$, điều này chứng tỏ giá trị của đại lượng này tỉ lệ thuận với thời gian đun.", isTrue: false, exp: "Sai. Đơn vị không chứa đại lượng thời gian ($s$). $L$ là hằng số nội tại của chất lỏng, hoàn toàn độc lập với thời gian đun nấu." }
        ]
    },
    {
        id: "nhiet_12",
        context: "<strong>Câu 12.</strong> (Đồ thị nhiệt độ - thời gian) Khảo sát đồ thị biểu diễn sự thay đổi nhiệt độ theo thời gian của $1\\text{ kg}$ nước đá ban đầu ở $-20^\\circ\\text{C}$ được đun nóng đều đặn bằng một bếp nhiệt ổn định. Đồ thị gồm: một đoạn xiên lên, một đoạn nằm ngang trùng mức $0^\\circ\\text{C}$, và cuối cùng là một đoạn tiếp tục xiên lên.",
        statements: [
            { id: "a", text: "a) Đoạn đồ thị song song với trục thời gian (nằm ngang) biểu diễn tương ứng cho quá trình khối nước đá đang nóng chảy.", isTrue: true, exp: "Đúng. Đoạn nằm ngang chỉ ra nhiệt độ không đổi trong quá trình chuyển thể." },
            { id: "b", text: "b) Trong khoảng thời gian tương ứng với đoạn nằm ngang, nước tồn tại đồng thời ở cả thể rắn và thể lỏng.", isTrue: true, exp: "Đúng. Trạng thái hỗn hợp hai pha đồng tại trong giai đoạn chuyển thể." },
            { id: "c", text: "c) Độ dốc của đồ thị (tỉ số $\\frac{\\Delta T}{\\Delta t}$) ở giai đoạn chất rắn (nước đá) và giai đoạn chất lỏng (nước) buộc phải bằng nhau.", isTrue: false, exp: "Sai. Độ dốc tỉ lệ nghịch với nhiệt dung riêng ($\\frac{1}{mc}$). Vì nhiệt dung riêng của nước đá ($2100\\text{ J/(kg}\\cdot\\text{K)}$) nhỏ hơn nước lỏng ($4200\\text{ J/(kg}\\cdot\\text{K)}$) nên đoạn nước đá sẽ dốc hơn đoạn nước lỏng." },
            { id: "d", text: "d) Từ hình dạng đồ thị trên, ta hoàn toàn không thể rút ra bất kỳ nhận xét định tính nào về nhiệt dung riêng của hệ.", isTrue: false, exp: "Sai. Dựa vào độ dốc của hai đoạn xiên, ta có thể so sánh định tính được $c_{\\text{đá}} < c_{\\text{nước}}$ do cùng công suất bếp nhưng đoạn đá nóng lên nhanh hơn." }
        ]
    },
    {
        id: "nhiet_13",
        context: "<strong>Câu 13.</strong> (Cân bằng nhiệt - Tính toán tổng hợp) Thả một khối nước đá khối lượng $m_1 = 200\\text{ g}$ ở nhiệt độ $0^\\circ\\text{C}$ vào một cốc nước chứa khối lượng $m_2 = 400\\text{ g}$ nước ở nhiệt độ $50^\\circ\\text{C}$. Bỏ qua sự trao đổi nhiệt với vỏ cốc và môi trường ngoài. Cho biết $\\lambda_{\\text{đá}} = 3{,}4 \\cdot 10^5\\text{ J/kg}$ và $c_{\\text{nước}} = 4200\\text{ J/(kg}\\cdot\\text{K)}$.",
        statements: [
            { id: "a", text: "a) Khối nước lỏng đóng vai trò là vật tỏa nhiệt, khối nước đá đóng vai trò là vật thu nhiệt để nóng chảy.", isTrue: true, exp: "Đúng. Nhiệt truyền tự phát từ nơi có nhiệt độ cao ($50^\\circ\\text{C}$) sang nơi có nhiệt độ thấp ($0^\\circ\\text{C}$)." },
            { id: "b", text: "b) Nhiệt lượng tối đa mà khối nước lỏng $400\\text{ g}$ có thể tỏa ra khi hạ nhiệt độ xuống mức $0^\\circ\\text{C}$ có giá trị là $84\\,000\\text{ J}$.", isTrue: true, exp: "Đúng. Tính toán: $Q_{\\text{tỏa max}} = m_2 \\cdot c_{\\text{nước}} \\cdot (t_2 - 0) = 0{,}4 \\cdot 4200 \\cdot 50 = 84\\,000\\text{ J}$." },
            { id: "c", text: "c) Nhiệt lượng cần thiết để làm nóng chảy hoàn toàn khối lượng $200\\text{ g}$ nước đá thành nước lỏng ở $0^\\circ\\text{C}$ là $68\\,000\\text{ J}$.", isTrue: true, exp: "Đúng. Tính toán: $Q_{\\text{thu tan}} = \\lambda \\cdot m_1 = 3{,}4 \\cdot 10^5 \\cdot 0{,}2 = 68\\,000\\text{ J}$." },
            { id: "d", text: "d) Sau khi hệ đạt trạng thái cân bằng nhiệt, trong cốc chắc chắn vẫn còn sót lại một phần nước đá chưa tan hết.", isTrue: false, exp: "Sai. Vì $Q_{\\text{tỏa max}} (84\\,000\\text{ J}) > Q_{\\text{thu tan}} (68\\,000\\text{ J})$ nên lượng nhiệt tỏa ra dư sức làm tan chảy hoàn toàn đá, nhiệt độ chung của cốc sau cân bằng sẽ lớn hơn $0^\\circ\\text{C}$." }
        ]
    },
    {
        id: "nhiet_14",
        context: "<strong>Câu 14.</strong> (Vận dụng Định luật 1 vào khí quyển) Một khối không khí ẩm chuyển động đối lưu bốc lên cao gặp áp suất thấp dãn nở ra, thực hiện công cơ học đẩy lớp không khí xung quanh. Quá trình này diễn ra rất nhanh nên có thể coi như cách nhiệt hoàn toàn với môi trường ngoài.",
        statements: [
            { id: "a", text: "a) Quá trình biến đổi vật lý của khối khí này hoàn toàn thuộc phạm vi áp dụng của Định luật 1 Nhiệt động lực học.", isTrue: true, exp: "Đúng. Bản chất là sự biến đổi nội năng thông qua thực hiện công." },
            { id: "b", text: "b) Vì khối khí dãn nở và sinh công cơ học đẩy các lớp khí khác nên công quy ước mang giá trị đại số là $A > 0$.", isTrue: false, exp: "Sai. Hệ dãn nở thực hiện công (sinh công) nên giá trị đại số quy ước của công phải âm ($A < 0$)." },
            { id: "c", text: "c) Do quá trình coi là cách nhiệt ($Q = 0$), áp dụng biểu thức $\\Delta U = A + Q$, ta rút ra nội năng của khối khí giảm.", isTrue: true, exp: "Đúng. Vì $Q = 0 \\Rightarrow \\Delta U = A$. Mà $A < 0 \\Rightarrow \\Delta U < 0$ nên nội năng của khối khí giảm mạnh." },
            { id: "d", text: "d) Sự suy giảm nội năng dẫn đến nhiệt độ của khối khí giảm xuống, làm hơi nước bên trong ngưng tụ tạo thành mây.", isTrue: true, exp: "Đúng. Hiện tượng vật lý giải thích cơ chế hình thành mây đối lưu trong khí tượng học." }
        ]
    },
    {
        id: "nhiet_15",
        context: "<strong>Câu 15.</strong> (So sánh bay hơi và sôi) Thực hiện khảo sát đặc tính của các quá trình hóa hơi của chất lỏng tinh khiết.",
        statements: [
            { id: "a", text: "a) Điểm chung của cả sự bay hơi và sự sôi đều là quá trình chuyển trạng thái vật chất từ thể lỏng sang thể khí.", isTrue: true, exp: "Đúng. Định nghĩa bản chất của sự hóa hơi." },
            { id: "b", text: "b) Quá trình sôi phụ thuộc chặt chẽ vào áp suất khí trên mặt thoáng: nếu áp suất tăng thì nhiệt độ sôi của chất lỏng tăng.", isTrue: true, exp: "Đúng. Bản chất vật lý của sự sôi, ứng dụng chế tạo nồi áp suất." },
            { id: "c", text: "c) Tốc độ bay hơi của chất lỏng hoàn toàn không phụ thuộc vào diện tích mặt thoáng tự do.", isTrue: false, exp: "Sai. Tốc độ bay hơi phụ thuộc lớn vào diện tích mặt thoáng, nhiệt độ, độ ẩm và tốc độ gió trên bề mặt." },
            { id: "d", text: "d) Khi luộc thực phẩm, nếu nước trong nồi đã sôi mạnh thì việc vặn to bếp ga sẽ giúp thực phẩm chín nhanh hơn do nhiệt độ nước tiếp tục tăng.", isTrue: false, exp: "Sai. Khi chất lỏng đang sôi, nhiệt độ giữ cố định không đổi ở nhiệt độ sôi ($100^\\circ\\text{C}$). Việc tăng thêm lửa chỉ làm nước bốc hơi cạn nhanh hơn và lãng phí năng lượng." }
        ]
    },
    {
        id: "nhiet_16",
        context: "<strong>Câu 16.</strong> (Ước lượng vĩ mô) Một phòng học kín có kích thước hình học là $5\\text{ m} \\times 8\\text{ m} \\times 3\\text{ m}$. Biết khối lượng riêng của không khí ở điều kiện phòng khoảng $\\rho = 1{,}2\\text{ kg/m}^3$ và nhiệt dung riêng đẳng áp của không khí đạt mức $c \\approx 1000\\text{ J/(kg}\\cdot\\text{K)}$. Người ta bật máy điều hòa để làm mát phòng.",
        statements: [
            { id: "a", text: "a) Thể tích hình học của khối không khí chứa trong phòng học là $120\\text{ m}^3$.", isTrue: true, exp: "Đúng. Công thức tính thể tích khối hộp: $V = 5 \\cdot 8 \\cdot 3 = 120\\text{ m}^3$." },
            { id: "b", text: "b) Khối lượng không khí trong phòng được xác định thông qua biểu thức mối liên hệ vĩ mô: $m = \\rho \\cdot V$.", isTrue: true, exp: "Đúng. Định nghĩa mối quan hệ giữa khối lượng riêng và thể tích." },
            { id: "c", text: "c) Khối lượng không khí chứa trong phòng học đạt giá trị $144\\text{ kg}$.", isTrue: true, exp: "Đúng. Tính toán: $m = 1{,}2 \\cdot 120 = 144\\text{ kg}$." },
            { id: "d", text: "d) Nhiệt lượng cần lấy đi để toàn bộ không khí trong phòng giảm nhiệt độ từ $30^\\circ\\text{C}$ xuống $20^\\circ\\text{C}$ có giá trị lớn hơn $2\\text{ MJ}$.", isTrue: false, exp: "Sai. Tính toán: $Q = mc\\Delta T = 144 \\cdot 1000 \\cdot (30 - 20) = 1\\,440\\,000\\text{ J} = 1{,}44\\text{ MJ}$. Giá trị này nhỏ hơn $2\\text{ MJ}$." }
        ]
    },
    {
        id: "nhiet_17",
        context: "<strong>Câu 17.</strong> (Cơ năng và Nội năng) Một quả bóng bằng chì khối lượng $500\\text{ g}$ rơi tự do từ độ cao $20\\text{ m}$ xuống mặt đất cứng rồi nằm yên tại đó. Bỏ qua sức cản không khí. Lấy gia tốc trọng trường $g = 10\\text{ m/s}^2$, nhiệt dung riêng của chì là $c_{\\text{chì}} = 130\\text{ J/(kg}\\cdot\\text{K)}$.",
        statements: [
            { id: "a", text: "a) Trong suốt tiến trình rơi tự do, cơ năng của quả bóng biến đổi liên tục chuyển hóa hoàn toàn thành nội năng của lớp không khí.", isTrue: false, exp: "Sai. Vì bỏ qua sức cản không khí (rơi tự do) nên cơ năng của hệ quả bóng được bảo toàn, không hao phí trong quá trình rơi." },
            { id: "b", text: "b) Động năng của quả bóng chì ngay trước thời điểm chạm đất có giá trị bằng $100\\text{ J}$.", isTrue: true, exp: "Đúng. Theo bảo toàn cơ năng: $W_đ = W_{t\\,\\text{max}} = mgh = 0{,}5 \\cdot 10 \\cdot 20 = 100\\text{ J}$." },
            { id: "c", text: "c) Tại thời điểm va chạm dừng lại, toàn bộ cơ năng vĩ mô của quả bóng đã chuyển hóa thành nội năng của chính quả bóng và mặt đất.", isTrue: true, exp: "Đúng. Định luật bảo toàn năng lượng toàn phần." },
            { id: "d", text: "d) Giả sử có đúng $50\\%$ cơ năng ban đầu biến thành nhiệt lượng làm nóng quả bóng thì nhiệt độ của quả bóng chì tăng thêm một lượng xấp xỉ $0{,}77^\\circ\\text{C}$.", isTrue: true, exp: "Đúng. Nhiệt lượng bóng nhận: $Q = 100 \\cdot 50\\% = 50\\text{ J}$. Ta có $Q = mc\\Delta t \\Rightarrow 50 = 0{,}5 \\cdot 130 \\cdot \\Delta t \\Rightarrow \\Delta t = \\frac{50}{65} \\approx 0{,}77^\\circ\\text{C}$." }
        ]
    },
    {
        id: "nhiet_18",
        context: "<strong>Câu 18.</strong> (Cấu trúc tinh thể và vô định hình) Tiến hành phân tích bản chất vật lý cấu trúc và sự nóng chảy của thủy tinh công nghiệp và nhựa đường.",
        statements: [
            { id: "a", text: "a) Thủy tinh và nhựa đường là các đại diện tiêu biểu của nhóm chất rắn vô định hình.", isTrue: true, exp: "Đúng. Phân loại cấu trúc chất rắn." },
            { id: "b", text: "b) Các hạt cấu tạo (nguyên tử, phân tử) trong chất rắn vô định hình được sắp xếp tuần hoàn, có trật tự hình học không gian xác định.", isTrue: false, exp: "Sai. Chất rắn vô định hình không có cấu trúc mạng tinh thể tuần hoàn kéo dài, các hạt sắp xếp hỗn độn." },
            { id: "c", text: "c) Khi bị nung nóng, thủy tinh không có một nhiệt độ nóng chảy xác định mà sẽ mềm dần ra trong một khoảng nhiệt độ.", isTrue: true, exp: "Đúng. Đặc tính đặc trưng của chất rắn vô định hình khi chuyển thể." },
            { id: "d", text: "d) Chính đặc tính không có nhiệt độ nóng chảy cố định giúp người thợ thổi thủy tinh có thể dễ dàng uốn nắn, tạo hình nghệ thuật khi nung nóng.", isTrue: true, exp: "Đúng. Ứng dụng thực tiễn của dải nhiệt độ hóa mềm vô định hình." }
        ]
    },
    {
        id: "nhiet_19",
        context: "<strong>Câu 19.</strong> (THỰC HÀNH THÍ NGHIỆM - Đo nhiệt dung riêng) Xét một thí nghiệm đo nhiệt dung riêng $c$ của nước sử dụng bộ dụng cụ gồm: nhiệt lượng kế cách nhiệt, dây điện trở nung, vôn kế, ampe kế, đồng hồ bấm giây và cân điện tử.",
        statements: [
            { id: "a", text: "a) Vai trò của lớp xốp hoặc chân không của vỏ nhiệt lượng kế là để tăng cường khả năng trao đổi nhiệt của hệ với môi trường ngoài.", isTrue: false, exp: "Sai. Vỏ lót xốp dùng để hạn chế tối đa sự truyền nhiệt (cách nhiệt), giảm sai số do thất thoát nhiệt." },
            { id: "b", text: "b) Điện năng tiêu thụ hóa thành nhiệt lượng mà dây điện trở tỏa ra cung cấp cho nước được xác định bằng công thức: $Q_{\\text{tỏa}} = U \\cdot I \\cdot t$.", isTrue: true, exp: "Đúng. Hệ thức tính công của dòng điện một chiều." },
            { id: "c", text: "c) Nếu hoàn toàn bỏ qua hao phí nhiệt lượng, nhiệt dung riêng $c$ được tính toán trực tiếp từ biểu thức: $c = \\frac{U \\cdot I \\cdot t}{m(t_2 - t_1)}$.", isTrue: true, exp: "Đúng. Rút ra từ phương trình cân bằng nhiệt lý tưởng: $Q_{\\text{tỏa}} = Q_{\\text{thu}} \\Rightarrow UIt = mc(t_2 - t_1)$." },
            { id: "d", text: "d) Trong thực tế luôn có thất thoát nhiệt ra môi trường. Nếu vẫn dùng công thức ở ý (c) để tính, giá trị nhiệt dung riêng thực nghiệm thu được sẽ lớn hơn giá trị chuẩn tra bảng.", isTrue: true, exp: "Đúng. Do có hao phí nên độ tăng nhiệt độ thực tế $(t_2 - t_1)$ bị nhỏ hơn lý thuyết, mẫu số nhỏ khiến giá trị $c$ tính ra bị đội lên lớn hơn thực tế." }
        ]
    },
    {
        id: "nhiet_20",
        context: "<strong>Câu 20.</strong> (THỰC HÀNH THÍ NGHIỆM - Đo nhiệt nóng chảy riêng) Học sinh đo nhiệt nóng chảy riêng của nước đá bằng cách thả các viên nước đá nhỏ đang tan ở $0^\\circ\\text{C}$ vào một nhiệt lượng kế chứa nước lỏng ở nhiệt độ phòng.",
        statements: [
            { id: "a", text: "a) Trước khi thả vào nhiệt lượng kế, các viên nước đá cần được lau khô bằng giấy thấm để tránh mang theo nước lỏng làm sai lệch khối lượng đá tính toán.", isTrue: true, exp: "Đúng. Nước bám ngoài đá sẽ làm tăng sai số khi cân khối lượng đá tham gia quá trình nóng chảy." },
            { id: "b", text: "b) Nhiệt lượng cần thiết để nước đá nóng chảy hoàn toàn được lấy từ nhiệt lượng do nước lỏng ban đầu và nhiệt lượng kế tỏa ra khi hạ nhiệt độ.", isTrue: true, exp: "Đúng. Cơ chế trao đổi nhiệt trong phương trình cân bằng." },
            { id: "c", text: "c) Công thức xác định nhiệt nóng chảy riêng thực nghiệm có dạng biểu thức là $\\lambda = \\frac{Q_{\\text{thu}}}{m_{\\text{đá}}}$.", isTrue: true, exp: "Đúng. Hệ thức cơ bản tính nhiệt hóa thể rắn sang lỏng." },
            { id: "d", text: "d) Nếu thí nghiệm kéo dài quá lâu, nhiệt lượng từ môi trường phòng truyền vào bên trong cốc sẽ làm cho giá trị hằng số $\\lambda$ đo được bị nhỏ hơn so với giá trị chuẩn.", isTrue: true, exp: "Đúng. Nhiệt ngoài truyền vào phụ giúp làm tan đá khiến lượng nhiệt ta tính toán từ nước lỏng tỏa ra ít hơn cần thiết, dẫn đến mẫu số giữ nguyên nhưng tử số nhỏ làm $\\lambda$ giảm." }
        ]
    },
    {
        id: 'nhiet_21',
        context: '<strong>Câu 21.</strong> Một nhóm học sinh làm mô hình và tiến hành thảo luận về cấu trúc phân tử của chất rắn kết tinh và chất rắn vô định hình dựa trên mô hình động học phân tử chất rắn.',
        statements: [
            { id: 'a', text: 'a) Trong cấu trúc của chất rắn kết tinh, các hạt liên kết rất chặt chẽ và chỉ dao động nhiệt quanh các vị trí cân bằng cố định xác định.', isTrue: true, exp: 'Đúng. Đây là đặc tính định xứ mạng tinh thể của chất rắn kết tinh.' },
            { id: 'b', text: 'b) Khi nhiệt độ của vật tăng lên, biên độ dao động nhiệt của các ion tại nút mạng tinh thể giảm đi đáng kể giúp cấu trúc vật rắn trở nên bền vững hơn.', isTrue: false, exp: 'Sai. Khi nhiệt độ tăng, các hạt nhận năng lượng lớn nên biên độ dao động tăng mạnh, khoảng cách trung bình tăng gây ra hiện tượng nở dài.' },
            { id: 'c', text: 'c) Vật rắn vô định hình không sở hữu một nhiệt độ nóng chảy xác định; khi bị nung nóng chúng sẽ mềm đi rồi chuyển pha dần sang thể lỏng.', isTrue: true, exp: 'Đúng. Bản chất của cấu trúc vô định hình không có ranh giới pha chuyển thể sắc nét.' },
            { id: 'd', text: 'd) Thủy tinh công nghiệp, nhựa đường và các kim loại phổ biến như đồng, sắt đều được xếp vào nhóm chất rắn vô định hình.', isTrue: false, exp: 'Sai. Thủy tinh và nhựa đường là chất vô định hình, nhưng các kim loại như đồng và sắt có cấu trúc mạng tinh thể nên là chất rắn kết tinh.' }
        ]
    },
    {
        id: 'nhiet_22',
        context: '<strong>Câu 22.</strong> Một khối chất rắn kết tinh có khối lượng $0{,}5\\text{ kg}$ ban đầu ở nhiệt độ $0^\\circ\\text{C}$ được cung cấp năng lượng bằng một bếp điện công suất nhiệt không đổi $P = 500\\text{ W}$. Tiến trình biến đổi nhiệt độ theo thời gian thu được đồ thị: Giai đoạn 1 (từ phút thứ 0 đến phút thứ 4): Nhiệt độ tăng đều từ $0^\\circ\\text{C}$ lên $100^\\circ\\text{C}$. Giai đoạn 2 (từ phút thứ 4 đến phút thứ 14): Nhiệt độ không đổi ở mức cố định $100^\\circ\\text{C}$.',
        statements: [
            { id: 'a', text: 'a) Trong suốt giai đoạn 2, khối chất không hấp thụ bất kỳ nhiệt lượng nào từ bếp điện vì đồ thị nhiệt độ nằm ngang.', isTrue: false, exp: 'Sai. Chất vẫn nhận nhiệt lượng đều đặn từ bếp điện ($Q = P \\cdot t$), năng lượng này dùng để bẻ gãy các liên kết nút mạng tinh thể để chuyển thể.' },
            { id: 'b', text: 'b) Nhiệt lượng mà khối chất rắn nhận được từ bếp trong 4 phút đầu tiên để tăng nhiệt độ lên $100^\\circ\\text{C}$ là $120\\,000\\text{ J}$.', isTrue: true, exp: 'Đúng. Điện năng hóa nhiệt lượng: $Q_1 = P \\cdot t_1 = 500 \\cdot (4 \\cdot 60) = 120\\,000\\text{ J}$.' },
            { id: 'c', text: 'c) Giá trị nhiệt dung riêng của chất này ở thể rắn tính toán được từ thực nghiệm trên xấp xỉ bằng $2400\\text{ J/(kg}\\cdot\\text{K)}$.', isTrue: true, exp: 'Đúng. Ta có $Q_1 = mc\\Delta t \\Rightarrow 120\\,000 = 0{,}5 \\cdot c \\cdot (100 - 0) \\Rightarrow c = 2400\\text{ J/(kg}\\cdot\\text{K)}$.' },
            { id: 'd', text: 'd) Hằng số nhiệt nóng chảy riêng của chất này được xác định từ thực nghiệm trên là $\\lambda = 6{,}0 \\cdot 10^5\\text{ J/kg}$.', isTrue: true, exp: 'Đúng. Thời gian nóng chảy $\\Delta t_2 = 14 - 4 = 10\\text{ phút} = 600\\text{ s}$. Nhiệt lượng nhận: $Q_2 = 500 \\cdot 600 = 300\\,000\\text{ J}$. Suy ra $\\lambda = \\frac{Q_2}{m} = \\frac{300\\,000}{0{,}5} = 6{,}0 \\cdot 10^5\\text{ J/kg}$.' }
        ]
    },
    {
        id: 'nhiet_23',
        context: '<strong>Câu 23.</strong> Trong một bình cách nhiệt lý tưởng có chứa một khối nước đá khối lượng $m_1 = 2\\text{ kg}$ ở nhiệt độ đầu $t_1 = -10^\\circ\\text{C}$. Người ta đổ thêm vào bình khối lượng $m_2 = 1\\text{ kg}$ nước lỏng ở nhiệt độ $t_2 = 40^\\circ\\text{C}$. Cho hằng số nhiệt dung riêng của đá là $c_1 = 2100\\text{ J/(kg}\\cdot\\text{K)}$, của nước là $c_2 = 4200\\text{ J/(kg}\\cdot\\text{K)}$, nhiệt nóng chảy riêng của nước đá là $\\lambda = 3{,}4 \\cdot 10^5\\text{ J/kg}$.',
        statements: [
            { id: 'a', text: 'a) Nhiệt lượng tối thiểu cần thiết để toàn bộ khối nước đá tăng nhiệt độ từ $-10^\\circ\\text{C}$ lên mức $0^\\circ\\text{C}$ là $42\\,000\\text{ J}$.', isTrue: true, exp: 'Đúng. Công thức tính: $Q_{\\text{thu1}} = m_1 \\cdot c_1 \\cdot (0 - (-10)) = 2 \\cdot 2100 \\cdot 10 = 42\\,000\\text{ J}$.' },
            { id: 'b', text: 'b) Khi hạ nhiệt độ từ $40^\\circ\\text{C}$ xuống thành nước lỏng ở $0^\\circ\\text{C}$, khối nước tỏa ra môi trường bên trong một nhiệt lượng tối đa bằng $168\\,000\\text{ J}$.', isTrue: true, exp: 'Đúng. Công thức tính: $Q_{\\text{tỏa1}} = m_2 \\cdot c_2 \\cdot (40 - 0) = 1 \\cdot 4200 \\cdot 40 = 168\\,000\\text{ J}$.' },
            { id: 'c', text: 'c) Do tổng nhiệt lượng khối nước tỏa ra lớn hơn nhiệt lượng khối đá thu vào để đạt $0^\\circ\\text{C}$, toàn bộ khối đá $2\\text{ kg}$ sẽ bị tan chảy hoàn toàn thành chất lỏng.', isTrue: false, exp: 'Sai. Nhiệt lượng dư sau khi đá đạt $0^\\circ\\text{C}$ là $\\Delta Q = 168\\,000 - 42\\,000 = 126\\,000\\text{ J}$. Lượng nhiệt cần để tan hết sạch đá phải là $Q_{\\text{tan cần}} = m_1 \\cdot \\lambda = 2 \\cdot 3{,}4 \\cdot 10^5 = 680\\,000\\text{ J}$. Vì $\\Delta Q < Q_{\\text{tan cần}}$ nên đá chỉ tan được một phần nhỏ.' },
            { id: 'd', text: 'd) Khi hệ đạt trạng thái cân bằng nhiệt, nhiệt độ cuối cùng của hệ là $0^\\circ\\text{C}$ và khối lượng nước đá còn sót lại trong xô là $1{,}63\\text{ kg}$.', isTrue: true, exp: 'Đúng. Vì đá chưa tan hết nên hệ cân bằng tại $0^\\circ\\text{C}$. Khối lượng đá bị tan chảy: $\\Delta m = \\frac{\\Delta Q}{\\lambda} = \\frac{126\\,000}{340\\,000} \\approx 0{,}37\\text{ kg}$. Khối lượng đá còn nguyên: $2 - 0{,}37 = 1{,}63\\text{ kg}$.' }
        ]
    },
    {
        id: 'nhiet_24',
        context: '<strong>Câu 24.</strong> Thí nghiệm xác định nhiệt hóa hơi riêng của nước: Học sinh dùng một bếp điện công suất phát nhiệt ổn định $P = 250\\text{ W}$ để đun khối lượng $0{,}4\\text{ kg}$ nước trong một cốc thủy tinh đạt tới trạng thái sôi ổn định ở $100^\\circ\\text{C}$. Tiếp tục bấm giờ đun sôi trong đúng thời gian $5\\text{ phút}$ thì thấy khối lượng nước còn lại là $0{,}34\\text{ kg}$. Biết hệ thống hao phí mất $20\\%$ nhiệt lượng ra không khí.',
        statements: [
            { id: 'a', text: 'a) Khối lượng nước lỏng đã chuyển pha hóa hơi trong giai đoạn đun sôi kéo dài trên là $0{,}06\\text{ kg}$.', isTrue: true, exp: 'Đúng. Khối lượng hao hụt: $\\Delta m = 0{,}4 - 0{,}34 = 0{,}06\\text{ kg}$.' },
            { id: 'b', text: 'b) Tổng điện năng mà bếp điện tiêu thụ trong khoảng thời gian đun sôi $5\\text{ phút}$ là $75\\,000\\text{ J}$.', isTrue: true, exp: 'Đúng. Tính công dòng điện: $A = P \\cdot t = 250 \\cdot (5 \\cdot 60) = 75\\,000\\text{ J}$.' },
            { id: 'c', text: 'c) Nhiệt lượng thực tế mang tính hữu ích mà khối nước nhận được để phục vụ quá trình hóa hơi là $60\\,000\\text{ J}$.', isTrue: true, exp: 'Đúng. Hiệu suất nhiệt đạt $80\\%$, nhiệt lượng hữu ích: $Q = A \\cdot 80\\% = 75\\,000 \\cdot 0{,}8 = 60\\,000\\text{ J}$.' },
            { id: 'd', text: 'd) Giá trị hằng số nhiệt hóa hơi riêng thực nghiệm tính toán được từ phép đo này là $2{,}26 \\cdot 10^6\\text{ J/kg}$.', isTrue: false, exp: 'Sai. Giá trị đo được từ số liệu thực nghiệm: $L = \\frac{Q}{\\Delta m} = \\frac{60\\,000}{0{,}06} = 1{,}0 \\cdot 10^6\\text{ J/kg}$. Số liệu $2{,}26 \\cdot 10^6\\text{ J/kg}$ chỉ là giá trị lý thuyết tra bảng chuẩn.' }
        ]
    },
    {
        id: 'nhiet_25',
        context: '<strong>Câu 25.</strong> Xét các hiện tượng bề mặt của khối chất lỏng liên quan đến lực căng bề mặt, hệ tượng dính ướt và hiện tượng không dính ướt cấu trúc hình học.',
        statements: [
            { id: 'a', text: 'a) Lực căng bề mặt luôn sở hữu phương vuông góc với đường giới hạn bề mặt tự do của chất lỏng và có xu hướng làm tăng diện tích bề mặt thoáng.', isTrue: false, exp: 'Sai. Lực căng bề mặt có phương tiếp tuyến với bề mặt tự do, vuông góc với đường giới hạn và có xu hướng co nhỏ diện tích bề mặt chất lỏng tới mức tối thiểu.' },
            { id: 'b', text: 'b) Nước lỏng không dính ướt bề mặt lá dọc mùng (hoặc lá sen) do lực hút giữa các phân tử nước với nhau mạnh hơn lực tương tác hút giữa các phân tử nước và phân tử cấu tạo lá.', isTrue: true, exp: 'Đúng. Đây là cơ chế giải thích bản chất của hiện tượng không dính ướt.' },
            { id: 'c', text: 'c) Hiện tượng mao dẫn chỉ xảy ra khi cấu trúc chất lỏng không dính ướt thành bình làm cho mực chất lỏng trong ống dâng cao.', isTrue: false, exp: 'Sai. Hiện tượng mao dẫn xảy ra ở cả hai trường hợp: dính ướt (mực chất lỏng dâng lên cao trong ống) và không dính ướt (mực chất lỏng bị hạ thấp xuống).' },
            { id: 'd', text: 'd) Các giọt sương buổi sớm đọng trên lá có dạng hình cầu gần như hoàn chỉnh chủ yếu do tác dụng của lực căng bề mặt muốn thu nhỏ diện tích xung quanh.', isTrue: true, exp: 'Đúng. Với một thể tích xác định, hình cầu là hình có diện tích bề mặt nhỏ nhất, giúp lực căng bề mặt đạt trạng thái năng lượng tối thiểu.' }
        ]
    },
    {
        id: 'nhiet_26',
        context: '<strong>Câu 26.</strong> Một lượng khí lý tưởng được bọc kín trong một xi-lanh pít-tông động dịch chuyển được. Khảo sát hệ thức Định luật 1 Nhiệt động lực học viết dưới dạng công thức $\\Delta U = A + Q$ với quy ước chuẩn của sách giáo khoa.',
        statements: [
            { id: 'a', text: 'a) Nếu khối khí bị nén một cách đẳng nhiệt thì hệ số $\\Delta U = 0$, đồng thời công cơ học $A > 0$ và nhiệt lượng $Q < 0$.', isTrue: true, exp: 'Đúng. Quá trình đẳng nhiệt của khí lý tưởng có $\\Delta U = 0$. Khí bị nén nên nhận công $A > 0$, từ biểu thức $\\Delta U = A + Q \\Rightarrow Q = -A < 0$ (khí tỏa nhiệt).' },
            { id: 'b', text: 'b) Trong quá trình biến đổi đẳng tích, nếu ta tiến hành truyền nhiệt lượng cho khối khí thì toàn bộ năng lượng này chỉ phục vụ tăng nội năng ($\\Delta U = Q$).', isTrue: true, exp: 'Đúng. Quá trình đẳng tích có $\\Delta V = 0 \\Rightarrow A = 0$. Do đó phương trình chỉ còn $\\Delta U = Q$.' },
            { id: 'c', text: 'c) Khi khối khí tự dãn nở sinh ra công cơ học $200\\text{ J}$ và đồng thời tỏa ra môi trường nhiệt lượng $50\\text{ J}$ thì nội năng tăng $150\\text{ J}$.', isTrue: false, exp: 'Sai. Khí sinh công nên $A = -200\\text{ J}$. Khí tỏa nhiệt nên $Q = -50\\text{ J}$. Độ biến thiên nội năng: $\\Delta U = A + Q = -200 - 50 = -250\\text{ J}$ (nội năng giảm $250\\text{ J}$).' },
            { id: 'd', text: 'd) Một quá trình biến đổi trạng thái sinh công mà hoàn toàn không trao đổi nhiệt lượng với môi trường ngoài ($Q = 0$) được gọi là quá trình đoạn nhiệt.', isTrue: true, exp: 'Đúng. Định nghĩa chuẩn xác của quá trình đoạn nhiệt.' }
        ]
    },
    {
        id: 'nhiet_27',
        context: '<strong>Câu 27.</strong> Một khối khí lý tưởng thực hiện một quá trình dãn nở từ trạng thái 1 có các thông số ($p_1 = 3 \\cdot 10^5\\text{ Pa}$, $V_1 = 2\\text{ lít}$) đến trạng thái 2 có các thông số ($p_2 = 1 \\cdot 10^5\\text{ Pa}$, $V_2 = 5\\text{ lít}$). Biết đường biểu diễn quá trình này trên hệ tọa độ vuông góc $p-V$ là một đoạn thẳng.',
        statements: [
            { id: 'a', text: 'a) Thể tích ban đầu và thể tích lúc sau của khối khí đổi ra đơn vị chuẩn SI lần lượt là $2 \\cdot 10^{-3}\\text{ m}^3$ và $5 \\cdot 10^{-3}\\text{ m}^3$.', isTrue: true, exp: 'Đúng. Đổi đơn vị chuẩn hệ mét: $1\\text{ lít} = 1\\text{ dm}^3 = 10^{-3}\\text{ m}^3$.' },
            { id: 'b', text: 'b) Công đại số mà khối khí này nhận vào từ ngoại lực trong suốt tiến trình trên có giá trị đại số bằng $+600\\text{ J}$.', isTrue: false, exp: 'Sai. Khí tăng thể tích nên là hệ sinh công, độ lớn công bằng diện tích hình thang phẳng dưới đồ thị: $A\' = \\frac{(3 \\cdot 10^5 + 1 \\cdot 10^5) \\cdot (5-2) \\cdot 10^{-3}}{2} = 600\\text{ J}$. Hệ sinh công nên công nhận vào phải âm: $A = -600\\text{ J}$.' },
            { id: 'c', text: 'c) Trong quá trình trên, vì áp suất khí giảm liên tục từ trạng thái 1 đến trạng thái 2 nên khối khí hoàn toàn không thể sinh công cơ học.', isTrue: false, exp: 'Sai. Khí sinh công khi có sự thay đổi thể tích dãn nở ($V_2 > V_1$), việc áp suất giảm không ảnh hưởng đến khả năng sinh công.' },
            { id: 'd', text: 'd) Diện tích hình thang giới hạn bởi đoạn thẳng nối hai trạng thái trên đồ thị $p-V$ và trục hoành $OV$ biểu diễn độ lớn của công cơ học trao đổi.', isTrue: true, exp: 'Đúng. Ý nghĩa hình học của tích phân tính công trên đồ thị trạng thái.' }
        ]
    },
    {
        id: 'nhiet_28',
        context: '<strong>Câu 28.</strong> Một lượng khí lý tưởng khối lượng không đổi thực hiện chu trình biến đổi kín tuần hoàn $1 \\rightarrow 2 \\rightarrow 3 \\rightarrow 1$ trên đồ thị $p-V$. Quá trình $1 \\rightarrow 2$ là đẳng áp, quá trình $2 \\rightarrow 3$ là đẳng tích, và quá trình $3 \\rightarrow 1$ là một đường thẳng nối hai điểm. Cho biết: $p_1 = p_2 = 4 \\cdot 10^5\\text{ Pa}$, $p_3 = 1 \\cdot 10^5\\text{ Pa}$, $V_1 = 1\\text{ lít}$, $V_2 = V_3 = 3\\text{ lít}$.',
        statements: [
            { id: 'a', text: 'a) Tổng độ biến thiên nội năng $\\Delta U$ của khối khí sau khi thực hiện trọn vẹn một chu trình kín quay về điểm xuất phát bằng 0.', isTrue: true, exp: 'Đúng. Nội năng là hàm trạng thái, trạng thái đầu cuối trùng nhau nên $\\Delta U = 0$.' },
            { id: 'b', text: 'b) Trong giai đoạn biến đổi trạng thái đẳng tích đoạn từ $2 \\rightarrow 3$, công cơ học mà khối khí thực hiện là bằng 0.', isTrue: true, exp: 'Đúng. Quá trình đẳng tích thể tích giữ cố định nên hệ không thực hiện công cơ học.' },
            { id: 'c', text: 'c) Công ròng hữu ích mà khối khí sinh ra cho môi trường bên ngoài trong cả chu trình này có độ lớn bằng $300\\text{ J}$.', isTrue: true, exp: 'Đúng. Công ròng bằng diện tích tam giác phẳng bao bởi chu trình: $A\' = \\frac{1}{2} \\cdot (3 - 1) \\cdot 10^{-3} \\cdot (4 \\cdot 10^5 - 1 \\cdot 10^5) = 300\\text{ J}$. Chu trình thuận chiều kim đồng hồ nên hệ sinh công ròng.' },
            { id: 'd', text: 'd) Tổng nhiệt lượng hình thức mà khối khí trao đổi trong cả chu trình mang giá trị đại số là $Q = -300\\text{ J}$ (hệ tỏa nhiệt ròng).', isTrue: false, exp: 'Sai. Vận dụng Định luật 1: $\\Delta U = A + Q \\Rightarrow 0 = -A\' + Q \\Rightarrow Q = A\' = +300\\text{ J}$. Chu trình này hệ nhận nhiệt ròng để sinh công.' }
        ]
    },
    {
        id: 'nhiet_29',
        context: '<strong>Câu 29.</strong> Một kỹ sư vận hành thử nghiệm một động cơ nhiệt lý tưởng hoạt động theo chu trình Carnot chuẩn. Động cơ nhận nhiệt lượng $Q_1 = 50\\text{ kJ}$ từ nguồn nóng có nhiệt độ $127^\\circ\\text{C}$ và truyền một phần năng lượng cho nguồn lạnh có nhiệt độ $27^\\circ\\text{C}$.',
        statements: [
            { id: 'a', text: 'a) Nhiệt độ tuyệt đối của nguồn nóng và nguồn lạnh tính theo thang Kelvin lần lượt là $400\\text{ K}$ và $300\\text{ K}$.', isTrue: true, exp: 'Đúng. Chuyển đổi: $T_1 = 127 + 273 = 400\\text{ K}$ và $T_2 = 27 + 273 = 300\\text{ K}$.' },
            { id: 'b', text: 'b) Hiệu suất nhiệt cực đại đạt giới hạn lý thuyết của động cơ nhiệt Carnot hoạt động giữa hai nguồn này là $25\\%$.', isTrue: true, exp: 'Đúng. Tính hiệu suất cực đại: $\\eta = 1 - \\frac{T_2}{T_1} = 1 - \\frac{300}{400} = 0{,}25 = 25\\%$.' },
            { id: 'c', text: 'c) Công cơ học hữu ích tối đa mà động cơ có thể sinh ra trong mỗi chu trình hoạt động là $12{,}5\\text{ kJ}$.', isTrue: true, exp: 'Đúng. Tính toán: $A_{\\text{max}} = \\eta \\cdot Q_1 = 25\\% \\cdot 50\\text{ kJ} = 12{,}5\\text{ kJ}$.' },
            { id: 'd', text: 'd) Để tiếp tục nâng cao hiệu suất động cơ, phương án hiệu quả nhất là đồng thời giảm nhiệt độ nguồn nóng và tăng nhiệt độ nguồn lạnh.', isTrue: false, exp: 'Sai. Theo công thức hiệu suất $\\eta = 1 - \\frac{T_2}{T_1}$, để tăng hiệu suất ta cần tăng nhiệt độ nguồn nóng $T_1$ hoặc giảm nhiệt độ nguồn lạnh $T_2$.' }
        ]
    },
    {
        id: 'nhiet_30',
        context: '<strong>Câu 30.</strong> Khí Helium (được xem là khí lý tưởng đơn nguyên tử, khối lượng mol $M = 4\\text{ g/mol}$) có khối lượng $m = 8\\text{ g}$ được chứa trong một bình kín vỏ mỏng. Người ta đun nóng bình để nhiệt độ tuyệt đối của khối khí tăng từ $300\\text{ K}$ lên mức $400\\text{ K}$. Cho hằng số khí lý tưởng $R = 8{,}31\\text{ J/(mol}\\cdot\\text{K)}$.',
        statements: [
            { id: 'a', text: 'a) Số lượng mol khí Helium chứa trong bình kín được tính ra là $2\\text{ mol}$.', isTrue: true, exp: 'Đúng. Tính toán số mol: $n = \\frac{m}{M} = \\frac{8}{4} = 2\\text{ mol}$.' },
            { id: 'b', text: 'b) Độ tăng nhiệt độ $\\Delta T$ của khối khí theo thang Kelvin lớn hơn giá trị độ tăng nhiệt độ $\\Delta t$ của nó tính theo thang Celsius.', isTrue: false, exp: 'Sai. Khoảng chia và độ lớn của đơn vị độ chia hai thang đo bằng nhau nên độ biến thiên nhiệt độ luôn bằng nhau: $\\Delta T = \\Delta t = 100^\\circ$.' },
            { id: 'c', text: 'c) Đối với mô hình khí lý tưởng đơn nguyên tử, hệ thức xác định nội năng hệ có dạng biểu thức lý thuyết là $U = \\frac{3}{2}nRT$.', isTrue: true, exp: 'Đúng. Khí đơn nguyên tử chỉ có động năng tịnh tiến 3 bậc tự do, nội năng trùng tổng động năng.' },
            { id: 'd', text: 'd) Độ biến thiên nội năng $\\Delta U$ của khối khí Helium thu được sau quá trình đun nóng trên bằng $2493\\text{ J}$.', isTrue: true, exp: 'Đúng. Tính toán: $\\Delta U = \\frac{3}{2} \\cdot n \\cdot R \\cdot \\Delta T = 1{,}5 \\cdot 2 \\cdot 8{,}31 \\cdot 100 = 2493\\text{ J}$.' }
        ]
    },
    {
        id: 'nhiet_31',
        context: '<strong>Câu 31.</strong> Mô hình động học phân tử khí lý tưởng cho phép giải thích các đại lượng áp suất và nhiệt độ dựa trên chuyển động hỗn loạn. Xét một khối khí hydrogen cố định trong bình.',
        statements: [
            { id: 'a', text: 'a) Nhiệt độ tuyệt đối $T$ của khối khí là đại lượng đo lường và tỉ lệ thuận trực tiếp với động năng tịnh tiến trung bình của các phân tử khí.', isTrue: true, exp: 'Đúng. Theo hệ thức vi mô: $\\overline{W_đ} = \\frac{3}{2}kT$, nhiệt độ tuyệt đối là thước đo chuyển động nhiệt.' },
            { id: 'b', text: 'b) Nếu nhiệt độ của khối khí tăng từ $27^\\circ\\text{C}$ lên mức $54^\\circ\\text{C}$ thì động năng tịnh tiến trung bình của phân tử tăng lên gấp đôi.', isTrue: false, exp: 'Sai. Động năng tỉ lệ với nhiệt độ tuyệt đối thang Kelvin. Nhiệt độ tăng từ $300\\text{ K}$ lên $327\\text{ K}$ (chỉ tăng $1{,}09$ lần).' },
            { id: 'c', text: 'c) Áp suất khí tác dụng lên thành bình được gây ra bởi sự va chạm của một số lượng khổng lồ các phân tử khí lên diện tích thành bình trong mỗi đơn vị thời gian.', isTrue: true, exp: 'Đúng. Đây là nguồn gốc vi mô của áp suất khí lý tưởng.' },
            { id: 'd', text: 'd) Ở cùng một điều kiện nhiệt độ xác định, phân tử khí nào có khối lượng lớn hơn thì tốc độ chuyển động nhiệt trung bình hiệu dụng sẽ nhỏ hơn.', isTrue: true, exp: 'Đúng. Từ hệ thức $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$, khối lượng mol hoặc khối lượng phân tử lớn hơn thì tốc độ căn trung bình bình phương nhỏ hơn.' }
        ]
    },
    {
        id: 'nhiet_32',
        context: '<strong>Câu 32.</strong> Hai bình thủy tinh dung tích $V_A = 3\\text{ lít}$ và $V_B = 4\\text{ lít}$ được nối với nhau bằng một ống nhỏ có van khóa, ban đầu van đóng chặt. Bình A chứa khí lý tưởng ở áp suất $p_A = 2\\text{ atm}$, bình B chứa cùng loại khí ở áp suất $p_B = 1\\text{ atm}$. Nhiệt độ hai bình được giữ cố định. Mở van khóa nhẹ nhàng để khí thông nhau.',
        statements: [
            { id: 'a', text: 'a) Quá trình khí tự khuếch tán hòa trộn giữa hai bình sau khi mở van khóa là một quá trình biến đổi đẳng nhiệt của hệ khí.', isTrue: true, exp: 'Đúng. Đề bài xác nhận thông số nhiệt độ được duy trì cố định không đổi.' },
            { id: 'b', text: 'b) Thể tích tổng cộng toàn phần của hệ khí sau khi mở van thông nhau đạt giá trị $V = 7\\text{ lít}$.', isTrue: true, exp: 'Đúng. Thể tích hệ bằng tổng thể tích hai bình thành phần: $V = 3 + 4 = 7\\text{ lít}$.' },
            { id: 'c', text: 'c) Do áp suất ban đầu ở bình A lớn hơn bình B nên sau khi mở khóa, toàn bộ lượng khí ở bình B sẽ bị ép dịch chuyển hoàn toàn sang bình A.', isTrue: false, exp: 'Sai. Khí sẽ dịch chuyển từ nơi áp suất cao sang nơi áp suất thấp (từ A sang B) cho đến khi áp suất trong toàn bộ hệ đạt trạng thái bằng nhau.' },
            { id: 'd', text: 'd) Áp suất của hệ khí khi đạt trạng thái cân bằng mới sau khi mở van là $1{,}5\\text{ atm}$.', isTrue: false, exp: 'Sai. Áp dụng định luật Boyle cho hệ hỗn hợp: $p \\cdot V = p_A \\cdot V_A + p_B \\cdot V_B \\Rightarrow p \\cdot 7 = (2 \\cdot 3) + (1 \\cdot 4) = 10 \\Rightarrow p = \\frac{10}{7} \\approx 1{,}43\\text{ atm}$.' }
        ]
    },
    {
        id: 'nhiet_33',
        context: '<strong>Câu 33.</strong> Một bình thép chứa khí Oxygen ($O_2$, khối lượng mol $M = 32\\text{ g/mol}$) dung tích không đổi $V = 10\\text{ lít}$. Ban đầu, khí trong bình có áp suất $p_1 = 10^6\\text{ Pa}$ và nhiệt độ $t_1 = 27^\\circ\\text{C}$. Sau một thời gian tiêu thụ khí, áp suất giảm xuống còn $p_2 = 2{,}5 \\cdot 10^5\\text{ Pa}$ và nhiệt độ hạ xuống $t_2 = 7^\\circ\\text{C}$. Lấy hằng số khí lý tưởng $R = 8{,}31\\text{ J/(mol}\\cdot\\text{K)}$.',
        statements: [
            { id: 'a', text: 'a) Số lượng mol khí Oxy ban đầu chứa trong bình thép xấp xỉ bằng giá trị $4{,}01\\text{ mol}$.', isTrue: true, exp: 'Đúng. Vận dụng phương trình Clapeyron-Mendeleev: $n_1 = \\frac{p_1 V}{RT_1} = \\frac{10^6 \\cdot 10 \\cdot 10^{-3}}{8{,}31 \\cdot 300} \\approx 4{,}01\\text{ mol}$.' },
            { id: 'b', text: 'b) Khối lượng khí Oxy còn sót lại bên trong bình sau giai đoạn sử dụng là khoảng $34{,}4\\text{ g}$.', isTrue: true, exp: 'Đúng. Tính khối lượng lúc sau: $m_2 = \\frac{p_2 V M}{RT_2} = \\frac{2{,}5 \\cdot 10^5 \\cdot 10^{-2} \\cdot 32}{8{,}31 \\cdot 280} \\approx 34{,}4\\text{ g}$.' },
            { id: 'c', text: 'c) Khối lượng khí Oxy thực tế đã được trích xuất ra khỏi bình để phục vụ sử dụng bằng $93{,}9\\text{ g}$.', isTrue: true, exp: 'Đúng. Khối lượng khí đã dùng: $\\Delta m = m_1 - m_2 = (4{,}01 \\cdot 32) - 34{,}4 = 128{,}3 - 34{,}4 = 93{,}9\\text{ g}$.' },
            { id: 'd', text: 'd) Nếu tiếp tục giữ nguyên lượng khí còn lại này và nung nóng bình trở lại nhiệt độ ban đầu $27^\\circ\\text{C}$ thì áp suất khí sẽ vượt mức ban đầu $p_1$.', isTrue: false, exp: 'Sai. Do mật độ khối lượng khí đã giảm đi rất nhiều, khi đưa về cùng nhiệt độ ban đầu áp suất mới chắc chắn vẫn nhỏ hơn nhiều so với $p_1$.' }
        ]
    },
    {
        id: 'nhiet_34',
        context: '<strong>Câu 34.</strong> Một lượng khí lý tưởng khối lượng không đổi thực hiện biến đổi trạng thái được biểu diễn tuần tự qua đồ thị đường thẳng trong các hệ tọa độ trạng thái khác nhau.',
        statements: [
            { id: 'a', text: 'a) Trên đồ thị của hệ tọa độ $(p, V)$, đường biểu diễn quá trình đẳng nhiệt là một đường thẳng đi qua gốc tọa độ.', isTrue: false, exp: 'Sai. Trên đồ thị hệ tọa độ $(p, V)$, đường đẳng nhiệt có hình dạng là một đường cong Hyperbol.' },
            { id: 'b', text: 'b) Trên đồ thị của hệ tọa độ $(V, T)$, đường biểu diễn quá trình đẳng áp là một đường thẳng có đường kéo dài đi qua gốc tọa độ O.', isTrue: true, exp: 'Đúng. Theo định luật Charles, thể tích tỷ lệ thuận với nhiệt độ tuyệt đối nên đồ thị là đường thẳng qua gốc tọa độ.' },
            { id: 'c', text: 'c) Khi một khối khí thực hiện quá trình biến đổi đẳng áp, thể tích của nó tỉ lệ thuận trực tiếp với nhiệt độ tuyệt đối $T$.', isTrue: true, exp: 'Đúng. Nội dung cơ bản của định luật Charles đối với khí lý tưởng.' },
            { id: 'd', text: 'd) Nếu một đường biểu diễn trong hệ tọa độ $(p, T)$ là một đường thẳng đứng song song với trục $Op$, quá trình đó gọi là đẳng tích.', isTrue: false, exp: 'Sai. Đường thẳng đứng vuông góc với trục $OT$ chứng tỏ nhiệt độ không đổi, đây phải là quá trình đẳng nhiệt.' }
        ]
    },
    {
        id: 'nhiet_35',
        context: '<strong>Câu 35.</strong> Học sinh thực hiện thí nghiệm đẩy pít-tông nén một lượng khí lý tưởng trong xi-lanh một cách rất từ từ, xi-lanh làm bằng kim loại dẫn nhiệt cực tốt ra môi trường phòng (vốn được duy trì nhiệt độ cố định không đổi).',
        statements: [
            { id: 'a', text: 'a) Thí nghiệm thực hành này hoàn toàn có thể được xem gần đúng là một quá trình biến đổi đẳng nhiệt của khối khí.', isTrue: true, exp: 'Đúng. Nén rất chậm và thành bình dẫn nhiệt tốt giúp nhiệt độ khối khí luôn kịp cân bằng với nhiệt độ phòng.' },
            { id: 'b', text: 'b) Khi thể tích khối khí giảm đi một nửa, các phân tử khí bị nén lại gần nhau hơn làm cho áp suất của khí lên thành bình tăng lên gấp đôi.', isTrue: true, exp: 'Đúng. Theo định luật Boyle, áp suất tỉ lệ nghịch với thể tích khi nhiệt độ không đổi.' },
            { id: 'c', text: 'c) Do pít-tông thực hiện công cơ học nén khí nên nội năng của khối khí lý tưởng trong xi-lanh chắc chắn phải tăng lên.', isTrue: false, exp: 'Sai. Vì đây là quá trình đẳng nhiệt, nhiệt độ hệ không đổi nên nội năng khí lý tưởng giữ nguyên không đổi ($\\Delta U = 0$).' },
            { id: 'd', text: 'd) Trong quá trình nén này, khối khí đã truyền ra môi trường một nhiệt lượng có độ lớn đúng bằng công mà ngoại lực thực hiện nén nó.', isTrue: true, exp: 'Đúng. Từ Định luật 1: $\\Delta U = A + Q$, do $\\Delta U = 0 \\Rightarrow Q = -A$. Hệ nhận công bao nhiêu thì tỏa nhiệt bấy nhiêu.' }
        ]
    },
    {
        id: 'nhiet_36',
        context: '<strong>Câu 36.</strong> Lựa chọn vật liệu làm vỏ phích giữ nước nóng dựa trên thông số đặc trưng: Vật liệu X có hệ số dẫn nhiệt $0{,}02\\text{ W/(m}\\cdot\\text{K)}$ và $c = 800\\text{ J/(kg}\\cdot\\text{K)}$. Vật liệu Y có hệ số dẫn nhiệt $0{,}80\\text{ W/(m}\\cdot\\text{K)}$ và $c = 2000\\text{ J/(kg}\\cdot\\text{K)}$. Vật liệu Z có hệ số dẫn nhiệt $1{,}20\\text{ W/(m}\\cdot\\text{K)}$ và $c = 400\\text{ J/(kg}\\cdot\\text{K)}$.',
        statements: [
            { id: 'a', text: 'a) Vật liệu X sở hữu khả năng cách nhiệt tốt nhất trong cả 3 loại vật liệu xây dựng cấu trúc trên.', isTrue: true, exp: 'Đúng. Hệ số dẫn nhiệt càng nhỏ chứng tỏ khả năng truyền dẫn nhiệt càng kém, tức là cách nhiệt tốt nhất.' },
            { id: 'b', text: 'b) Nếu có cùng khối lượng, lớp lót làm bằng vật liệu Y sẽ hấp thụ ít nhiệt lượng từ nước nhất để đạt trạng thái cân bằng.', isTrue: false, exp: 'Sai. Nhiệt lượng hấp thụ tính theo công thức $Q = mc\\Delta t$. Vật liệu Z có nhiệt dung riêng $c = 400$ nhỏ nhất nên hấp thụ ít nhiệt nhất.' },
            { id: 'c', text: 'c) Khả năng truyền dẫn nhiệt của cấu trúc vật liệu Y tốt gấp đúng 40 lần so với vật liệu X.', isTrue: true, exp: 'Đúng. Lập tỉ số hệ số dẫn nhiệt: $\\frac{0{,}80}{0{,}02} = 40$ lần.' },
            { id: 'd', text: 'd) Mục đích chính của việc thiết kế vỏ phích nhiều lớp chứa khoảng chân không là tăng cường tốc độ truyền nhiệt ra ngoài.', isTrue: false, exp: 'Sai. Mục đích thiết kế phích giữ nhiệt là ngăn chặn, giảm thiểu tối đa tốc độ truyền nhiệt ra môi trường để giữ nước nóng lâu.' }
        ]
    },
    {
        id: 'nhiet_37',
        context: '<strong>Câu 37.</strong> Sơ đồ nguyên lý làm việc đơn giản của một máy điều hòa không khí dân dụng. Chất làm lạnh (gas chuyên dụng) tuần hoàn liên tục qua hệ thống ống dẫn dưới tác dụng của một máy nén điện cơ học.',
        statements: [
            { id: 'a', text: 'a) Tại giàn lạnh đặt trong phòng, chất làm lạnh ở thể lỏng thực hiện quá trình bay hơi thu nhiệt mạnh từ không khí phòng.', isTrue: true, exp: 'Đúng. Quá trình hóa hơi chất lỏng luôn thu nhiệt từ môi trường xung quanh.' },
            { id: 'b', text: 'b) Tại giàn nóng đặt ngoài trời, chất làm lạnh ở thể hơi được máy nén nén lại hóa lỏng, quá trình hóa lỏng tỏa nhiệt ra ngoài.', isTrue: true, exp: 'Đúng. Quá trình ngưng tụ từ thể hơi sang thể lỏng là quá trình tỏa nhiệt mạnh.' },
            { id: 'c', text: 'c) Hoạt động của máy điều hòa chứng minh nhiệt lượng có thể tự động truyền tự phát từ vật lạnh sang vật nóng không cần tiêu tốn năng lượng.', isTrue: false, exp: 'Sai. Theo Nguyên lý 2 Nhiệt động lực học, nhiệt không thể tự phát truyền từ vật lạnh sang vật nóng. Quá trình này chỉ diễn ra khi có sự thực hiện công của máy nén tiêu thụ điện năng.' },
            { id: 'd', text: 'd) Nếu mở toang cửa phòng khi bật điều hòa, hiệu quả làm mát giảm rõ rệt do có hiện tượng đối lưu nhiệt mạnh mẽ với không khí ngoài trời.', isTrue: true, exp: 'Đúng. Mở cửa làm dòng không khí nóng bên ngoài dễ dàng đối lưu tràn vào phòng, làm mất hiệu quả làm mát.' }
        ]
    },
    {
        id: 'nhiet_38',
        context: '<strong>Câu 38.</strong> Trong kỹ thuật xây dựng công trình, hiện tượng nở vì nhiệt của chất rắn luôn được tính toán và kiểm soát một cách nghiêm ngặt.',
        statements: [
            { id: 'a', text: 'a) Khi lát sân bằng các viên gạch gốm kích thước lớn, người thợ luôn chủ động để lại các khe hở nhỏ giữa các viên gạch để tránh gạch bị phồng rộp khi nắng nóng.', isTrue: true, exp: 'Đúng. Khe co giãn tạo không gian cho chất rắn nở dài khi nhiệt độ môi trường tăng cao.' },
            { id: 'b', text: 'b) Băng kép gồm hai thanh kim loại có hệ số nở dài khác nhau tán chặt vào nhau, khi bị nung nóng nó luôn cong về phía thanh có hệ số nở dài nhỏ hơn.', isTrue: true, exp: 'Đúng. Thanh có hệ số nở lớn hơn sẽ dài ra nhiều hơn và nằm ở vòng ngoài của đường cong, ép băng kép cong về phía thanh nở kém.' },
            { id: 'c', text: 'c) Các đường ray tàu hỏa hiện đại được hàn liền một dải dài hàng cây số mà không cần khe hở co giãn vì lực nở vì nhiệt của thép rất bé.', isTrue: false, exp: 'Sai. Lực nở vì nhiệt của chất rắn khi bị cản trở là cực kỳ khổng lồ, nếu không thiết kế khớp nối đặc biệt sẽ làm cong vẹo, phá hủy đường ray.' },
            { id: 'd', text: 'd) Cốc thủy tinh thành dày dễ bị nứt vỡ khi đổ nước sôi vào hơn cốc thành mỏng là do sự nở vì nhiệt không đồng đều giữa lớp trong và lớp ngoài cốc.', isTrue: true, exp: 'Đúng. Lớp trong tiếp xúc nước sôi nở ra trước, lớp ngoài chưa kịp nở tạo ra ứng suất cơ học bẻ gãy cấu trúc thủy tinh.' }
        ]
    },
    {
        id: 'nhiet_39',
        context: '<strong>Câu 39.</strong> Hình vẽ đồ thị biểu diễn hai đường đẳng tích của cùng một khối lượng khí lý tưởng xác định ở hai thể tích không đổi $V_1$ và $V_2$ trong hệ tọa độ áp suất - nhiệt độ tuyệt đối $(p, T)$.',
        statements: [
            { id: 'a', text: 'a) Cả hai đường biểu diễn đẳng tích trên đồ thị đều là các đường thẳng có đường kéo dài đi qua gốc tọa độ O.', isTrue: true, exp: 'Đúng. Theo định luật Gay-Lussac, áp suất tỉ lệ thuận với nhiệt độ tuyệt đối trong quá trình đẳng tích.' },
            { id: 'b', text: 'b) Với cùng một giá trị nhiệt độ tuyệt đối $T_0$, khối khí ở trạng thái trên đường đồ thị $V_1$ có giá áp suất lớn hơn khối khí trên đường $V_2$.', isTrue: true, exp: 'Đúng. Dựa vào đồ thị, tại cùng một hoành độ $T_0$, điểm trên đường $V_1$ nằm cao hơn nên có tung độ áp suất lớn hơn.' },
            { id: 'c', text: 'c) Từ phương trình trạng thái khí lý tưởng, ta suy ra mối quan hệ về độ lớn giữa hai thể tích trên đồ thị là $V_1 > V_2$.', isTrue: false, exp: 'Sai. Từ hệ thức $p = \\left(\\frac{nR}{V}\\right)T$, hệ số góc độ dốc tỉ lệ nghịch với thể tích $V$. Đường $V_1$ dốc hơn nên hệ số góc lớn hơn $\\Rightarrow V_1 < V_2$.' },
            { id: 'd', text: 'd) Nếu ta tiến hành giữ cố định thể tích $V_1$ và giảm nhiệt độ tuyệt đối của khối khí xuống 2 lần thì áp suất của khí cũng giảm đi một nửa.', isTrue: true, exp: 'Đúng. Tính chất tỉ lệ thuận trực tiếp giữa áp suất $p$ và nhiệt độ tuyệt đối $T$ của định luật Gay-Lussac.' }
        ]
    },
    {
        id: 'nhiet_40',
        context: '<strong>Câu 40.</strong> Đọc đoạn trích sau: "Bức xạ sóng ngắn từ Mặt Trời xuyên qua khí quyển xuống sưởi ấm bề mặt Trái Đất. Bề mặt Trái Đất hấp thụ và bức xạ ngược lại vào không gian dưới dạng bức xạ sóng dài (tia hồng ngoại). Các phân tử khí nhà kính ($\\text{CO}_2$, $\\text{CH}_4$) hấp thụ mạnh mẽ các bức xạ sóng dài này, giữ năng lượng nhiệt lại tầng đối lưu."',
        statements: [
            { id: 'a', text: 'a) Quá trình truyền năng lượng từ Mặt Trời xuống Trái Đất hoàn toàn không cần chất nền môi trường vật chất vì được thực hiện bằng hình thức bức xạ nhiệt.', isTrue: true, exp: 'Đúng. Bức xạ nhiệt truyền bằng sóng điện từ, có khả năng truyền tốt trong môi trường chân không của vũ trụ.' },
            { id: 'b', text: 'b) Nếu hàm lượng các khí nhà kính tăng quá cao, năng lượng giữ lại tăng làm nội năng hệ Trái Đất tăng ($\\Delta U > 0$), khiến nhiệt độ toàn cầu tăng lên.', isTrue: true, exp: 'Đúng. Hệ nhận nhiệt lượng lớn hơn tỏa ra làm cán cân nội năng tăng ($\\Delta U > 0$) gây biến đổi khí hậu.' },
            { id: 'c', text: 'c) Hiện tượng nóng lên toàn cầu đã tự tạo ra nguồn năng lượng mới làm nóng Trái Đất, điều này mâu thuẫn với Định luật bảo toàn năng lượng.', isTrue: false, exp: 'Sai. Năng lượng không tự sinh ra, đây là năng lượng Mặt Trời bị hấp thụ giữ lại thay vì bức xạ thoát ra ngoài không gian, hoàn toàn tuân theo định luật bảo toàn.' },
            { id: 'd', text: 'd) Việc thực hiện cắt giảm phát thải khí $\\text{CO}_2$ và tích cực trồng rừng có vai trò giảm mật độ khí giữ nhiệt, tăng khả năng thoát bức xạ sóng dài ra ngoài vũ trụ.', isTrue: true, exp: 'Đúng. Giảm nồng độ khí nhà kính giúp bầu khí quyển tăng hiệu suất thoát nhiệt bức xạ hồng ngoại vào không gian.' }
        ]
    }
]
    },
    khi: {
        theory: `
            <h2>Kiến thức trọng tâm: Khí lí tưởng</h2>

            <div class="lesson-card">
                <h3>Bài 8. Mô hình động học phân tử chất khí</h3>
                
                <div class="concept-box">
                    <h4>1. Chuyển động Brown</h4>
                    <ul>
                        <li><strong>Hiện tượng:</strong> Các hạt nhỏ (như phấn hoa, khói) lơ lửng trong chất lỏng/khí chuyển động dích dắc, hỗn loạn không ngừng.</li>
                        <li><strong>Bản chất:</strong> Do các phân tử môi trường chuyển động nhiệt, va chạm vào hạt từ nhiều phía với lực không cân bằng.</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>2. Thuyết động học phân tử chất khí</h4>
                    <ul>
                        <li><strong>Kích thước:</strong> Phân tử khí có kích thước rất nhỏ so với khoảng cách giữa chúng (coi là chất điểm).</li>
                        <li><strong>Chuyển động:</strong> Chuyển động hỗn loạn không ngừng. Nhiệt độ càng cao, tốc độ chuyển động càng lớn.</li>
                        <li><strong>Tương tác:</strong> Lực tương tác giữa các phân tử rất yếu, chỉ đáng kể khi chúng va chạm vào nhau hoặc va chạm vào thành bình.</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>3. Khí lí tưởng</h4>
                    <ul>
                        <li>Là chất khí tuân theo đúng các định luật Boyle và Charles.</li>
                        <li><strong>Đặc điểm mô hình:</strong> Bỏ qua hoàn toàn thể tích riêng của phân tử và lực tương tác giữa chúng (trừ lúc va chạm).</li>
                    </ul>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Nhầm lẫn giữa khí thực và khí lí tưởng, cho rằng chất khí luôn tuân theo tuyệt đối các định luật chất khí ở mọi điều kiện.</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Khí thực chỉ có thể coi gần đúng là khí lí tưởng ở điều kiện <strong>nhiệt độ cao và áp suất thấp</strong>. Ở áp suất quá cao, thể tích phân tử và lực tương tác không thể bỏ qua.</div>
            </div>

            <div class="lesson-card">
                <h3>Bài 9. Định luật Boyle (Quá trình đẳng nhiệt)</h3>
                
                <div class="concept-box">
                    <ul>
                        <li><strong>Trạng thái đẳng nhiệt:</strong> Khối lượng khí và Nhiệt độ ($T$) được giữ không đổi.</li>
                        <li><strong>Nội dung:</strong> Ở nhiệt độ không đổi, áp suất của một khối lượng khí xác định tỉ lệ nghịch với thể tích của nó.</li>
                    </ul>
                    <p><strong>Công thức:</strong></p>
                    <div class="formula-box">
                        $$p \\sim \\frac{1}{V} \\Rightarrow pV = \\text{hằng số}$$
                    </div>
                    <p>Hay viết cho hai trạng thái:</p>
                    <div class="formula-box">
                        $$p_1 V_1 = p_2 V_2$$
                    </div>
                    <ul>
                        <li><strong>Đồ thị:</strong> Trong hệ tọa độ $p-V$, đường đẳng nhiệt là một đường hypebol. Nhiệt độ càng cao, đường đẳng nhiệt càng nằm xa gốc tọa độ.</li>
                    </ul>
                </div>

                <h3 style="margin-top: 1.5rem;">Bài 10. Định luật Charles (Quá trình đẳng áp)</h3>
                
                <div class="concept-box">
                    <ul>
                        <li><strong>Trạng thái đẳng áp:</strong> Khối lượng khí và Áp suất ($p$) được giữ không đổi.</li>
                        <li><strong>Nội dung:</strong> Khi áp suất không đổi, thể tích của một khối lượng khí xác định tỉ lệ thuận với nhiệt độ tuyệt đối của nó.</li>
                    </ul>
                    <p><strong>Công thức:</strong></p>
                    <div class="formula-box">
                        $$\\frac{V}{T} = \\text{hằng số}$$
                    </div>
                    <p>Hay viết cho hai trạng thái:</p>
                    <div class="formula-box">
                        $$\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$$
                    </div>
                    <ul>
                        <li><strong>Đồ thị:</strong> Trong hệ tọa độ $V-T$, đường đẳng áp là một đường thẳng có đường kéo dài đi qua gốc tọa độ ($V=0$ tại $T=0\\text{ K}$).</li>
                    </ul>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Vẫn để nguyên nhiệt độ ở thang độ C ($^\\circ\\text{C}$) khi bấm máy tính định luật Charles hoặc phương trình trạng thái.</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> <strong>Luôn luôn cộng thêm 273,15</strong>. Mọi công thức có chữ $T$ (viết hoa) đều bắt buộc phải dùng thang tuyệt đối Kelvin: $T = t + 273,15$.</div>
            </div>

            <div class="lesson-card">
                <h3>Bài 11. Phương trình trạng thái của khí lí tưởng</h3>
                
                <div class="concept-box">
                    <ul>
                        <li><strong>Ý nghĩa:</strong> Liên kết cả 3 thông số trạng thái (Áp suất $p$, Thể tích $V$, Nhiệt độ $T$) của một khối lượng khí xác định khi có sự biến đổi tổng quát.</li>
                    </ul>
                    <p><strong>Phương trình trạng thái:</strong></p>
                    <div class="formula-box">
                        $$\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2} \\Rightarrow \\frac{pV}{T} = \\text{hằng số}$$
                    </div>
                    <p><strong>Mở rộng (Phương trình Clapeyron - Mendeleev):</strong> Dùng để tính toán chính xác lượng khí:</p>
                    <div class="formula-box">
                        $$pV = nRT = \\frac{m}{\\mu}RT$$
                    </div>
                    <p><em>Trong đó:</em></p>
                    <ul>
                        <li>$n$: Số mol khí (mol)</li>
                        <li>$R \\approx 8,31 \\text{ J/(mol.K)}$: Hằng số khí lí tưởng</li>
                        <li>$T$: Nhiệt độ tuyệt đối (K)</li>
                    </ul>
                </div>

                <h3 style="margin-top: 1.5rem;">Bài 12. Áp suất khí theo mô hình động học phân tử. Quan hệ giữa động năng và nhiệt độ</h3>
                
                <div class="concept-box">
                    <h4>1. Áp suất khí theo mô hình động học</h4>
                    <ul>
                        <li><strong>Bản chất:</strong> Áp suất chất khí tác dụng lên thành bình là do sự va chạm của vô số các phân tử khí vào thành bình tạo ra.</li>
                    </ul>
                    <p><strong>Công thức cơ bản:</strong></p>
                    <div class="formula-box">
                        $$p = \\frac{1}{3} n m \\overline{v^2}$$
                    </div>
                    <p><em>Trong đó:</em></p>
                    <ul>
                        <li>$n = \\frac{N}{V}$: Mật độ phân tử khí (số hạt trong $1\\text{ m}^3$)</li>
                        <li>$m$: Khối lượng của một phân tử</li>
                        <li>$\\overline{v^2}$: Giá trị trung bình của bình phương tốc độ phân tử</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>2. Quan hệ giữa động năng phân tử và nhiệt độ</h4>
                    <p><strong>Hằng số Boltzmann ($k$):</strong></p>
                    <div class="formula-box">
                        $$k = \\frac{R}{N_A} \\approx 1,38 \\cdot 10^{-23} \\text{ J/K}$$
                    </div>
                    <p><strong>Động năng tịnh tiến trung bình của phân tử:</strong></p>
                    <div class="formula-box">
                        $$W_đ = \\frac{1}{2}m\\overline{v^2} = \\frac{3}{2}kT$$
                    </div>
                    <div class="highlight-box golden-note">
                        <strong>Kết luận "Vàng":</strong> 
                        <ul>
                            <li>Nhiệt độ tuyệt đối ($T$) là số đo vĩ mô của <strong>động năng tịnh tiến trung bình</strong> vi mô của các phân tử khí.</li>
                            <li>Động năng trung bình tỉ lệ thuận với nhiệt độ tuyệt đối. Khi $T = 0\\text{ K}$ (Độ không tuyệt đối), mọi chuyển động nhiệt ngừng lại ($W_đ = 0$).</li>
                        </ul>
                    </div>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Cho rằng khí nhẹ (như $H_2$) thì có động năng tịnh tiến trung bình lớn hơn khí nặng (như $O_2$) nếu chúng ở cùng nhiệt độ.</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Nhìn vào công thức $W_đ = \\frac{3}{2}kT$. Động năng trung bình <strong>chỉ phụ thuộc vào nhiệt độ $T$</strong>. Ở cùng nhiệt độ, mọi chất khí đều có $W_đ$ bằng nhau. Khí nhẹ chuyển động nhanh hơn (vận tốc $v$ lớn) nhưng khối lượng ($m$) nhỏ, bù trừ lại $W_đ$ vẫn không đổi.</div>
            </div>
        `,
       quizzes: [
            {
                id: "khi_1",
                context: "Câu 1 (Mô hình động học phân tử - Chuyển động Brown). Quan sát các hạt phấn hoa lơ lửng trong nước hoặc các hạt khói trong không khí qua kính hiển vi, ta thấy chúng chuyển động dích dắc không ngừng (chuyển động Brown).",
                statements: [
                    { id: "a", text: "a) Chuyển động Brown cho thấy bản thân các hạt phấn hoa/hạt khói là các vi sinh vật có sự sống.", isTrue: false, exp: "Sai (Đây là hiện tượng vật lý thuần túy, không phải do sự sống)." },
                    { id: "b", text: "b) Quỹ đạo chuyển động của các hạt này là những đường thẳng đứt khúc, hỗn loạn.", isTrue: true, exp: "Đúng (Mô tả quỹ đạo chuyển động Brown)." },
                    { id: "c", text: "c) Nguyên nhân của chuyển động Brown là do các phân tử nước/không khí chuyển động nhiệt hỗn loạn, va chạm vào hạt từ nhiều phía không cân bằng nhau.", isTrue: true, exp: "Đúng (Giải thích bản chất động học phân tử)." },
                    { id: "d", text: "d) Nhiệt độ môi trường càng thấp thì chuyển động Brown diễn ra càng mạnh mẽ.", isTrue: false, exp: "Sai (Nhiệt độ càng cao, phân tử chuyển động càng nhanh $\\rightarrow$ chuyển động Brown càng mạnh)." }
                ]
            },
            {
                id: "khi_2",
                context: "Câu 2 (Giả thuyết thuyết động học phân tử). Xét một bình kín chứa khí lí tưởng.",
                statements: [
                    { id: "a", text: "a) Các phân tử khí được coi là các chất điểm vì kích thước của chúng rất nhỏ so với khoảng cách giữa chúng.", isTrue: true, exp: "Đúng (Giả thuyết cơ bản về kích thước)." },
                    { id: "b", text: "b) Lực tương tác giữa các phân tử khí luôn tồn tại và có độ lớn đáng kể ở mọi thời điểm.", isTrue: false, exp: "Sai (Khí lí tưởng bỏ qua lực tương tác, trừ lúc va chạm)." },
                    { id: "c", text: "c) Giữa hai lần va chạm, các phân tử khí chuyển động thẳng đều.", isTrue: true, exp: "Đúng (Vì không có lực tương tác nên theo quán tính chúng chuyển động thẳng đều)." },
                    { id: "d", text: "d) Khi va chạm vào thành bình, động năng của các phân tử khí bị tiêu hao và biến thành nhiệt hoàn toàn.", isTrue: false, exp: "Sai (Va chạm với thành bình được coi là va chạm hoàn toàn đàn hồi, động năng được bảo toàn)." }
                ]
            },
            {
                id: "khi_3",
                context: "Câu 3 (Định luật Boyle - Lý thuyết). Trong một quá trình nén đẳng nhiệt một khối lượng khí lí tưởng xác định.",
                statements: [
                    { id: "a", text: "a) Nhiệt độ tuyệt đối của khối khí được giữ không đổi trong suốt quá trình.", isTrue: true, exp: "Đúng (Khái niệm quá trình đẳng nhiệt)." },
                    { id: "b", text: "b) Theo định luật Boyle, áp suất của khối khí tỉ lệ thuận với thể tích của nó.", isTrue: false, exp: "Sai (Áp suất tỉ lệ nghịch với thể tích)." },
                    { id: "c", text: "c) Tích của áp suất và thể tích là một hằng số ($pV = \\text{const}$).", isTrue: true, exp: "Đúng (Hệ quả toán học của tỉ lệ nghịch)." },
                    { id: "d", text: "d) Đường đẳng nhiệt biểu diễn trong hệ tọa độ ($p, V$) là một đường thẳng đi qua gốc tọa độ.", isTrue: false, exp: "Sai (Bẫy đồ thị: Trong hệ $p-V$, đường đẳng nhiệt là một đường hypebol)." }
                ]
            },
            {
                id: "khi_4",
                context: "Câu 4 (Định luật Boyle - Bài tập vận dụng). Một bọt khí nổi lên từ đáy một hồ nước sâu 10 m. Lấy áp suất khí quyển trên mặt hồ là $p_0 = 10^5\\text{ Pa}$, khối lượng riêng của nước là $\\rho = 1000\\text{ kg/m}^3$, $g = 10\\text{ m/s}^2$. Coi nhiệt độ nước hồ đồng đều ở mọi độ sâu.",
                statements: [
                    { id: "a", text: "a) Áp suất của nước tại đáy hồ là $10^5\\text{ Pa}$.", isTrue: false, exp: "Sai (Áp suất thủy tĩnh của cột nước $p_n = \\rho g h = 1000 \\times 10 \\times 10 = 10^5\\text{ Pa}$)." },
                    { id: "b", text: "b) Tổng áp suất tác dụng lên bọt khí ở đáy hồ là $2.10^5\\text{ Pa}$.", isTrue: true, exp: "Đúng (Tổng áp suất $p = p_0 + \\rho g h = 10^5 + 10^5 = 2.10^5\\text{ Pa}$)." },
                    { id: "c", text: "c) Thể tích của bọt khí khi lên đến mặt nước sẽ tăng gấp đôi so với khi ở đáy hồ.", isTrue: true, exp: "Đúng ($T$ nhiệt độ không đổi $\\Rightarrow p_1 V_1 = p_2 V_2 \\Rightarrow 2.10^5.V_1 = 10^5.V_2 \\Rightarrow V_2 = 2V_1$)." },
                    { id: "d", text: "d) Trong quá trình nổi lên, mật độ phân tử khí bên trong bọt khí tăng dần.", isTrue: false, exp: "Sai (Thể tích tăng, số phân tử không đổi $\\Rightarrow$ mật độ phân tử giảm)." }
                ]
            },
            {
                id: "khi_5",
                context: "Câu 5 (Định luật Charles). Khi nung nóng đẳng áp một khối lượng khí lí tưởng xác định.",
                statements: [
                    { id: "a", text: "a) Áp suất của khối khí được giữ nguyên.", isTrue: true, exp: "Đúng (Khái niệm đẳng áp)." },
                    { id: "b", text: "b) Thể tích của khối khí tỉ lệ với nhiệt độ Celsius ($^\\circ C$).", isTrue: false, exp: "Sai (Thể tích tỉ lệ với nhiệt độ tuyệt đối K, không phải độ C)." },
                    { id: "c", text: "c) Hệ thức của định luật Charles là $\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$ (với $T$ là nhiệt độ tuyệt đối).", isTrue: true, exp: "Đúng (Biểu thức định luật Charles)." },
                    { id: "d", text: "d) Nếu nhiệt độ của khối khí tăng từ 27$^\\circ$C lên 54$^\\circ$C thì thể tích khối khí sẽ tăng gấp đôi.", isTrue: false, exp: "Sai (Bẫy tỉ lệ: $T_1 = 300\\text{ K}$, $T_2 = 327\\text{ K}$, tỉ số thể tích là $327/300 = 1,09$ lần, không phải gấp đôi)." }
                ]
            },
            {
                id: "khi_6",
                context: "Câu 6 (Phương trình trạng thái khí lí tưởng - Lý thuyết). Từ các định luật thực nghiệm, ta xây dựng phương trình trạng thái:",
                statements: [
                    { id: "a", text: "a) Phương trình trạng thái kết hợp sự phụ thuộc đồng thời của $p, V, T$ đối với một lượng khí xác định.", isTrue: true, exp: "Đúng (Định nghĩa phương trình trạng thái)." },
                    { id: "b", text: "b) Biểu thức $\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2}$ chỉ áp dụng được nếu khối khí không bị rò rỉ (khối lượng khí không đổi).", isTrue: true, exp: "Đúng (Phạm vi áp dụng đối với một khối lượng khí xác định)." },
                    { id: "c", text: "c) Với mọi khối lượng khí lí tưởng khác nhau, hằng số $\\frac{pV}{T}$ luôn có cùng một giá trị.", isTrue: false, exp: "Sai (Giá trị $\\frac{pV}{T} = nR$ phụ thuộc vào lượng chất khí (số mol $n$))." },
                    { id: "d", text: "d) Phương trình trạng thái cho thấy, nếu nén khối khí (giảm $V$) và đồng thời tăng nhiệt độ ($T$), áp suất chắc chắn sẽ tăng.", isTrue: true, exp: "Đúng ($p = \\frac{nRT}{V}$, $T$ tăng và $V$ giảm đều làm cho $p$ tăng)." }
                ]
            },
            {
                id: "khi_7",
                context: "Câu 7 (Phương trình trạng thái khí lí tưởng - Vận dụng). Một bình bằng thép dung tích 50 lít chứa khí $O_2$ ở áp suất 5 MPa và nhiệt độ 37$^\\circ$C. Lấy $R = 8,31\\text{ J/(mol.K)}$, khối lượng mol của $O_2$ là $\\mu = 32\\text{ g/mol}$.",
                statements: [
                    { id: "a", text: "a) Nhiệt độ tuyệt đối của khối khí là 310 K.", isTrue: true, exp: "Đúng ($T = 37 + 273 = 310\\text{ K}$)." },
                    { id: "b", text: "b) Phương trình $pV = nRT$ áp dụng phải đổi $V$ ra m$^3$ và $p$ ra Pa.", isTrue: true, exp: "Đúng (Chuẩn hóa đơn vị hệ SI: 1 lít $= 10^{-3}\\text{ m}^3$, 1 MPa $= 10^6\\text{ Pa}$)." },
                    { id: "c", text: "c) Số mol khí trong bình xấp xỉ 97 mol.", isTrue: true, exp: "Đúng ($n_1 = \\frac{pV}{RT} = \\frac{5.10^6 \\times 50.10^{-3}}{8,31 \\times 310} \\approx 97,04\\text{ mol}$)." },
                    { id: "d", text: "d) Khi xả bớt khí ra ngoài và để bình nguội về 27$^\\circ$C, áp suất còn 2 MPa. Khối lượng khí đã xả ra là khoảng 1,5 kg.", isTrue: false, exp: "Sai ($n_2 = \\frac{2.10^6 \\times 50.10^{-3}}{8,31 \\times 300} \\approx 40,11\\text{ mol}$. Số mol khí xả ra $\\Delta n = 97,04 - 40,11 = 56,93\\text{ mol} \\Rightarrow \\Delta m = 56,93 \\times 32 \\approx 1821\\text{ g} \\approx 1,8\\text{ kg}$. Chỗ này phép tính ra 1,8 kg nên phát biểu 1,5 kg là Sai. Bẫy tính toán định lượng)." }
                ]
            },
            {
                id: "khi_8",
                context: "Câu 8 (Mô hình động học và Áp suất - Lý thuyết). Áp suất của chất khí lên thành bình được giải thích theo mô hình động học phân tử.",
                statements: [
                    { id: "a", text: "a) Áp suất sinh ra do trọng lượng của các phân tử khí đè lên đáy bình.", isTrue: false, exp: "Sai (Áp suất khí sinh ra do VA CHẠM, không phải trọng lượng như áp suất chất lỏng/rắn)." },
                    { id: "b", text: "b) Mỗi va chạm của một phân tử khí vào thành bình tạo ra một lực đẩy tức thời rất nhỏ, vô số va chạm tạo ra áp suất vĩ mô ổn định.", isTrue: true, exp: "Đúng (Bản chất vi mô - vĩ mô của áp suất)." },
                    { id: "c", text: "c) Theo mô hình động học, áp suất $p = \\frac{1}{3}nm\\overline{v^2}$, trong đó $n$ là số mol khí.", isTrue: false, exp: "Sai (Bẫy ký hiệu: $n$ trong hệ thức này là mật độ phân tử $n = N/V$, không phải số mol)." },
                    { id: "d", text: "d) Đại lượng $\\overline{v^2}$ là trung bình của các bình phương tốc độ của các phân tử khí.", isTrue: true, exp: "Đúng (Định nghĩa toán học của $\\overline{v^2}$)." }
                ]
            },
            {
                id: "khi_9",
                context: "Câu 9 (Biến thiên động lượng và Lực tác dụng). Xét một phân tử khí khối lượng $m$, chuyển động với vận tốc thành phần $v_x$ dọc theo trục $Ox$ và đập đàn hồi vuông góc vào một thành bình.",
                statements: [
                    { id: "a", text: "a) Sự biến thiên động lượng của phân tử khí sau va chạm có độ lớn là $mv_x$.", isTrue: false, exp: "Sai (Va chạm đàn hồi nên bay ngược lại với tốc độ $v_x$, độ biến thiên động lượng là $\\Delta p = mv_x - (-mv_x) = 2mv_x$)." },
                    { id: "b", text: "b) Phân tử khí chịu một xung lượng của lực từ thành bình có hướng ngược lại với chiều chuyển động ban đầu.", isTrue: true, exp: "Đúng (Theo định luật II Newton dạng xung lượng)." },
                    { id: "c", text: "c) Theo định luật III Newton, phân tử khí cũng tác dụng lên thành bình một lực bằng và ngược chiều với lực thành bình tác dụng lên nó.", isTrue: true, exp: "Đúng (Bản chất sự truyền tương tác)." },
                    { id: "d", text: "d) Hệ số $\\frac{1}{3}$ trong công thức áp suất xuất hiện là do việc giả sử không gian 3 chiều có các phương $x, y, z$ đẳng hướng ($\\overline{v_x^2} = \\overline{v_y^2} = \\overline{v_z^2} = \\frac{1}{3}\\overline{v^2}$).", isTrue: true, exp: "Đúng (Cơ sở toán học của mô hình 3 chiều)." }
                ]
            },
            {
                id: "khi_10",
                context: "Câu 10 (Hằng số Boltzmann và Động năng phân tử).",
                statements: [
                    { id: "a", text: "a) Hằng số Boltzmann được xác định bằng hệ thức $k = \\frac{R}{N_A}$ ($R$ là hằng số khí lí tưởng, $N_A$ là số Avogadro).", isTrue: true, exp: "Đúng (Định nghĩa hằng số Boltzmann)." },
                    { id: "b", text: "b) Hằng số Boltzmann có giá trị xấp xỉ $1,38.10^{-23}\\text{ J/K}$.", isTrue: true, exp: "Đúng (Biết giá trị hằng số)." },
                    { id: "c", text: "c) Từ việc đối chiếu $pV = \\frac{1}{3}Nm\\overline{v^2}$ và $pV = NkT$, ta rút ra được động năng tịnh tiến trung bình của phân tử khí là $W_d = \\frac{3}{2}kT$.", isTrue: true, exp: "Đúng (Chứng minh logic cốt lõi của vật lí thống kê, $pV = nRT = (N/N_A)RT = N(R/N_A)T = NkT$. Suy ra $\\frac{1}{3}m\\overline{v^2} = kT \\Rightarrow \\frac{1}{2}m\\overline{v^2} = \\frac{3}{2}kT$)." },
                    { id: "d", text: "d) Động năng trung bình của phân tử khí Helium ($\\mu = 4$) lớn hơn động năng trung bình của phân tử khí Oxygen ($\\mu = 32$) nếu chúng ở cùng một nhiệt độ.", isTrue: false, exp: "Sai (Bẫy bản chất: Động năng trung bình phụ thuộc CHỈ VÀO NHIỆT ĐỘ $T$, không phụ thuộc khối lượng mol. Bằng nhau ở cùng nhiệt độ)." }
                ]
            },
            {
                id: "khi_11",
                context: "Câu 11 (Vận tốc căn quân phương). Từ công thức động năng tịnh tiến trung bình $W_d = \\frac{3}{2}kT = \\frac{1}{2}m\\overline{v^2}$, ta định nghĩa tốc độ căn quân phương $v_{rms} = \\sqrt{\\overline{v^2}}$.",
                statements: [
                    { id: "a", text: "a) Công thức tính tốc độ căn quân phương có thể viết là $v_{rms} = \\sqrt{\\frac{3RT}{\\mu}}$.", isTrue: true, exp: "Đúng ($\\frac{1}{2}m\\overline{v^2} = \\frac{3}{2}\\frac{R}{N_A}T \\Rightarrow \\overline{v^2} = \\frac{3RT}{m N_A} = \\frac{3RT}{\\mu}$)." },
                    { id: "b", text: "b) Tốc độ căn quân phương chính là tốc độ trung bình cộng của tất cả các phân tử khí.", isTrue: false, exp: "Sai (Bẫy thống kê toán học: Trung bình của bình phương $\\neq$ bình phương của trung bình. $v_{rms}$ lớn hơn tốc độ trung bình một chút)." },
                    { id: "c", text: "c) Nếu nhiệt độ tuyệt đối của khối khí tăng lên 4 lần thì tốc độ căn quân phương của phân tử tăng lên 2 lần.", isTrue: true, exp: "Đúng ($v_{rms}$ tỉ lệ thuận với $\\sqrt{T}$)." },
                    { id: "d", text: "d) Ở cùng một nhiệt độ phòng, phân tử khí Hydro ($H_2$) di chuyển với tốc độ căn quân phương nhanh gấp 4 lần phân tử khí Oxy ($O_2$).", isTrue: true, exp: "Đúng ($v \\propto 1/\\sqrt{\\mu}$. $\\mu_{O_2}/\\mu_{H_2} = 32/2 = 16 \\Rightarrow \\sqrt{16} = 4$)." }
                ]
            },
            {
                id: "khi_12",
                context: "Câu 12 (Nội năng của khí lí tưởng). Xét khối khí lí tưởng đơn nguyên tử (chỉ có chuyển động tịnh tiến).",
                statements: [
                    { id: "a", text: "a) Nội năng của khí lí tưởng bao gồm động năng chuyển động nhiệt và thế năng tương tác phân tử.", isTrue: false, exp: "Sai (Khí lí tưởng bỏ qua lực tương tác $\\Rightarrow$ bỏ qua thế năng, chỉ có động năng)." },
                    { id: "b", text: "b) Tổng động năng tịnh tiến của $N$ phân tử trong khối khí được tính bằng $U = N \\times \\frac{3}{2}kT$.", isTrue: true, exp: "Đúng (Định nghĩa nội năng khí lí tưởng)." },
                    { id: "c", text: "c) Biểu thức tính nội năng của $n$ mol khí lí tưởng có thể viết là $U = \\frac{3}{2}nRT$.", isTrue: true, exp: "Đúng (Do $Nk = N(R/N_A) = nR$)." },
                    { id: "d", text: "d) Trong một quá trình giãn nở đẳng nhiệt, khí sinh công nhưng nội năng của khối khí không thay đổi.", isTrue: true, exp: "Đúng (Đẳng nhiệt $\\Rightarrow T = \\text{const} \\Rightarrow U = \\text{const} \\Rightarrow \\Delta U = 0$)." }
                ]
            },
            {
                id: "khi_13",
                context: "Câu 13 (Đồ thị và quá trình biến đổi). Trên trục tọa độ $p-T$, người đầu biểu diễn quá trình biến đổi trạng thái của một lượng khí lí tưởng là một đoạn thẳng đi qua gốc tọa độ.",
                statements: [
                    { id: "a", text: "a) Đây là một quá trình biến đổi đẳng áp.", isTrue: false, exp: "Sai (Quá trình có đoạn thẳng qua gốc $O$ trên $p-T$ tuân theo $p = \\text{const} \\times T \\Rightarrow V = \\text{const}$, tức là đẳng tích)." },
                    { id: "b", text: "b) Đây là một quá trình biến đổi đẳng tích.", isTrue: true, exp: "Đúng (Nhận dạng đồ thị Charles)." },
                    { id: "c", text: "c) Trong quá trình này, thể tích của khối khí không thay đổi.", isTrue: true, exp: "Đúng (Định nghĩa quá trình đẳng tích)." },
                    { id: "d", text: "d) Nếu quá trình này được vẽ lại trên đồ thị $p-V$ thì nó sẽ là một đường thẳng song song với trục $V$.", isTrue: false, exp: "Sai (Đẳng tích trên đồ thị $p-V$ là đường vuông góc với trục $V$, song song trục $p$)." }
                ]
            },
            {
                id: "khi_14",
                context: "Câu 14 (Tổng hợp Mật độ phân tử & Phương trình). Khí trong một căn phòng ở điều kiện 1 atm $\\approx 10^5\\text{ Pa}$ và nhiệt độ 27$^\\circ$C.",
                statements: [
                    { id: "a", text: "a) Phương trình trạng thái có thể viết dưới dạng $p = n k T$, với $n$ là mật độ phân tử khí.", isTrue: true, exp: "Đúng ($p = (N/V)kT = nkT$)." },
                    { id: "b", text: "b) Mật độ phân tử khí tỉ lệ thuận với nhiệt độ tuyệt đối của phòng.", isTrue: false, exp: "Sai ($n = p/kT$, nếu áp suất $p$ không đổi thì mật độ $n$ tỉ lệ NGHỊCH với $T$)." },
                    { id: "c", text: "c) Số phân tử khí có trong $1\\text{ m}^3$ không khí của căn phòng xấp xỉ $2,4.10^{25}$ phân tử.", isTrue: true, exp: "Đúng ($n = \\frac{10^5}{1,38.10^{-23} \\times 300} \\approx 2,41.10^{25}\\text{ phân tử/m}^3$)." },
                    { id: "d", text: "d) Khi mở máy sưởi làm không khí trong phòng (không kín hoàn toàn) nóng lên, mật độ phân tử khí trong phòng sẽ giảm xuống.", isTrue: true, exp: "Đúng (Phòng không kín nên áp suất trong phòng luôn bằng 1 atm. Nhiệt độ tăng $\\Rightarrow V$ nở ra tống bớt khí ra ngoài $\\Rightarrow N$ giảm $\\Rightarrow$ mật độ $n$ giảm)." }
                ]
            },
            {
                id: "khi_15",
                context: "Câu 15 (Bẫy khái niệm áp dụng định luật). Một quả bóng bay được bơm căng khí Helium ở mặt đất, sau đó bay lên cao. Biết trên cao áp suất khí quyển giảm và nhiệt độ cũng giảm.",
                statements: [
                    { id: "a", text: "a) Thể tích quả bóng chắc chắn sẽ tăng lên không ngừng cho đến khi vỡ.", isTrue: false, exp: "Sai (Tùy thuộc vào tốc độ giảm của áp suất và nhiệt độ, nếu nhiệt độ giảm quá sâu, bóng có thể co lại)." },
                    { id: "b", text: "b) Nếu nhiệt độ giảm rất mạnh làm $T$ giảm nhanh hơn $p$, thể tích quả bóng có thể bị co lại.", isTrue: true, exp: "Đúng (Theo $V = nRT/p$, nếu $T$ giảm mạnh hơn $p$ thì $V$ giảm)." },
                    { id: "c", text: "c) Chỉ có định luật Boyle mới đủ để giải thích hiện tượng sự thay đổi thể tích của quả bóng.", isTrue: false, exp: "Sai (Cần phương trình trạng thái đầy đủ vì cả $p, V, T$ đều thay đổi, Định luật Boyle chỉ xét khi $T$ hằng số)." },
                    { id: "d", text: "d) Số mol khí Helium bên trong quả bóng không đổi trong suốt quá trình bay lên (coi vỏ bóng không thẩm thấu).", isTrue: true, exp: "Đúng (Bản chất hệ kín khối lượng không đổi)." }
                ]
            },
            {
                id: "khi_16",
                context: "Câu 16 (Hệ thức áp suất và động năng). Trong bài học, học sinh được yêu cầu rút ra hệ thức liên hệ giữa áp suất $p$ và động năng tịnh tiến trung bình $W_d$.",
                statements: [
                    { id: "a", text: "a) Ta có hệ thức $p = \\frac{2}{3} n W_d$ với $n$ là mật độ phân tử.", isTrue: true, exp: "Đúng (Biến đổi: $p = \\frac{1}{3}nm\\overline{v^2} = \\frac{2}{3}n (\\frac{1}{2}m\\overline{v^2}) = \\frac{2}{3} n W_d$)." },
                    { id: "b", text: "b) Điều này có nghĩa là, nếu mật độ phân tử giữ nguyên, áp suất tỉ lệ bậc nhất với động năng trung bình.", isTrue: true, exp: "Đúng (Toán học)." },
                    { id: "c", text: "c) Hệ số $\\frac{2}{3}$ xuất hiện do việc thay thế $\\frac{1}{2}m\\overline{v^2}$ thành $W_d$ trong công thức ban đầu.", isTrue: true, exp: "Đúng (Rút gọn từ biểu thức động năng)." },
                    { id: "d", text: "d) Công thức này không áp dụng được cho hỗn hợp nhiều chất khí khác nhau (như không khí).", isTrue: false, exp: "Sai (Khí lí tưởng không phụ thuộc bản chất chất khí, đối với hỗn hợp ta dùng định luật Dalton cộng áp suất riêng phần, công thức vẫn đúng cho động năng trung bình của hỗn hợp)." }
                ]
            },
            {
                id: "khi_17",
                context: "Câu 17 (Năng lượng của chất khí). 1 mol khí Neon (Ne - đơn nguyên tử) được chứa trong bình có thể tích 22,4 lít ở 0$^\\circ$C.",
                statements: [
                    { id: "a", text: "a) Áp suất của khí trong bình xấp xỉ 1 atm $\\approx 1,013.10^5\\text{ Pa}$.", isTrue: true, exp: "Đúng (ĐKTC: 1 mol khí chiếm 22,4 L ở 1 atm)." },
                    { id: "b", text: "b) Động năng tịnh tiến trung bình của mỗi phân tử khí Neon là bằng 0 do ở nhiệt độ 0$^\\circ$C.", isTrue: false, exp: "Sai (Bẫy nhiệt độ: Động năng tịnh tiến phụ thuộc độ K. Ở 0$^\\circ$C $= 273\\text{ K}$, động năng vẫn lớn hơn 0)." },
                    { id: "c", text: "c) Tổng động năng của tất cả các phân tử khí trong bình là xấp xỉ 3400 J.", isTrue: true, exp: "Đúng ($U = \\frac{3}{2}nRT = 1,5 \\times 1 \\times 8,31 \\times 273 \\approx 3403\\text{ J}$)." },
                    { id: "d", text: "d) Nếu thay Neon bằng 1 mol khí Argon (Ar) ở cùng điều kiện, tổng động năng tịnh tiến của hệ vẫn không thay đổi.", isTrue: true, exp: "Đúng (Tổng động năng tịnh tiến chỉ phụ thuộc nhiệt độ $T$ và số mol $n$, không phụ thuộc loại khí)." }
                ]
            },
            {
                id: "khi_18",
                context: "Câu 18 (Sự hòa trộn hai chất khí). Cho bình A chứa $H_2$ và bình B chứa $O_2$ (cùng thể tích $V$, cùng nhiệt độ $T$, cùng áp suất $p$). Mở van nối 2 bình.",
                statements: [
                    { id: "a", text: "a) Các phân tử $H_2$ và $O_2$ sẽ chuyển động qua lại giữa hai bình do chuyển động nhiệt hỗn loạn.", isTrue: true, exp: "Đúng (Hiện tượng khuếch tán chất khí do chuyển động nhiệt)." },
                    { id: "b", text: "b) Động năng trung bình của phân tử $H_2$ lớn hơn $O_2$.", isTrue: false, exp: "Sai (Cùng nhiệt độ $T$ thì động năng trung bình bằng nhau)." },
                    { id: "c", text: "c) Sau khi trộn lẫn, áp suất tổng cộng của hệ vẫn là $p$.", isTrue: true, exp: "Đúng (Thể tích tăng đôi ($2V$), số mol tổng tăng đôi ($2n$), $T$ không đổi $\\Rightarrow p' = (2n)RT/(2V) = nRT/V = p$)." },
                    { id: "d", text: "d) Mật độ phân tử của hỗn hợp lúc này gấp đôi mật độ phân tử ban đầu của mỗi bình.", isTrue: false, exp: "Sai (Mật độ $n_{tổng} = (N_A + N_B)/(V_A + V_B) = 2N/2V = N/V$, mật độ tổng không đổi)." }
                ]
            },
            {
                id: "khi_19",
                context: "Câu 19 (THỰC HÀNH THÍ NGHIỆM - Khảo sát định luật Boyle). Trong bài thực hành, học sinh dùng một xilanh nhựa trong suốt có pit-tông gắn với cảm biến áp suất. Không khí bị nhốt trong xilanh ở nhiệt độ phòng.",
                statements: [
                    { id: "a", text: "a) Đại lượng cần giữ không đổi (biến số kiểm soát) trong thí nghiệm này là nhiệt độ và khối lượng khí.", isTrue: true, exp: "Đúng (Định luật Boyle yêu cầu Đẳng nhiệt và đối với 1 lượng khí xác định)." },
                    { id: "b", text: "b) Khi đẩy pit-tông vào từ từ, thể tích khí giảm thì số chỉ trên cảm biến áp suất sẽ tăng.", isTrue: true, exp: "Đúng (Áp suất tỉ lệ nghịch thể tích)." },
                    { id: "c", text: "c) Để tiết kiệm thời gian, học sinh nên đẩy/kéo pit-tông thật nhanh để đọc số liệu ngay lập tức.", isTrue: false, exp: "Sai (Bẫy thực hành: Đẩy nhanh sẽ làm khí bị nén đoạn nhiệt, nhiệt độ sinh ra làm tăng $T$, sai số với giả định đẳng nhiệt. Phải đẩy từ từ)." },
                    { id: "d", text: "d) Bảng số liệu chuẩn sẽ cho thấy tích số của áp suất và thể tích ($p.V$) đo ở các vị trí pit-tông khác nhau là một giá trị xấp xỉ bằng nhau.", isTrue: true, exp: "Đúng (Cách kiểm chứng toán học định luật $pV = \\text{const}$)." }
                ]
            },
            {
                id: "khi_20",
                context: "Câu 20 (THỰC HÀNH THÍ NGHIỆM - Khảo sát định luật Charles). Học sinh dùng một ống thủy tinh nhỏ giọt, hàn kín một đầu, bên trong có một giọt thủy ngân nhốt một cột không khí. Đặt ống vào bình nước nóng, dùng nhiệt kế đo nhiệt độ nước và thước đo chiều dài cột khí.",
                statements: [
                    { id: "a", text: "a) Giọt thủy ngân có tác dụng duy trì áp suất của cột khí luôn bằng áp suất khí quyển cộng với áp suất do trọng lượng giọt thủy ngân (đảm bảo quá trình đẳng áp).", isTrue: true, exp: "Đúng (Chức năng cốt lõi của giọt thủy ngân trong thực hành đẳng áp)." },
                    { id: "b", text: "b) Thể tích của khối khí tỉ lệ thuận với chiều dài của cột khí trong ống thủy tinh có tiết diện đều.", isTrue: true, exp: "Đúng ($V = S.l$, $S$ không đổi nên $V$ đại diện qua chiều dài $l$)." },
                    { id: "c", text: "c) Khi nhiệt độ nước tăng lên, giọt thủy ngân sẽ tụt xuống sâu hơn về phía đáy ống hàn kín.", isTrue: false, exp: "Sai (Nhiệt độ tăng $\\Rightarrow V$ tăng $\\Rightarrow l$ tăng $\\Rightarrow$ giọt thủy ngân phải bị đẩy dâng LÊN cao)." },
                    { id: "d", text: "d) Đồ thị biểu diễn sự phụ thuộc của chiều dài cột không khí ($l$) vào nhiệt độ Celsius ($t^\\circ C$) theo lý thuyết là một đường thẳng đi qua gốc tọa độ.", isTrue: false, exp: "Sai (Bẫy đồ thị: Trong hệ $l - t(^\\circ C)$, đồ thị là đường thẳng có hệ số tự do (cắt trục tung tại $l_0$), đường đi qua gốc tọa độ chỉ xảy ra trong hệ nhiệt độ tuyệt đối $l - T(\\text{K})$)." }
                ]
            },
			{
            id: 'q21',
            context: 'Một khối khí lý tưởng xác định thực hiện một quá trình biến đổi trạng thái được biểu diễn trên đồ thị tọa độ $p - V$ là một đoạn thẳng đi qua gốc tọa độ O. Khối khí biến đổi từ trạng thái 1 ($p_1, V_1, T_1$) đến trạng thái 2 ($p_2, V_2, T_2$) sao cho thể tích tăng lên.',
            statements: [
                { id: 'a', text: 'Đây là một quá trình đẳng áp vì đồ thị có dạng đường thẳng.', isTrue: false, exp: 'SAI. Trong hệ tọa độ $p - V$, đường đẳng áp phải là một đường thẳng song song với trục hoành V, không phải đường thẳng đi qua gốc tọa độ.' },
                { id: 'b', text: 'Trong quá trình biến đổi này, áp suất của khối khí tỉ lệ thuận với thể tích của nó.', isTrue: true, exp: 'ĐÚNG. Mọi đường thẳng đi qua gốc tọa độ trong hệ tọa độ $p - V$ đều có phương trình dạng $p = aV$ (với a là hằng số dương), thể hiện mối quan hệ tỉ lệ thuận.' },
                { id: 'c', text: 'Nhiệt độ tuyệt đối của khối khí tỉ lệ nghịch với thể tích của nó trong suốt quá trình.', isTrue: false, exp: 'SAI. Từ $p = aV$ và phương trình trạng thái $pV = nRT$, ta suy ra $aV^2 = nRT$, nghĩa là nhiệt độ T tỉ lệ thuận với bình phương thể tích $V^2$.' },
                { id: 'd', text: 'Khi trạng thái khối khí dịch chuyển từ trạng thái 1 đến trạng thái 2, nhiệt độ tuyệt đối của khối khí giảm xuống.', isTrue: false, exp: 'SAI. Vì thể tích V tăng và T tỉ lệ thuận với $V^2$, nên nhiệt độ tuyệt đối của khối khí phải tăng lên khi dịch chuyển ra xa gốc tọa độ.' }
            ]
        },
        {
            id: 'q22',
            context: 'Một lượng khí lý tưởng xác định được chứa trong một xi-lanh kín đặt thẳng đứng nhờ một pít-tông có khối lượng m, diện tích tiết diện ngang là S. Lượng khí ban đầu có thể tích $V_1$ ở nhiệt độ tuyệt đối $T_1$. Người ta nung nóng chậm khối khí đến nhiệt độ $T_2$ để pít-tông dịch chuyển tự do không ma sát lên trên. Biết áp suất khí quyển bên ngoài là $p_0$ không đổi.',
            statements: [
                { id: 'a', text: 'Quá trình nung nóng khối khí trong xi-lanh là quá trình đẳng tích.', isTrue: false, exp: 'SAI. Do pít-tông dịch chuyển tự do làm thể tích khí thay đổi, đây không thể là quá trình đẳng tích.' },
                { id: 'b', text: 'Áp suất của khối khí bên trong xi-lanh trong suốt quá trình biến đổi luôn giữ giá trị ổn định là $p = p_0 + \\frac{mg}{S}$.', isTrue: true, exp: 'ĐÚNG. Do pít-tông trượt không ma sát và cân bằng áp lực chậm, áp suất khí luôn cân bằng với tổng áp suất khí quyển và áp suất do trọng lượng pít-tông gây ra.' },
                { id: 'c', text: 'Thể tích $V_2$ của khối khí ở trạng thái 2 được xác định bằng công thức $V_2 = V_1 \\cdot \\frac{T_1}{T_2}$.', isTrue: false, exp: 'SAI. Theo định luật Charles cho quá trình đẳng áp, thể tích tỉ lệ thuận với nhiệt độ tuyệt đối, do đó phải là $V_2 = V_1 \\cdot \\frac{T_2}{T_1}$.' },
                { id: 'd', text: 'Do khối khí nhận nhiệt lượng để dãn nở nên công mà khối khí thực hiện chống lại áp suất bên ngoài bằng 0.', isTrue: false, exp: 'SAI. Khí dãn nở đẩy pít-tông lên cao tức là khí sinh công cơ học khác 0, được tính bằng $A = p \\cdot \\Delta V$.' }
            ]
        },
        {
            id: 'q23',
            context: 'Một bình dung tích 10 lít chứa một hỗn hợp khí lý tưởng gồm 0,2 mol khí ôxi ($O_2$) và 0,3 mol khí nitơ ($N_2$) ở cùng nhiệt độ tuyệt đối 300 K. Hằng số khí lý tưởng $R \\approx 0,082 \\text{ atm.L/(mol.K)}$.',
            statements: [
                { id: 'a', text: 'Áp suất riêng phần của khí ôxi tác dụng lên thành bình lớn hơn áp suất riêng phần của khí nitơ.', isTrue: false, exp: 'SAI. Áp suất riêng phần tỉ lệ thuận với số mol của khí đó trong bình, vì số mol ôxi nhỏ hơn nitơ nên áp suất riêng phần của ôxi phải nhỏ hơn.' },
                { id: 'b', text: 'Theo định luật Dalton, áp suất tổng cộng của hỗn hợp khí bằng tổng các áp suất riêng phần của từng khí thành phần.', isTrue: true, exp: 'ĐÚNG. Đây là nội dung chính xác của định luật Dalton về áp suất hỗn hợp khí lý tưởng không phản ứng hóa học với nhau.' },
                { id: 'c', text: 'Nếu rút toàn bộ lượng khí ôxi ra khỏi bình thì áp suất của khí nitơ còn lại trong bình sẽ tăng lên để chiếm chỗ.', isTrue: false, exp: 'SAI. Áp suất riêng phần của khí nitơ chỉ phụ thuộc vào số mol nitơ, nhiệt độ và thể tích bình, các yếu tố này không đổi nên áp suất nitơ giữ nguyên.' },
                { id: 'd', text: 'Áp suất tổng cộng của hỗn hợp khí trong bình có giá trị xấp xỉ bằng 12,3 atm.', isTrue: false, exp: 'SAI. Sử dụng công thức $p = \\frac{n \\cdot R \\cdot T}{V} = \\frac{0,5 \\cdot 0,082 \\cdot 300}{10} = 1,23 \\text{ atm}$, giá trị 12,3 atm là sai lệch 10 lần.' }
            ]
        },
        {
            id: 'q24',
            context: 'Một học sinh thực hiện thí nghiệm nén đẳng nhiệt một lượng khí lý tưởng xác định đựng trong một xi-lanh nhờ pít-tông biến đổi dung tích từ 6 lít xuống 2 lít. Áp suất ban đầu của khối khí là 1 atm.',
            statements: [
                { id: 'a', text: 'Đồ thị biểu diễn quá trình này trong hệ tọa độ (p, V) là một đường thẳng đi xuống.', isTrue: false, exp: 'SAI. Đường đẳng nhiệt trong hệ tọa độ (p, V) là một đường cong hyperbol, không phải đường thẳng.' },
                { id: 'b', text: 'Áp suất của khối khí sau khi nén đạt giá trị 3 atm.', isTrue: true, exp: 'ĐÚNG. Theo định luật Boyle, $p_1 \\cdot V_1 = p_2 \\cdot V_2 \\Rightarrow p_2 = \\frac{1 \\cdot 6}{2} = 3 \\text{ atm}$.' },
                { id: 'c', text: 'Trong quá trình nén, mật độ phân tử khí (số phân tử trên một đơn vị thể tích) trong xi-lanh không thay đổi.', isTrue: false, exp: 'SAI. Vì lượng khí cố định (số phân tử không đổi) nhưng thể tích giảm đi 3 lần, nên mật độ phân tử phải tăng lên 3 lần.' },
                { id: 'd', text: 'Nếu trong quá trình nén, nhiệt độ bách phân (tính theo độ C) tăng gấp đôi thì thí nghiệm vẫn tuân theo định luật Boyle.', isTrue: false, exp: 'SAI. Định luật Boyle chỉ nghiệm đúng khi nhiệt độ tuyệt đối T được giữ cố định trong suốt quá trình biến đổi.' }
            ]
        },
        {
            id: 'q25',
            context: 'Một bình chứa khí ôxi ($O_2$) dung tích không đổi 20 lít ở áp suất 40 atm và nhiệt độ 300 K. Sau một thời gian sử dụng do van bị rò rỉ nhẹ, một phần khí thoát ra ngoài, áp suất đo được lúc này là 20 atm và nhiệt độ bình giảm xuống còn 280 K.',
            statements: [
                { id: 'a', text: 'Thể tích của lượng khí còn lại trong bình giảm đi một nửa vì áp suất giảm hai lần.', isTrue: false, exp: 'SAI. Vì bình có vỏ cứng dung tích không đổi và khí luôn chiếm đầy bình, thể tích khối khí còn lại vẫn là 20 lít.' },
                { id: 'b', text: 'Tỉ số giữa số mol khí còn lại trong bình và số mol khí ban đầu là $\\frac{14}{15}$.', isTrue: false, exp: 'SAI. Từ phương trình trạng thái: $n = \\frac{p \\cdot V}{R \\cdot T} \\Rightarrow \\frac{n_2}{n_1} = \\frac{p_2}{p_1} \\cdot \\frac{T_1}{T_2} = \\frac{20}{40} \\cdot \\frac{300}{280} = \\frac{15}{28}$, không phải $\\frac{14}{15}$.' },
                { id: 'c', text: 'Khối lượng khí ôxi đã thoát ra ngoài chiếm khoảng 46,4% khối lượng khí ban đầu.', isTrue: true, exp: 'ĐÚNG. Tỉ lệ khí còn lại là $\\frac{15}{28} \\approx 53,6\\%$, do đó tỉ lệ khí thoát ra là $100\\% - 53,6\\% = 46,4\\%$.' },
                { id: 'd', text: 'Không thể dùng phương trình Clapeyron-Mendeleev cho bài toán này vì khối lượng khí thay đổi.', isTrue: false, exp: 'SAI. Phương trình Clapeyron-Mendeleev áp dụng hoàn toàn bình thường cho từng trạng thái riêng biệt của khối khí với số mol tương ứng.' }
            ]
        },
        {
            id: 'q26',
            context: 'Hai bình thủy tinh thể tích $V_1 = 3$ lít và $V_2 = 2$ lít được nối với nhau bằng một ống nhỏ có van cách nhiệt ban đầu khóa. Bình 1 chứa khí lý tưởng ở áp suất 2 atm, bình 2 chứa cùng loại khí ở áp suất 1 atm. Nhiệt độ hai bình bằng nhau và được giữ không đổi suốt quá trình. Mở van cho hai bình thông nhau.',
            statements: [
                { id: 'a', text: 'Sau khi mở van, khí sẽ di chuyển từ bình 2 sang bình 1 do bình 1 có thể tích lớn hơn.', isTrue: false, exp: 'SAI. Khí chuyển động từ nơi có áp suất cao sang nơi có áp suất thấp, tức là từ bình 1 (2 atm) sang bình 2 (1 atm).' },
                { id: 'b', text: 'Áp suất cân bằng cuối cùng của hệ thống hai bình đạt giá trị bằng 1,5 atm.', isTrue: false, exp: 'SAI. Áp dụng bảo toàn lượng khí (đẳng nhiệt): $p_{\\text{cb}} \\cdot (V_1+V_2) = p_1 \\cdot V_1 + p_2 \\cdot V_2 \\Rightarrow p_{\\text{cb}} \\cdot 5 = 2 \\cdot 3 + 1 \\cdot 2 = 8 \\Rightarrow p_{\\text{cb}} = 1,6 \\text{ atm}$.' },
                { id: 'c', text: 'Quá trình trộn khí này dựa trên nguyên lý bảo toàn tổng số mol khí của hệ trước và sau khi mở van.', isTrue: true, exp: 'ĐÚNG. Vì hệ kín và không có phản ứng, tổng số mol khí $n_{\\text{tổng}} = n_1 + n_2$ là nền tảng cốt lõi để lập phương trình áp suất.' },
                { id: 'd', text: 'Thể tích của khối khí ở trạng thái cân bằng cuối cùng bằng hiệu thể tích hai bình $V = V_1 - V_2$.', isTrue: false, exp: 'SAI. Khi mở van thông nhau, khí chiếm toàn bộ không gian của cả hai bình nên thể tích tổng cộng phải bằng $V_1 + V_2$.' }
            ]
        },
        {
            id: 'q27',
            context: 'Một bọt khí nhỏ hình cầu nổi lên từ đáy một hồ nước sâu 20 m lên đến sát mặt nước. Biết nhiệt độ ở đáy hồ là 7°C và ở mặt hồ là 27°C. Áp suất khí quyển trên mặt hồ là $10^5 \\text{ Pa}$. Trọng lượng riêng của nước là $10^4 \\text{ N/m}^3$. Coi bọt khí là một khối khí lý tưởng xác định.',
            statements: [
                { id: 'a', text: 'Áp suất tác dụng lên bọt khí khi ở đáy hồ có giá trị bằng $2 \\cdot 10^5 \\text{ Pa}$.', isTrue: false, exp: 'SAI. Áp suất ở đáy hồ bằng áp suất khí quyển cộng áp suất thủy tĩnh: $p_1 = p_0 + d \\cdot h = 10^5 + 10^4 \\cdot 20 = 3 \\cdot 10^5 \\text{ Pa}$.' },
                { id: 'b', text: 'Quá trình nổi lên của bọt khí là quá trình đẳng nhiệt vì diễn ra trong cùng một hồ nước.', isTrue: false, exp: 'SAI. Nhiệt độ thay đổi từ 7°C (280 K) lên 27°C (300 K) nên không phải đẳng nhiệt.' },
                { id: 'c', text: 'Khi lên đến mặt hồ, thể tích của bọt khí tăng lên gấp khoảng 3,21 lần so với thể tích ở đáy hồ.', isTrue: true, exp: 'ĐÚNG. Theo phương trình trạng thái: $\\frac{p_1 \\cdot V_1}{T_1} = \\frac{p_2 \\cdot V_2}{T_2} \\Rightarrow \\frac{V_2}{V_1} = \\frac{p_1}{p_2} \\cdot \\frac{T_2}{T_1} = \\frac{3 \\cdot 10^5}{10^5} \\cdot \\frac{300}{280} \\approx 3,21$.' },
                { id: 'd', text: 'Lực đẩy Ác-si-mét tác dụng lên bọt khí giảm dần trong quá trình bọt khí nổi lên trên.', isTrue: false, exp: 'SAI. Do thể tích V của bọt khí tăng lên liên tục khi nổi lên, lực đẩy Ác-si-mét $F_A = d \\cdot V$ cũng phải tăng lên tương ứng.' }
            ]
        },
        {
            id: 'q28',
            context: 'Xét một khối lượng khí lý tưởng xác định đựng trong bình hở miệng đặt trong không khí. Ban đầu không khí trong bình ở nhiệt độ phòng 27°C. Người ta đun nóng chậm bình đến nhiệt độ 127°C ở áp suất khí quyển không đổi. Bỏ qua sự nở vì nhiệt của vỏ bình.',
            statements: [
                { id: 'a', text: 'Quá trình biến đổi của khối khí còn lại bên trong bình là quá trình đẳng tích vì dung tích bình không đổi.', isTrue: false, exp: 'SAI. Do bình hở, một lượng khí dãn nở thoát ra ngoài nên khối lượng khí trong bình thay đổi, đây không phải quá trình đẳng tích của một khối khí xác định.' },
                { id: 'b', text: 'Áp suất của không khí bên trong bình luôn bằng áp suất khí quyển ngoài trong suốt quá trình đun nóng.', isTrue: true, exp: 'ĐÚNG. Vì bình thông với khí quyển qua miệng hở nên áp suất bên trong luôn cân bằng với áp suất khí quyển bên ngoài.' },
                { id: 'c', text: 'Khối lượng không khí còn lại trong bình sau khi đun nóng bằng 25% khối lượng không khí ban đầu.', isTrue: false, exp: 'SAI. Áp dụng phương trình trạng thái cho lượng khí trong bình: $m_2 \\cdot T_2 = m_1 \\cdot T_1 \\Rightarrow m_2 = m_1 \\cdot \\frac{300}{400} = 0,75 m_1$ (tương đương 75%).' },
                { id: 'd', text: 'Mật độ phân tử khí bên trong bình tăng lên khi nhiệt độ tăng.', isTrue: false, exp: 'SAI. Do một lượng khí thoát ra ngoài, số phân tử khí trong bình giảm trong khi thể tích bình giữ nguyên, dẫn đến mật độ phân tử khí giảm.' }
            ]
        },
        {
            id: 'q29',
            context: 'Xét chất khí dưới góc độ thuyết động học phân tử khí lý tưởng. Động năng tịnh tiến trung bình của phân tử khí liên hệ với nhiệt độ tuyệt đối qua hệ thức $\\overline{W_đ} = \\frac{3}{2}kT$, với $k \\approx 1,38 \\cdot 10^{-23} \\text{ J/K}$ là hằng số Boltzmann.',
            statements: [
                { id: 'a', text: 'Nhiệt độ tuyệt đối của một chất khí là đại lượng đo lường trực tiếp mức độ chuyển động hỗn loạn của các phân tử khí.', isTrue: true, exp: 'ĐÚNG. Nhiệt độ tuyệt đối tỉ lệ thuận với động năng tịnh tiến trung bình, phản ánh mức độ chuyển động nhiệt vi mô của phân tử.' },
                { id: 'b', text: 'Hằng số Boltzmann k có giá trị thay đổi tùy thuộc vào khối lượng mol của từng loại chất khí được xét.', isTrue: false, exp: 'SAI. Hằng số Boltzmann là một hằng số vật lý phổ quát, bằng tỉ số giữa hằng số khí lý tưởng R và số Avogadro $N_A$, hoàn toàn không phụ thuộc loại khí.' },
                { id: 'c', text: 'Ở trạng thái độ không tuyệt đối (0 K), theo lý thuyết cổ điển, mọi chuyển động nhiệt của các phân tử khí đều ngừng hẳn.', isTrue: true, exp: 'ĐÚNG. Khi T = 0 K, động năng trung bình $\\overline{W_đ} = 0$, đồng nghĩa với việc tốc độ chuyển động nhiệt vi mô bằng 0.' },
                { id: 'd', text: 'Ở cùng một nhiệt độ phòng, phân tử khí hiđrô ($H_2$) và phân tử khí ôxi ($O_2$) có tốc độ căn quân phương (tốc độ trung bình) bằng nhau.', isTrue: false, exp: 'SAI. Do cùng nhiệt độ nên động năng trung bình bằng nhau, nhưng khối lượng phân tử hiđrô nhỏ hơn ôxi nên tốc độ của hiđrô phải lớn hơn.' }
            ]
        },
        {
            id: 'q30',
            context: 'Một lượng khí lý tưởng thực hiện một chu trình kín $1 \\rightarrow 2 \\rightarrow 3 \\rightarrow 1$ được biểu diễn trong hệ tọa độ (V, T) như sau: Khối khí xuất phát từ trạng thái 1 biến đổi đẳng nhiệt đến trạng thái 2 ($V_2 > V_1$), sau đó biến đổi đẳng áp đến trạng thái 3 ($T_3 < T_2$), và cuối cùng biến đổi đẳng tích để quay về trạng thái 1.',
            statements: [
                { id: 'a', text: 'Trong quá trình $1 \\rightarrow 2$, áp suất của khối khí tăng lên.', isTrue: false, exp: 'SAI. Quá trình $1 \\rightarrow 2$ là đẳng nhiệt dãn nở ($V_2 > V_1$), theo định luật Boyle, thể tích tăng thì áp suất khí phải giảm.' },
                { id: 'b', text: 'Đoạn đồ thị diễn tả quá trình đẳng áp $2 \\rightarrow 3$ trong hệ tọa độ (V, T) là một đoạn thẳng song song với trục nhiệt độ T.', isTrue: false, exp: 'SAI. Đường đẳng áp trong hệ (V, T) là đoạn thẳng có đường kéo dài đi qua gốc tọa độ O, không phải song song với trục T.' },
                { id: 'c', text: 'Trong quá trình đẳng tích $3 \\rightarrow 1$, áp suất của khối khí tỉ lệ thuận với nhiệt độ tuyệt đối T.', isTrue: true, exp: 'ĐÚNG. Theo định luật Gay-Lussac cho quá trình đẳng tích, áp suất p tỉ lệ thuận với nhiệt độ tuyệt đối T.' },
                { id: 'd', text: 'Tại trạng thái 3, thể tích của khối khí đạt giá trị nhỏ nhất trong toàn bộ chu trình.', isTrue: false, exp: 'SAI. Quá trình $3 \\rightarrow 1$ là đẳng tích nên $V_3 = V_1$. Quá trình $1 \\rightarrow 2$ dãn nở nên $V_2 > V_1$. Vậy $V_1$ và $V_3$ bằng nhau và cùng đạt giá trị nhỏ nhất, không phải duy nhất trạng thái 3.' }
            ]
        }
        ]
    },
    tu: {
        theory: `
            <h2>Kiến thức trọng tâm: Từ trường</h2>

            <div class="lesson-card">
                <h3>Bài 14. Từ trường</h3>
                
                <div class="concept-box">
                    <h4>1. Khái niệm và Đặc điểm</h4>
                    <ul>
                        <li><strong>Từ trường:</strong> Là một dạng vật chất vô hình tồn tại xung quanh nam châm hoặc dòng điện.</li>
                        <li><strong>Biểu hiện:</strong> Tác dụng lực từ lên một nam châm hoặc dòng điện khác đặt trong nó.</li>
                        <li><strong>Tính chất:</strong> Tính từ của nam châm và dòng điện có cùng bản chất (đều do các hạt mang điện chuyển động tạo ra).</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>2. Đường sức từ</h4>
                    <ul>
                        <li>Là những đường vẽ trong không gian sao cho tiếp tuyến tại mỗi điểm trùng với hướng của từ trường tại điểm đó.</li>
                        <li><strong>Quy ước chiều:</strong> "Ra Bắc, vào Nam" (Bên ngoài nam châm).</li>
                        <li><strong>Tính chất:</strong> Là những đường cong kín, không cắt nhau. Nơi từ trường mạnh thì đường sức dày, nơi từ trường yếu thì đường sức thưa.</li>
                    </ul>
                </div>
            </div>

            <div class="lesson-card">
                <h3>Bài 15. Lực từ tác dụng lên dây dẫn mang dòng điện. Cảm ứng từ</h3>
                
                <div class="concept-box">
                    <h4>1. Cảm ứng từ ($\\vec{B}$)</h4>
                    <ul>
                        <li><strong>Ý nghĩa:</strong> Đặc trưng cho từ trường về phương diện tác dụng lực.</li>
                        <li><strong>Đơn vị:</strong> Tesla (T).</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>2. Lực từ ($\\vec{F}$) tác dụng lên đoạn dây dẫn</h4>
                    <p>Xét đoạn dây dài $L$, mang dòng điện $I$, đặt trong từ trường đều $\\vec{B}$:</p>
                    <ul>
                        <li><strong>Điểm đặt:</strong> Tại trung điểm của đoạn dây.</li>
                        <li><strong>Phương:</strong> Vuông góc với mặt phẳng chứa đoạn dây và vectơ $\\vec{B}$.</li>
                        <li><strong>Chiều:</strong> Xác định bằng <strong>Quy tắc bàn tay trái</strong> (Hứng các đường sức từ vào lòng bàn tay, chiều từ cổ tay đến ngón giữa chỉ chiều dòng điện, ngón cái choãi ra $90^\\circ$ chỉ chiều lực từ).</li>
                    </ul>
                    <p><strong>Độ lớn:</strong></p>
                    <div class="formula-box">
                        $$F = BIL\\sin\\theta$$
                    </div>
                    <p><em>(Trong đó $\\theta$ là góc hợp bởi hướng của dòng điện và hướng của từ trường).</em></p>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Dùng sai tay để xác định chiều (dùng tay phải thay vì tay trái cho lực từ). Tính sai góc $\\theta$.</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Nhớ khẩu quyết: <strong>Lực - Trái</strong> (Lực từ dùng Bàn tay trái), <strong>Trường - Phải</strong> (Từ trường do dòng điện sinh ra dùng Nắm tay phải). Góc $\\theta$ là góc giữa chiều dòng điện $I$ và vectơ $\\vec{B}$.</div>
            </div>

            <div class="lesson-card">
                <h3>Bài 16. Từ thông. Hiện tượng cảm ứng điện từ</h3>
                
                <div class="concept-box">
                    <h4>1. Từ thông ($\\Phi$)</h4>
                    <ul>
                        <li><strong>Ý nghĩa:</strong> Đặc trưng cho số lượng đường sức từ xuyên qua một diện tích.</li>
                        <li><strong>Đơn vị:</strong> Weber (Wb).</li>
                    </ul>
                    <p><strong>Công thức:</strong></p>
                    <div class="formula-box">
                        $$\\Phi = BS\\cos\\alpha$$
                    </div>
                    <p><em>(Với $\\alpha$ là góc hợp bởi vectơ <strong>pháp tuyến</strong> $\\vec{n}$ của mặt phẳng và vectơ $\\vec{B}$).</em></p>
                </div>

                <div class="concept-box">
                    <h4>2. Hiện tượng cảm ứng điện từ</h4>
                    <ul>
                        <li><strong>Bản chất:</strong> Khi từ thông $\\Phi$ qua một mạch kín biến thiên theo thời gian, trong mạch xuất hiện dòng điện cảm ứng.</li>
                        <li><strong>Định luật Faraday (Độ lớn):</strong> Suất điện động cảm ứng tỉ lệ với tốc độ biến thiên từ thông.
                            <div class="formula-box">
                                $$e_c = -\\frac{\\Delta\\Phi}{\\Delta t}$$
                            </div>
                        </li>
                        <li><strong>Định luật Lenz (Chiều):</strong> Dòng điện cảm ứng có chiều sao cho từ trường do nó sinh ra có tác dụng <em>chống lại</em> nguyên nhân sinh ra nó.</li>
                    </ul>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Nhầm lẫn góc $\\alpha$ trong công thức từ thông. Học sinh thường lấy luôn số đo góc giữa vectơ $\\vec{B}$ và mặt phẳng khung dây đưa vào tính toán.</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Khắc sâu: $\\alpha$ là góc hợp bởi vectơ $\\vec{B}$ và <strong>Vectơ Pháp Tuyến $\\vec{n}$</strong> (vectơ vuông góc với mặt phẳng). Nếu đề bài lừa bằng câu "$\\vec{B}$ hợp với mặt phẳng góc $30^\\circ$", thì phải tự trừ đi: $\\alpha = 90^\\circ - 30^\\circ = 60^\\circ$.</div>
            </div>

            <div class="lesson-card">
                <h3>Bài 17. Máy phát điện xoay chiều</h3>
                
                <div class="concept-box">
                    <h4>1. Nguyên tắc hoạt động</h4>
                    <p>Dựa trên hiện tượng <strong>cảm ứng điện từ</strong>. Khi khung dây quay đều trong từ trường, từ thông qua khung biến thiên điều hòa, tạo ra suất điện động xoay chiều.</p>
                </div>

                <div class="concept-box">
                    <h4>2. Cấu tạo cơ bản</h4>
                    <ul>
                        <li><strong>Phần cảm:</strong> Nam châm (tạo ra từ trường).</li>
                        <li><strong>Phần ứng:</strong> Cuộn dây (nơi xuất hiện suất điện động cảm ứng).</li>
                        <li><em>Phân loại theo chuyển động:</em> Phần quay gọi là <strong>Roto</strong>, phần đứng yên gọi là <strong>Stato</strong>.</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>3. Các đại lượng xoay chiều</h4>
                    <p>Giá trị ghi trên các thiết bị điện là <strong>giá trị hiệu dụng</strong>.</p>
                    <p><strong>Công thức liên hệ với giá trị cực đại:</strong></p>
                    <div class="formula-box">
                        $$U = \\frac{U_0}{\\sqrt{2}} \\quad ; \\quad I = \\frac{I_0}{\\sqrt{2}}$$
                    </div>
                </div>
            </div>

            <div class="lesson-card">
                <h3>Bài 18. Ứng dụng hiện tượng cảm ứng điện từ</h3>
                
                <div class="concept-box">
                    <h4>1. Máy biến áp</h4>
                    <ul>
                        <li><strong>Chức năng:</strong> Thay đổi điện áp xoay chiều mà <strong>không làm thay đổi tần số</strong>.</li>
                    </ul>
                    <p><strong>Công thức:</strong></p>
                    <div class="formula-box">
                        $$\\frac{U_1}{U_2} = \\frac{N_1}{N_2}$$
                    </div>
                    <p><em>($N_1 > N_2$: Máy hạ áp ; $N_1 < N_2$: Máy tăng áp).</em></p>
                </div>

                <div class="concept-box">
                    <h4>2. Truyền tải điện năng đi xa</h4>
                    <p>Để giảm hao phí tỏa nhiệt trên đường dây, biện pháp tối ưu nhất là <strong>tăng điện áp</strong> truyền tải bằng máy biến áp trước khi truyền đi.</p>
                </div>

                <div class="concept-box">
                    <h4>3. Dòng điện Foucault (Phu-cô)</h4>
                    <ul>
                        <li><strong>Khái niệm:</strong> Dòng điện cảm ứng sinh ra trong khối kim loại khi đặt trong từ trường biến thiên.</li>
                        <li><strong>Ứng dụng:</strong> Nấu chảy kim loại, bếp từ, phanh điện từ.</li>
                        <li><strong>Giảm hao phí:</strong> Dùng các lá thép silic mỏng, sơn cách điện ghép sát nhau thay vì dùng khối kim loại đặc (như trong lõi máy biến áp).</li>
                    </ul>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Cho rằng máy biến áp có thể biến đổi cả điện một chiều (pin, ắc quy) và có thể thay đổi được tần số dòng điện.</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Máy biến áp hoạt động hoàn toàn dựa trên sự biến thiên của từ thông, do đó nó <strong>chỉ hoạt động với điện xoay chiều</strong> và <strong>tần số luôn được giữ nguyên</strong> từ sơ cấp sang thứ cấp.</div>
            </div>

            <div class="lesson-card">
                <h3>Bài 19. Điện từ trường. Mô hình sóng điện từ</h3>
                
                <div class="concept-box">
                    <h4>1. Thuyết Điện từ Maxwell</h4>
                    <ul>
                        <li>Từ trường biến thiên sinh ra <strong>điện trường xoáy</strong> (có đường sức kín).</li>
                        <li>Điện trường biến thiên sinh ra <strong>từ trường</strong>.</li>
                        <li>$\\Rightarrow$ Điện trường và từ trường là hai mặt của một thể thống nhất gọi là <strong>Điện từ trường</strong>.</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>2. Sóng điện từ</h4>
                    <ul>
                        <li><strong>Bản chất:</strong> Là điện từ trường lan truyền trong không gian.</li>
                        <li><strong>Đặc điểm nổi bật:</strong>
                            <ul>
                                <li>Truyền được trong mọi môi trường, kể cả <strong>chân không</strong> (vận tốc lớn nhất $c = 3 \\cdot 10^8 \\text{ m/s}$).</li>
                                <li>Là sóng ngang. Hai vectơ $\\vec{E}$ và $\\vec{B}$ luôn vuông góc với nhau và vuông góc với phương truyền sóng, nhưng dao động <strong>luôn cùng pha</strong>.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>3. Thang sóng điện từ</h4>
                    <p>Sắp xếp theo thứ tự <strong>bước sóng giảm dần</strong> (tần số tăng dần, năng lượng đâm xuyên mạnh dần):</p>
                    <div class="highlight-box">
                        Sóng vô tuyến $\\rightarrow$ Tia hồng ngoại $\\rightarrow$ Ánh sáng nhìn thấy $\\rightarrow$ Tia tử ngoại $\\rightarrow$ Tia X $\\rightarrow$ Tia Gamma.
                    </div>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Cho rằng pha dao động của $\\vec{E}$ và $\\vec{B}$ là vuông pha (do hình ảnh vẽ hai vectơ này luôn nằm trên 2 trục vuông góc nhau).</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Phải tách biệt rõ hai khái niệm: Phương dao động là <strong>vuông góc</strong> trong không gian, nhưng Nhịp dao động (Pha) thì <strong>luôn cùng pha</strong> (cùng đạt cực đại, cùng về 0 tại một thời điểm).</div>
            </div>
        `,
        quizzes: [
            {
                id: "tu_1",
                context: "Câu 1 (Khái niệm từ trường). Khảo sát không gian xung quanh một nam châm thẳng hoặc một đoạn dây dẫn mang dòng điện.",
                statements: [
                    { id: "a", text: "a) Từ trường là một dạng vật chất vô hình tồn tại xung quanh nam châm hoặc dòng điện.", isTrue: true, exp: "Đúng (Định nghĩa khái niệm từ trường)." },
                    { id: "b", text: "b) Ta có thể nhận biết sự tồn tại của từ trường bằng cách dùng một điện tích điểm đứng yên đặt vào không gian đó.", isTrue: false, exp: "Sai (Từ trường không tác dụng lực lên điện tích đứng yên, phải dùng nam châm thử hoặc dòng điện thử)." },
                    { id: "c", text: "c) Biểu hiện cụ thể của từ trường là sự xuất hiện của lực từ tác dụng lên một dòng điện hoặc một nam châm khác đặt trong nó.", isTrue: true, exp: "Đúng (Biểu hiện của từ trường)." },
                    { id: "d", text: "d) Bản chất của từ trường do nam châm vĩnh cửu tạo ra hoàn toàn độc lập và khác biệt với từ trường do dòng điện tạo ra.", isTrue: false, exp: "Sai (Bản chất từ trường của nam châm cũng xuất phát từ dòng điện phân tử/chuyển động của electron, thống nhất với dòng điện vĩ mô)." }
                ]
            },
            {
                id: "tu_2",
                context: "Câu 2 (Đường sức từ). Thực hiện thí nghiệm rắc mạt sắt lên một tấm bìa đặt trên một nam châm thẳng, sau đó gõ nhẹ tấm bìa.",
                statements: [
                    { id: "a", text: "a) Hình ảnh các mạt sắt sắp xếp theo những đường cong nhất định xung quanh nam châm gọi là từ phổ.", isTrue: true, exp: "Đúng (Khái niệm từ phổ)." },
                    { id: "b", text: "b) Nơi nào mạt sắt tập trung dày đặc thì nơi đó từ trường càng mạnh.", isTrue: true, exp: "Đúng (Quy ước biểu diễn từ trường)." },
                    { id: "c", text: "c) Các đường sức từ của nam châm thẳng là những đường cong mở, đi ra từ cực Nam và kết thúc ở cực Bắc.", isTrue: false, exp: "Sai (Đường sức từ là những đường cong KÍN, ngoài nam châm thì đi \"ra Bắc, vào Nam\")." },
                    { id: "d", text: "d) Nếu ta đặt một la bàn nhỏ tại một điểm trên đường mạt sắt, trục của kim la bàn sẽ nằm dọc theo tiếp tuyến của đường sức từ tại điểm đó.", isTrue: true, exp: "Đúng (Tính chất định hướng của đường sức từ)." }
                ]
            },
            {
                id: "tu_3",
                context: "Câu 3 (Đại lượng Cảm ứng từ B). Xét một từ trường đều. Đặt một đoạn dây dẫn thẳng mang dòng điện vào trong từ trường này.",
                statements: [
                    { id: "a", text: "a) Cảm ứng từ $\\vec{B}$ là đại lượng vectơ đặc trưng cho từ trường về phương diện tác dụng lực.", isTrue: true, exp: "Đúng (Định nghĩa cảm ứng từ)." },
                    { id: "b", text: "b) Trong hệ SI, đơn vị của cảm ứng từ là tesla (T), có thể biểu diễn tương đương là 1 T = 1 N/(A.m).", isTrue: true, exp: "Đúng (Đơn vị dẫn xuất từ $F = BIL$)." },
                    { id: "c", text: "c) Cảm ứng từ là một đại lượng đo lường cơ bản trong hệ SI, tương tự như khối lượng hay chiều dài.", isTrue: false, exp: "Sai (Tesla là đơn vị dẫn xuất, chỉ có ampe (A) mới là đơn vị cơ bản)." },
                    { id: "d", text: "d) Nếu đoạn dây dẫn được đặt song song với các đường sức từ thì lực từ tác dụng lên đoạn dây đó bằng 0.", isTrue: true, exp: "Đúng (Lực từ phụ thuộc $\\sin\\theta$, khi song song $\\theta = 0^\\circ \\Rightarrow \\sin\\theta = 0 \\Rightarrow F = 0$)." }
                ]
            },
            {
                id: "tu_4",
                context: "Câu 4 (Hướng của lực từ - Quy tắc bàn tay trái). Một đoạn dây dẫn mang dòng điện được đặt ngang hướng từ Đông sang Tây trong một từ trường đều có các đường sức từ hướng thẳng đứng từ trên xuống dưới.",
                statements: [
                    { id: "a", text: "a) Đoạn dây sẽ chịu tác dụng của một lực từ nằm trong mặt phẳng nằm ngang.", isTrue: true, exp: "Đúng (Vì lực từ $\\vec{F}$ vuông góc với cả $\\vec{B}$ (thẳng đứng) và $\\vec{I}$ (Đông-Tây), nên $\\vec{F}$ nằm ngang)." },
                    { id: "b", text: "b) Chiều của lực từ được xác định bằng quy tắc bàn tay phải.", isTrue: false, exp: "Sai (Chiều lực từ xác định bằng quy tắc bàn tay TRÁI)." },
                    { id: "c", text: "c) Áp dụng quy tắc, lực từ tác dụng lên đoạn dây dẫn sẽ hướng từ Nam lên Bắc.", isTrue: true, exp: "Đúng (Hứng $\\vec{B}$ từ trên xuống, ngón giữa chỉ Đông sang Tây $\\Rightarrow$ ngón cái chãi ra $90^\\circ$ chỉ về hướng Bắc)." },
                    { id: "d", text: "d) Nếu ta đồng thời đảo chiều dòng điện và đảo chiều từ trường thì hướng của lực từ sẽ không thay đổi.", isTrue: true, exp: "Đúng (Đảo 2 yếu tố cùng lúc thì quy tắc bàn tay trái cho lại kết quả như cũ)." }
                ]
            },
            {
                id: "tu_5",
                context: "Câu 5 (Định lượng Lực từ). Một đoạn dây dẫn thẳng dài 20 cm mang dòng điện cường độ 5 A được đặt trong một từ trường đều có độ lớn $B = 0,04\\text{ T}$. Đoạn dây hợp với hướng của các đường sức từ một góc $30^\\circ$.",
                statements: [
                    { id: "a", text: "a) Góc $\\theta$ trong biểu thức tính lực từ $F = BIL\\sin\\theta$ chính là góc $30^\\circ$.", isTrue: true, exp: "Đúng (Đúng định nghĩa góc)." },
                    { id: "b", text: "b) Nếu tăng cường độ dòng điện lên gấp đôi và giảm chiều dài đoạn dây trong từ trường đi một nửa thì độ lớn lực từ không đổi.", isTrue: true, exp: "Đúng ($I' = 2I, L' = L/2 \\Rightarrow I'L' = IL \\Rightarrow F$ không đổi)." },
                    { id: "c", text: "c) Lực từ tác dụng lên đoạn dây dẫn trong trường hợp này là 0,04 N.", isTrue: false, exp: "Sai (Bẫy tính toán: $F = 0,04 \\times 5 \\times 0,2 \\times \\sin(30^\\circ) = 0,02\\text{ N}$, không phải 0,04 N)." },
                    { id: "d", text: "d) Lực từ sẽ đạt giá trị cực đại khi đoạn dây được uốn thành một vòng tròn khép kín.", isTrue: false, exp: "Sai (Vòng dây khép kín đặt trong từ trường đều chịu tổng lực từ bằng 0, lực từ lên dây cực đại khi dây thẳng và đặt vuông góc $\\vec{B}$)." }
                ]
            },
            {
                id: "tu_6",
                context: "Câu 6 (Từ thông). Một khung dây dẫn hình chữ nhật có diện tích $S = 50\\text{ cm}^2$ gồm 100 vòng dây, đặt trong từ trường đều có cảm ứng từ $B = 0,2\\text{ T}$. Vectơ cảm ứng từ hợp với mặt phẳng khung dây một góc $60^\\circ$.",
                statements: [
                    { id: "a", text: "a) Từ thông qua diện tích $S$ là đại lượng vô hướng, có thể mang giá trị dương, âm hoặc bằng 0.", isTrue: true, exp: "Đúng (Tính chất của từ thông)." },
                    { id: "b", text: "b) Đơn vị của từ thông là weber (Wb), tương đương với $1\\text{ T.m}^2$.", isTrue: true, exp: "Đúng (Đơn vị dẫn xuất $\\Phi = B.S$)." },
                    { id: "c", text: "c) Góc $\\alpha$ (giữa pháp tuyến của khung dây và vectơ cảm ứng từ) để tính từ thông trong trường hợp này là $60^\\circ$.", isTrue: false, exp: "Sai (Bẫy góc: $\\vec{B}$ hợp với mặt phẳng góc $60^\\circ \\Rightarrow$ góc $\\alpha$ hợp với PHÁP TUYẾN là $90^\\circ - 60^\\circ = 30^\\circ$)." },
                    { id: "d", text: "d) Độ lớn từ thông qua toàn bộ khung dây này là 0,05 Wb.", isTrue: false, exp: "Sai (Bẫy tính toán định lượng: $\\Phi = NBS\\cos\\alpha = 100 \\times 0,2 \\times 50.10^{-4} \\times \\cos(30^\\circ) = 0,1 \\times \\frac{\\sqrt{3}}{2} \\approx 0,0866\\text{ Wb}$. Giá trị 0,05 là do học sinh tính nhầm $\\cos(60^\\circ)$)." }
                ]
            },
            {
                id: "tu_7",
                context: "Câu 7 (Hiện tượng cảm ứng điện từ). Tiến hành thí nghiệm đưa một nam châm thẳng lại gần một vòng dây dẫn kín cố định.",
                statements: [
                    { id: "a", text: "a) Trong vòng dây sẽ xuất hiện dòng điện cảm ứng.", isTrue: true, exp: "Đúng (Hiện tượng thực nghiệm)." },
                    { id: "b", text: "b) Nguyên nhân sinh ra dòng điện cảm ứng là do từ thông qua vòng dây biến thiên theo thời gian.", isTrue: true, exp: "Đúng (Bản chất vật lý)." },
                    { id: "c", text: "c) Nếu ta để nam châm đứng yên ngay sát vòng dây, dòng điện cảm ứng trong vòng dây sẽ đạt giá trị cực đại.", isTrue: false, exp: "Sai (Nam châm đứng yên $\\Rightarrow \\Delta\\Phi = 0 \\Rightarrow$ không có dòng điện cảm ứng)." },
                    { id: "d", text: "d) Tốc độ dịch chuyển nam châm càng nhanh thì dòng điện cảm ứng sinh ra có cường độ càng lớn.", isTrue: true, exp: "Đúng (Định luật Faraday: $e_c \\propto \\Delta\\Phi/\\Delta t$)." }
                ]
            },
            {
                id: "tu_8",
                context: "Câu 8 (Định luật Lenz). Vận dụng định luật Lenz cho thí nghiệm ở Câu 7 (đưa cực Bắc của nam châm lại gần vòng dây).",
                statements: [
                    { id: "a", text: "a) Định luật Lenz cho phép xác định chiều của dòng điện cảm ứng.", isTrue: true, exp: "Đúng (Ý nghĩa định luật)." },
                    { id: "b", text: "b) Từ trường do dòng điện cảm ứng sinh ra luôn có tác dụng chống lại nguyên nhân sinh ra nó.", isTrue: true, exp: "Đúng (Nội dung định luật)." },
                    { id: "c", text: "c) Mặt của vòng dây đối diện với cực Bắc của nam châm sẽ xuất hiện cực Nam để hút nam châm lại.", isTrue: false, exp: "Sai (Bẫy tương tác từ: Để \"chống lại\" sự LẠI GẦN, vòng dây phải sinh ra cực BẮC để ĐẨY nam châm ra xa)." },
                    { id: "d", text: "d) Sự xuất hiện của dòng điện cảm ứng có chiều tuân theo định luật Lenz là biểu hiện của định luật bảo toàn năng lượng.", isTrue: true, exp: "Đúng (Năng lượng cơ học sinh công thắng lực đẩy từ biến thành năng lượng điện)." }
                ]
            },
            {
                id: "tu_9",
                context: "Câu 9 (Định luật Faraday - Tính toán). Một cuộn dây có 500 vòng, diện tích mỗi vòng là $10\\text{ cm}^2$, đặt trong từ trường đều. Vectơ cảm ứng từ vuông góc với mặt phẳng cuộn dây. Cảm ứng từ $B$ giảm đều từ 0,5 T xuống 0 trong thời gian 0,1 s.",
                statements: [
                    { id: "a", text: "a) Biểu thức của định luật Faraday là $e_c = - \\frac{\\Delta\\Phi}{\\Delta t}$.", isTrue: true, exp: "Đúng (Biểu thức gốc)." },
                    { id: "b", text: "b) Độ biến thiên từ thông qua một vòng dây trong khoảng thời gian trên là $\\Delta\\Phi = -5.10^{-4}\\text{ Wb}$.", isTrue: true, exp: "Đúng ($\\Delta\\Phi = S(\\Delta B) = 10.10^{-4} \\times (0 - 0,5) = -5.10^{-4}\\text{ Wb}$)." },
                    { id: "c", text: "c) Suất điện động cảm ứng xuất hiện trong cuộn dây có độ lớn là 2,5 V.", isTrue: true, exp: "Đúng ($|e_c| = |-N \\frac{\\Delta\\Phi}{\\Delta t}| = 500 \\times \\frac{5.10^{-4}}{0,1} = 2,5\\text{ V}$)." },
                    { id: "d", text: "d) Nếu cảm ứng từ không giảm mà tăng đều từ 0,5 T lên 1,0 T trong cùng thời gian đó thì suất điện động cảm ứng sinh ra sẽ có chiều giống như ban đầu.", isTrue: false, exp: "Sai (Tăng từ trường $\\Rightarrow \\Delta\\Phi > 0$, chiều suất điện động đảo ngược so với khi từ trường giảm)." }
                ]
            },
            {
                id: "tu_10",
                context: "Câu 10 (Sóng điện từ). Mô tả mô hình và sự lan truyền của sóng điện từ trong thang sóng.",
                statements: [
                    { id: "a", text: "a) Sóng điện từ là sự lan truyền của điện từ trường biến thiên trong không gian.", isTrue: true, exp: "Đúng (Khái niệm)." },
                    { id: "b", text: "b) Sóng điện từ có thể lan truyền được trong cả các môi trường vật chất và trong chân không.", isTrue: true, exp: "Đúng (Tính chất truyền sóng)." },
                    { id: "c", text: "c) Tại mỗi điểm trên phương truyền sóng, vectơ cường độ điện trường $\\vec{E}$ và vectơ cảm ứng từ $\\vec{B}$ luôn dao động vuông pha với nhau.", isTrue: false, exp: "Sai (Bẫy pha dao động: $\\vec{E}$ và $\\vec{B}$ vuông góc về phương, nhưng luôn dao động ĐỒNG PHA)." },
                    { id: "d", text: "d) Trong thang sóng điện từ, tia X (tia Rơ-nghen) có bước sóng nhỏ hơn bước sóng của tia hồng ngoại.", isTrue: true, exp: "Đúng (Sắp xếp thang sóng: $\\lambda_{\\text{X}} < \\lambda_{\\text{UV}} < \\lambda_{\\text{Visible}} < \\lambda_{\\text{IR}}$)." }
                ]
            },
            {
                id: "tu_11",
                context: "Câu 11 (Tạo ra dòng điện xoay chiều). Cho một khung dây dẫn phẳng quay đều quanh một trục cố định nằm trong mặt phẳng khung, trong một từ trường đều $\\vec{B}$ có hướng vuông góc với trục quay.",
                statements: [
                    { id: "a", text: "a) Từ thông qua khung dây biến thiên điều hòa theo thời gian.", isTrue: true, exp: "Đúng ($\\Phi = \\Phi_0 \\cos(\\omega t + \\varphi)$)." },
                    { id: "b", text: "b) Trong khung dây xuất hiện suất điện động cảm ứng xoay chiều biến thiên cùng pha với từ thông.", isTrue: false, exp: "Sai (Suất điện động $e = -\\Phi'$ nên $e$ biến thiên trễ pha $\\pi/2$ so với từ thông)." },
                    { id: "c", text: "c) Khi mặt phẳng khung dây vuông góc với các đường sức từ thì suất điện động trong khung đạt giá trị cực đại.", isTrue: false, exp: "Sai (Khi mặt phẳng vuông góc đường sức $\\Rightarrow \\Phi$ đạt cực đại $\\Rightarrow$ tốc độ biến thiên từ thông bằng $0 \\Rightarrow e = 0$)." },
                    { id: "d", text: "d) Phương pháp này là nguyên tắc cơ bản ứng dụng hiện tượng cảm ứng điện từ để thiết kế máy phát điện xoay chiều.", isTrue: true, exp: "Đúng (Nguyên tắc chế tạo máy phát AC)." }
                ]
            },
            {
                id: "tu_12",
                context: "Câu 12 (Thông số dòng điện xoay chiều). Một thiết bị điện gia dụng tại Việt Nam ghi thông số \"Điện áp định mức 220V - Tần số 50Hz\".",
                statements: [
                    { id: "a", text: "a) Giá trị 220V là giá trị hiệu dụng của điện áp xoay chiều.", isTrue: true, exp: "Đúng (Quy ước thông số định mức luôn là giá trị hiệu dụng)." },
                    { id: "b", text: "b) Giá trị cực đại (biên độ) của điện áp này xấp xỉ 311V.", isTrue: true, exp: "Đúng ($U_0 = U\\sqrt{2} = 220\\sqrt{2} \\approx 311\\text{V}$)." },
                    { id: "c", text: "c) Chu kì của dòng điện xoay chiều này là 0,02s.", isTrue: true, exp: "Đúng ($T = 1/f = 1/50 = 0,02\\text{s}$)." },
                    { id: "d", text: "d) Khái niệm cường độ dòng điện hiệu dụng được xây dựng dựa trên tác dụng từ của dòng điện xoay chiều.", isTrue: false, exp: "Sai (Được xây dựng dựa trên tác dụng NHIỆT của dòng điện, tương đương dòng điện không đổi)." }
                ]
            },
            {
                id: "tu_13",
                context: "Câu 13 (Ứng dụng dòng điện xoay chiều & An toàn điện).",
                statements: [
                    { id: "a", text: "a) Máy biến áp là thiết bị ứng dụng hiện tượng cảm ứng điện từ để thay đổi điện áp xoay chiều.", isTrue: true, exp: "Đúng (Ứng dụng cảm ứng điện từ)." },
                    { id: "b", text: "b) Bếp từ (bếp điện từ) hoạt động bằng cách sinh ra dòng điện Foucault trực tiếp trên mặt kính cách điện để làm nóng.", isTrue: false, exp: "Sai (Dòng Foucault sinh ra ở mâm từ và truyền vào đáy nồi bằng hợp kim sắt từ, không sinh ra trên mặt kính)." },
                    { id: "c", text: "c) Để đảm bảo an toàn điện trong gia đình, các công tắc điện và cầu chì phải được lắp trên dây trung tính (dây nguội).", isTrue: false, exp: "Sai (Bẫy thực tế an toàn: Cầu chì và công tắc BẮT BUỘC phải lắp trên dây pha (dây nóng) để khi ngắt, mạch bị cắt hoàn toàn khỏi nguồn điện áp cao)." },
                    { id: "d", text: "d) Việc nối đất (tiếp địa) vỏ kim loại của các thiết bị điện như máy giặt giúp dòng điện rò rỉ truyền xuống đất, bảo vệ người dùng không bị điện giật.", isTrue: true, exp: "Đúng (Tác dụng của dây tiếp địa)." }
                ]
            },
            {
                id: "tu_14",
                context: "Câu 14 (Từ phổ ống dây và Nam châm điện). Quấn một sợi dây dẫn thành một ống dây dài (solenoid) và cho dòng điện chạy qua.",
                statements: [
                    { id: "a", text: "a) Bên trong lòng ống dây, các đường sức từ là những đường thẳng song song, cách đều nhau (từ trường đều).", isTrue: true, exp: "Đúng (Đặc tính từ trường lòng ống dây)." },
                    { id: "b", text: "b) Bên ngoài ống dây, hình dạng từ phổ giống hệt từ phổ của một nam châm thẳng.", isTrue: true, exp: "Đúng (Sự tương đương nam châm điện - nam châm thẳng)." },
                    { id: "c", text: "c) Khi ta đảo chiều dòng điện chạy qua ống dây, các cực từ ở hai đầu ống dây sẽ không thay đổi.", isTrue: false, exp: "Sai (Theo quy tắc nắm tay phải, đổi chiều $I$ thì chiều $\\vec{B}$ đổi $\\Rightarrow$ các cực từ đảo ngược)." },
                    { id: "d", text: "d) Ứng dụng phổ biến nhất của từ trường ống dây có dòng điện là chế tạo nam châm điện dùng trong công nghiệp.", isTrue: true, exp: "Đúng (Ứng dụng nam châm điện hút phế liệu, rơ-le)." }
                ]
            },
            {
                id: "tu_15",
                context: "Câu 15 (Lực Lorentz - Cơ chế vi mô của lực từ). Từ góc độ vi mô, lực từ tác dụng lên đoạn dây dẫn mang dòng điện chính là tổng hợp các lực tác dụng lên các hạt mang điện chuyển động.",
                statements: [
                    { id: "a", text: "a) Lực từ tác dụng lên một điện tích chuyển động trong từ trường được gọi là lực Lorentz.", isTrue: true, exp: "Đúng (Định nghĩa)." },
                    { id: "b", text: "b) Hướng của lực Lorentz luôn vuông góc với vận tốc của hạt mang điện.", isTrue: true, exp: "Đúng (Đặc điểm cơ bản của lực Lorentz)." },
                    { id: "c", text: "c) Lực Lorentz thực hiện công làm tăng động năng của hạt mang điện chuyển động trong từ trường.", isTrue: false, exp: "Sai (Vì $\\vec{F}$ vuông góc $\\vec{v}$ nên lực Lorentz KHÔNG sinh công, động năng và độ lớn vận tốc hạt không đổi)." },
                    { id: "d", text: "d) Cùng chuyển động với một vận tốc vào một từ trường, electron và hạt proton sẽ bị lệch về hai phía ngược nhau.", isTrue: true, exp: "Đúng (Do mang điện tích trái dấu nên lực Lorentz ngược chiều nhau)." }
                ]
            },
            {
                id: "tu_16",
                context: "Câu 16 (Điện từ trường của Maxwell). Thuyết điện từ của Maxwell thống nhất điện trường và từ trường.",
                statements: [
                    { id: "a", text: "a) Một từ trường biến thiên theo thời gian sẽ sinh ra một điện trường xoáy.", isTrue: true, exp: "Đúng (Giả thuyết 1 của Maxwell)." },
                    { id: "b", text: "b) Khác với điện trường tĩnh, điện trường xoáy có các đường sức là những đường cong kín.", isTrue: true, exp: "Đúng (Đặc điểm phân biệt điện trường xoáy)." },
                    { id: "c", text: "c) Theo giả thuyết thứ hai của Maxwell, chỉ có dòng điện dẫn (các điện tích chuyển động) mới sinh ra từ trường.", isTrue: false, exp: "Sai (Maxwell khẳng định cả điện trường biến thiên (dòng điện dịch) cũng sinh ra từ trường)." },
                    { id: "d", text: "d) Sự lan truyền tương tác điện từ trong không gian tuân theo vận tốc ánh sáng $c$.", isTrue: true, exp: "Đúng (Bản chất sóng điện từ)." }
                ]
            },
            {
                id: "tu_17",
                context: "Câu 17 (Phân tích thứ nguyên và Đơn vị). Học sinh được yêu cầu kiểm tra sự tương thích của các đơn vị đo các đại lượng từ.",
                statements: [
                    { id: "a", text: "a) Tesla (T) là đơn vị đo của cảm ứng từ $\\vec{B}$.", isTrue: true, exp: "Đúng (Nhận biết cơ bản)." },
                    { id: "b", text: "b) Weber (Wb) là đơn vị đo của từ thông $\\Phi$.", isTrue: true, exp: "Đúng (Nhận biết cơ bản)." },
                    { id: "c", text: "c) Dựa vào công thức tính từ thông, ta có hệ thức liên hệ: $1\\text{ Wb} = 1\\text{ T.m}^2$.", isTrue: true, exp: "Đúng (Rút ra từ $\\Phi = B.S$)." },
                    { id: "d", text: "d) Có thể phân tích đơn vị tesla ra các đơn vị cơ bản của hệ SI thành biểu thức: $\\text{T} = \\text{kg} \\cdot \\text{m} \\cdot \\text{s}^{-2} \\cdot \\text{A}^{-1}$.", isTrue: false, exp: "Sai (Bẫy thứ nguyên: $F = BIL \\Rightarrow B = \\frac{F}{IL} \\Rightarrow \\text{T} = \\frac{\\text{N}}{\\text{A.m}} = \\frac{\\text{kg.m.s}^{-2}}{\\text{A.m}} = \\text{kg.s}^{-2}\\text{.A}^{-1}$. Phát biểu bị thừa đơn vị mét (m))." }
                ]
            },
            {
                id: "tu_18",
                context: "Câu 18 (Dòng điện xoay chiều trong thực tế). Đánh giá các phát biểu về ứng dụng điện xoay chiều.",
                statements: [
                    { id: "a", text: "a) Ưu điểm lớn nhất của điện xoay chiều so với điện một chiều là dễ dàng thay đổi điện áp bằng máy biến áp.", isTrue: true, exp: "Đúng (Lý do lịch sử AC thắng DC trong truyền tải)." },
                    { id: "b", text: "b) Trong quá trình truyền tải điện năng đi xa, người ta thường dùng máy hạ áp ở đầu đường dây phát để giảm hao phí.", isTrue: false, exp: "Sai (Để giảm hao phí truyền tải, phải dùng máy TĂNG áp ở đầu đường dây để giảm cường độ dòng điện $I$)." },
                    { id: "c", text: "c) Động cơ không đồng bộ ba pha là thiết bị biến đổi điện năng của dòng điện xoay chiều thành cơ năng dựa trên từ trường quay.", isTrue: true, exp: "Đúng (Nguyên lý hoạt động động cơ 3 pha)." },
                    { id: "d", text: "d) Ở mạng điện dân dụng 3 pha 4 dây, điện áp giữa một dây pha và dây trung tính gọi là điện áp pha.", isTrue: true, exp: "Đúng (Định nghĩa điện áp pha và điện áp dây)." }
                ]
            },
            {
                id: "tu_19",
                context: "Câu 19 (THỰC HÀNH - Đo cảm ứng từ bằng cân dòng điện). Trong phòng thí nghiệm, học sinh dùng một \"cân dòng điện\" gồm một khung dây dẫn hình chữ nhật ABCD có đoạn đáy BC chiều dài L nằm ngang. Treo khung dây vào một đĩa cân sao cho đoạn BC nằm chìm trong từ trường đều $\\vec{B}$ của một nam châm.",
                statements: [
                    { id: "a", text: "a) Trước khi cho dòng điện qua khung dây, cần hiệu chỉnh để đĩa cân ở trạng thái thăng bằng.", isTrue: true, exp: "Đúng (Nguyên tắc mọi bài đo đạc dùng cân)." },
                    { id: "b", text: "b) Khi cho dòng điện $I$ qua khung, lực từ $F$ tác dụng lên đoạn BC sẽ làm cân mất thăng bằng.", isTrue: true, exp: "Đúng (Biểu hiện của tương tác từ)." },
                    { id: "c", text: "c) Để cân thăng bằng trở lại, ta thêm các quả nặng khối lượng $m$ vào đĩa cân. Khi đó độ lớn lực từ được tính gián tiếp qua trọng lực: $F = mg$.", isTrue: true, exp: "Đúng (Dùng ngẫu lực hoặc trọng lực để cân bằng lực từ)." },
                    { id: "d", text: "d) Khi vẽ đồ thị biểu diễn lực từ $F$ (trục tung) theo cường độ dòng điện $I$ (trục hoành), đồ thị thu được là một đường cong parabol.", isTrue: false, exp: "Sai (Bẫy đồ thị: $F = (B.L).I$. Do $B$ và $L$ hằng số nên $F$ tỉ lệ bậc nhất với $I$. Đồ thị phải là một đường thẳng đi qua gốc tọa độ)." }
                ]
            },
            {
                id: "tu_20",
                context: "Câu 20 (THỰC HÀNH - Máy biến áp). Học sinh lắp một mạch điện thí nghiệm gồm một máy biến áp có số vòng dây cuộn sơ cấp $N_1$ và cuộn thứ cấp $N_2$.",
                statements: [
                    { id: "a", text: "a) Để máy biến áp hoạt động, học sinh bắt buộc phải nối hai đầu cuộn sơ cấp với một nguồn điện xoay chiều.", isTrue: true, exp: "Đúng (Phải có dòng xoay chiều mới sinh ra từ thông biến thiên)." },
                    { id: "b", text: "b) Nếu $N_1 > N_2$, máy biến áp này đóng vai trò là máy tăng áp.", isTrue: false, exp: "Sai (Tỉ số $\\frac{U_1}{U_2} = \\frac{N_1}{N_2}$. Nếu $N_1 > N_2 \\Rightarrow U_1 > U_2 \\Rightarrow$ Đây là máy HẠ ÁP)." },
                    { id: "c", text: "c) Nếu học sinh vô tình nối cuộn sơ cấp với một viên pin 9V (nguồn điện một chiều) thì bóng đèn nối ở cuộn thứ cấp sẽ sáng liên tục.", isTrue: false, exp: "Sai (Bẫy thực hành dòng DC: Dòng một chiều từ pin tạo ra từ thông không đổi, $\\Delta\\Phi = 0$ nên cuộn thứ cấp không có dòng điện cảm ứng, đèn không sáng)." },
                    { id: "d", text: "d) Nguyên tắc hoạt động của máy biến áp thí nghiệm này hoàn toàn dựa trên hiện tượng cảm ứng điện từ.", isTrue: true, exp: "Đúng (Bản chất cốt lõi của máy biến áp)." }
                ]
            },
			{
            id: 'q21',
            context: 'Khảo sát bản chất của từ trường và đường sức từ qua các thực nghiệm. Người ta đặt kim nam châm thử, nam châm chữ U và các dây dẫn mang dòng điện để quan sát từ phổ.',
            statements: [
                { id: 'a', text: 'Từ trường tĩnh tĩnh có thể được tạo ra bởi các hạt mang điện tích đứng yên trong không gian.', isTrue: false, exp: 'SAI. Hạt điện tích đứng yên chỉ sinh ra điện trường tĩnh. Từ trường chỉ được sinh ra bởi các hạt điện tích chuyển động (dòng điện) hoặc nam châm.' },
                { id: 'b', text: 'Qua bất kỳ điểm nào trong không gian có từ trường, ta cũng chỉ vẽ được một và chỉ một đường sức từ.', isTrue: true, exp: 'ĐÚNG. Vì tại mỗi điểm, vectơ cảm ứng từ $\\vec{B}$ chỉ có một hướng xác định, nên các đường sức từ không bao giờ cắt nhau.' },
                { id: 'c', text: 'Các đường sức từ của nam châm chữ U ở khoảng không gian giữa hai cực là những đường thẳng song song và cách đều nhau.', isTrue: true, exp: 'ĐÚNG. Từ trường ở phần giữa hai cực của nam châm chữ U (khi bỏ qua hiệu ứng ở mép) là từ trường đều.' },
                { id: 'd', text: 'Vectơ cảm ứng từ tại một điểm có hướng trùng với hướng của lực từ tác dụng lên một hạt điện tích dương đứng yên tại điểm đó.', isTrue: false, exp: 'SAI. Hạt điện tích đứng yên ($v = 0$) thì lực từ (lực Lorentz) tác dụng lên nó bằng 0. Hướng của từ trường được quy ước theo hướng nam - bắc của kim nam châm thử nằm cân bằng tại điểm đó.' }
            ]
        },
        {
            id: 'q22',
            context: 'Một đoạn dây dẫn thẳng có chiều dài l mang dòng điện có cường độ I được đặt trong một từ trường đều có vectơ cảm ứng từ $\\vec{B}$. Gọi $\\alpha$ là góc hợp bởi chiều dòng điện và vectơ cảm ứng từ.',
            statements: [
                { id: 'a', text: 'Lực từ tác dụng lên đoạn dây dẫn đạt giá trị cực đại khi dây dẫn được đặt song song với các đường sức từ.', isTrue: false, exp: 'SAI. Theo công thức $F = BIl\\sin\\alpha$, khi dây song song với từ trường ($\\alpha = 0^\\circ$ hoặc $180^\\circ$), lực từ $F = 0$ (đạt cực tiểu).' },
                { id: 'b', text: 'Chiều của lực từ tác dụng lên đoạn dây luôn vuông góc với mặt phẳng chứa đoạn dây dẫn và vectơ cảm ứng từ $\\vec{B}$.', isTrue: true, exp: 'ĐÚNG. Lực từ $\\vec{F}$ tuân theo quy tắc bàn tay trái và là tích có hướng nên nó luôn vuông góc với mặt phẳng chứa $\\vec{l}$ và $\\vec{B}$.' },
                { id: 'c', text: 'Nếu giữ nguyên các điều kiện khác, khi cường độ dòng điện tăng 2 lần và chiều dài dây dẫn giảm 2 lần thì độ lớn lực từ không đổi.', isTrue: true, exp: 'ĐÚNG. Ta có $F\' = B \\cdot (2I) \\cdot (\\frac{l}{2}) \\cdot \\sin\\alpha = BIl\\sin\\alpha = F$.' },
                { id: 'd', text: 'Đơn vị đo của cảm ứng từ B trong hệ SI là Tesla (T), tương đương với $1 \\text{ N}/(\\text{A} \\cdot \\text{m})$.', isTrue: true, exp: 'ĐÚNG. Từ hệ thức $B = \\frac{F}{Il\\sin\\alpha}$, ta suy ra $1 \\text{ T} = \\frac{1 \\text{ N}}{1 \\text{ A} \\cdot 1 \\text{ m}}$.' }
            ]
        },
        {
            id: 'q23',
            context: 'Hai dây dẫn thẳng dài vô hạn, đặt song song trong không khí, cách nhau một khoảng $d = 20 \\text{ cm}$. Dây thứ nhất mang dòng điện $I_1 = 5 \\text{ A}$, dây thứ hai mang dòng điện $I_2 = 10 \\text{ A}$ chạy cùng chiều với $I_1$.',
            statements: [
                { id: 'a', text: 'Vì hai dây dẫn mang dòng điện chạy cùng chiều nên lực tương tác từ giữa chúng là lực đẩy.', isTrue: false, exp: 'SAI. Hai dòng điện thẳng song song chạy cùng chiều sẽ sinh ra lực hút nhau.' },
                { id: 'b', text: 'Tập hợp các điểm có vectơ cảm ứng từ tổng hợp bằng 0 nằm trên một mặt phẳng song song với hai dây và nằm giữa hai dây.', isTrue: true, exp: 'ĐÚNG. Do dòng điện cùng chiều, từ trường của chúng ở khoảng giữa hai dây sẽ ngược chiều nhau, nên cảm ứng từ tổng hợp có thể bằng 0.' },
                { id: 'c', text: 'Điểm có cảm ứng từ tổng hợp bằng 0 sẽ cách dây thứ nhất $10 \\text{ cm}$ và cách dây thứ hai $10 \\text{ cm}$.', isTrue: false, exp: 'SAI. Vì $I_2 > I_1$, điểm triệt tiêu từ trường phải nằm gần dây $I_1$ hơn. Ta có: $\\frac{I_1}{r_1} = \\frac{I_2}{r_2} \\Rightarrow \\frac{5}{r_1} = \\frac{10}{20-r_1} \\Rightarrow r_1 = \\frac{20}{3} \\text{ cm}$.' },
                { id: 'd', text: 'Từ trường do dòng điện $I_1$ gây ra tại vị trí của dòng điện $I_2$ có độ lớn bằng $5 \\cdot 10^{-6} \\text{ T}$.', isTrue: true, exp: 'ĐÚNG. Áp dụng công thức: $B_1 = 2 \\cdot 10^{-7} \\cdot \\frac{I_1}{d} = 2 \\cdot 10^{-7} \\cdot \\frac{5}{0,2} = 5 \\cdot 10^{-6} \\text{ T}$.' }
            ]
        },
        {
            id: 'q24',
            context: 'Một electron mang điện tích $q = -1,6 \\cdot 10^{-19} \\text{ C}$ bay vào một vùng từ trường đều $\\vec{B}$ với vận tốc $\\vec{v}$ có hướng vuông góc với các đường sức từ. Bỏ qua tác dụng của trọng lực.',
            statements: [
                { id: 'a', text: 'Dưới tác dụng của lực Lorentz, electron sẽ chuyển động theo quỹ đạo là một đường thẳng song song với các đường sức từ.', isTrue: false, exp: 'SAI. Vì $\\vec{v} \\perp \\vec{B}$, lực Lorentz đóng vai trò là lực hướng tâm, làm electron chuyển động theo quỹ đạo tròn.' },
                { id: 'b', text: 'Lực Lorentz không sinh công, do đó động năng và tốc độ của electron trong từ trường đều được bảo toàn.', isTrue: true, exp: 'ĐÚNG. Lực Lorentz luôn vuông góc với véctơ vận tốc, công $A = F \\cdot s \\cdot \\cos(90^\\circ) = 0$.' },
                { id: 'c', text: 'Chiều của lực Lorentz tác dụng lên electron được xác định trực tiếp bằng quy tắc bàn tay trái: chiều từ cổ tay đến ngón tay chỉ chiều $\\vec{v}$, ngón cái choãi ra $90^\\circ$ chỉ chiều lực tác dụng.', isTrue: false, exp: 'SAI. Electron mang điện âm ($q < 0$), nên chiều lực Lorentz sẽ ngược lại với chiều của ngón tay cái choãi ra theo quy tắc bàn tay trái thông thường.' },
                { id: 'd', text: 'Bán kính quỹ đạo của electron tỉ lệ thuận với động lượng của nó và tỉ lệ nghịch với độ lớn của cảm ứng từ B.', isTrue: true, exp: 'ĐÚNG. Từ $F_L = F_{ht} \\Rightarrow |q|vB = m\\frac{v^2}{R} \\Rightarrow R = \\frac{mv}{|q|B} = \\frac{p}{|q|B}$. Động lượng $p = mv$.' }
            ]
        },
        {
            id: 'q25',
            context: 'Một khung dây dẫn phẳng diện tích S gồm N vòng dây được đặt trong từ trường đều $\\vec{B}$. Gọi mặt phẳng khung dây hợp với vectơ $\\vec{B}$ một góc $\\alpha$. Từ thông qua khung dây ký hiệu là $\\Phi$.',
            statements: [
                { id: 'a', text: 'Từ thông là một đại lượng vô hướng, có thể mang giá trị dương, âm hoặc bằng không.', isTrue: true, exp: 'ĐÚNG. $\\Phi = NBS\\cos\\theta$ (với $\\theta$ là góc giữa $\\vec{B}$ và pháp tuyến $\\vec{n}$). Giá trị của $\\cos\\theta$ quyết định dấu của từ thông.' },
                { id: 'b', text: 'Đơn vị của từ thông trong hệ SI là Weber (Wb), tương đương với $1 \\text{ T} \\cdot \\text{m}^2$.', isTrue: true, exp: 'ĐÚNG. Từ công thức $\\Phi = BS$, thứ nguyên của từ thông là Tesla nhân mét vuông.' },
                { id: 'c', text: 'Từ thông qua khung dây đạt giá trị cực đại khi mặt phẳng khung dây đặt song song với các đường sức từ.', isTrue: false, exp: 'SAI. Khi mặt phẳng khung song song với $\\vec{B}$, góc giữa $\\vec{B}$ và pháp tuyến $\\vec{n}$ là $90^\\circ \\Rightarrow \\cos(90^\\circ) = 0 \\Rightarrow \\Phi = 0$ (cực tiểu).' },
                { id: 'd', text: 'Nếu $\\alpha = 30^\\circ$, công thức tính từ thông qua khung dây là $\\Phi = NBS\\cos(30^\\circ)$.', isTrue: false, exp: 'SAI. Góc $\\theta$ trong công thức là góc giữa $\\vec{B}$ và pháp tuyến. Mặt phẳng hợp với $\\vec{B}$ góc $30^\\circ$ thì góc pháp tuyến $\\theta = 90^\\circ - 30^\\circ = 60^\\circ$. Công thức đúng là $\\Phi = NBS\\cos(60^\\circ)$.' }
            ]
        },
        {
            id: 'q26',
            context: 'Hiện tượng cảm ứng điện từ được nghiên cứu thông qua thí nghiệm: Di chuyển một nam châm thẳng lại gần và ra xa một vòng dây dẫn kín nối với điện kế.',
            statements: [
                { id: 'a', text: 'Dòng điện cảm ứng chỉ xuất hiện trong vòng dây trong thời gian từ thông qua vòng dây biến thiên.', isTrue: true, exp: 'ĐÚNG. Đây là cốt lõi của định luật Faraday về cảm ứng điện từ. Nếu nam châm dừng lại, dòng điện sẽ biến mất.' },
                { id: 'b', text: 'Khi đưa cực Bắc (N) của nam châm lại gần vòng dây, từ trường của dòng điện cảm ứng sinh ra sẽ có tác dụng đẩy nam châm ra xa.', isTrue: true, exp: 'ĐÚNG. Theo định luật Lenz, dòng điện cảm ứng sinh ra từ trường chống lại nguyên nhân sinh ra nó (chống lại sự dịch lại gần $\\Rightarrow$ sinh ra lực đẩy).' },
                { id: 'c', text: 'Tốc độ dịch chuyển nam châm không ảnh hưởng đến độ lớn của suất điện động cảm ứng sinh ra trong vòng dây.', isTrue: false, exp: 'SAI. Theo định luật Faraday $|e_c| = |\\frac{\\Delta\\Phi}{\\Delta t}|$. Tốc độ dịch chuyển càng nhanh, thời gian $\\Delta t$ càng nhỏ $\\Rightarrow$ suất điện động càng lớn.' },
                { id: 'd', text: 'Hiện tượng xuất hiện dòng điện cảm ứng trong hệ thống này là một minh chứng của định luật bảo toàn và chuyển hóa năng lượng.', isTrue: true, exp: 'ĐÚNG. Cơ năng của tay người khi di chuyển nam châm (chống lại lực từ) đã chuyển hóa thành điện năng (dòng điện cảm ứng) trong vòng dây.' }
            ]
        },
        {
            id: 'q27',
            context: 'Hiện tượng tự cảm là một trường hợp đặc biệt của hiện tượng cảm ứng điện từ. Xét một ống dây dẫn có độ tự cảm L mắc nối tiếp với điện trở R, bóng đèn và khóa K vào một nguồn điện không đổi.',
            statements: [
                { id: 'a', text: 'Đơn vị của độ tự cảm L trong hệ SI là Henry (H).', isTrue: true, exp: 'ĐÚNG. Henry (H) là đơn vị chuẩn để đo hệ số tự cảm.' },
                { id: 'b', text: 'Độ tự cảm L của ống dây tỉ lệ thuận với cường độ dòng điện chạy qua ống dây đó.', isTrue: false, exp: 'SAI. Độ tự cảm $L = 4\\pi \\cdot 10^{-7} \\cdot \\mu \\cdot \\frac{N^2}{l} S$, chỉ phụ thuộc vào cấu tạo hình học và môi trường lõi của ống dây, không phụ thuộc vào dòng điện.' },
                { id: 'c', text: 'Khi đóng khóa K, bóng đèn mắc nối tiếp với ống dây sẽ không sáng lên ngay lập tức mà sáng lên từ từ.', isTrue: true, exp: 'ĐÚNG. Khi đóng K, dòng điện tăng làm từ thông qua ống dây tăng, sinh ra dòng điện tự cảm ngược chiều chống lại sự tăng của dòng điện chính.' },
                { id: 'd', text: 'Hiện tượng tự cảm chỉ có thể xảy ra trong các mạch điện xoay chiều do dòng điện biến thiên liên tục.', isTrue: false, exp: 'SAI. Hiện tượng tự cảm vẫn xảy ra trong mạch điện một chiều tại các thời điểm đóng mạch (dòng điện tăng) hoặc ngắt mạch (dòng điện giảm).' }
            ]
        },
        {
            id: 'q28',
            context: 'Đồ thị biểu diễn sự biến thiên của từ thông $\\Phi$ xuyên qua một khung dây dẫn kín có điện trở $R = 2 \\Omega$ theo thời gian t có dạng các đoạn thẳng. Cụ thể: Từ $t=0$ đến $t=2\\text{s}$, $\\Phi$ tăng đều từ $0$ lên $0,4 \\text{ Wb}$. Từ $t=2\\text{s}$ đến $t=4\\text{s}$, $\\Phi$ giữ mức $0,4 \\text{ Wb}$. Từ $t=4\\text{s}$ đến $t=5\\text{s}$, $\\Phi$ giảm đều từ $0,4 \\text{ Wb}$ về $0$.',
            statements: [
                { id: 'a', text: 'Trong khoảng thời gian từ $2\\text{s}$ đến $4\\text{s}$, suất điện động cảm ứng trong khung dây đạt giá trị cực đại do từ thông đang ở mức cao nhất.', isTrue: false, exp: 'SAI. Trong khoảng này từ thông không đổi ($\\Delta\\Phi = 0$), tốc độ biến thiên bằng 0 nên suất điện động cảm ứng $e_c = 0$.' },
                { id: 'b', text: 'Độ lớn suất điện động cảm ứng xuất hiện trong khung dây ở khoảng thời gian từ $0$ đến $2\\text{s}$ là $0,2 \\text{ V}$.', isTrue: true, exp: 'ĐÚNG. $|e_c| = |\\frac{\\Delta\\Phi}{\\Delta t}| = |\\frac{0,4 - 0}{2 - 0}| = 0,2 \\text{ V}$.' },
                { id: 'c', text: 'Cường độ dòng điện cảm ứng chạy qua khung dây trong khoảng thời gian từ $4\\text{s}$ đến $5\\text{s}$ có độ lớn là $0,2 \\text{ A}$.', isTrue: true, exp: 'ĐÚNG. Suất điện động $|e_c| = |\\frac{0 - 0,4}{5 - 4}| = 0,4 \\text{ V}$. Cường độ dòng điện $I_c = \\frac{e_c}{R} = \\frac{0,4}{2} = 0,2 \\text{ A}$.' },
                { id: 'd', text: 'Chiều của dòng điện cảm ứng xuất hiện trong khoảng $0-2\\text{s}$ và khoảng $4-5\\text{s}$ là cùng chiều nhau.', isTrue: false, exp: 'SAI. Ở $0-2\\text{s}$, từ thông tăng. Ở $4-5\\text{s}$, từ thông giảm. Theo định luật Lenz, chiều dòng điện cảm ứng ở hai giai đoạn này phải ngược nhau để chống lại nguyên nhân sinh ra nó.' }
            ]
        },
        {
            id: 'q29',
            context: 'Khảo sát năng lượng từ trường của một ống dây dài mang dòng điện. Ống dây có hệ số tự cảm $L = 50 \\text{ mH}$. Người ta tăng từ từ cường độ dòng điện chạy qua ống dây từ $0 \\text{ A}$ đến $4 \\text{ A}$.',
            statements: [
                { id: 'a', text: 'Năng lượng từ trường tích lũy trong ống dây tỉ lệ thuận với bình phương cường độ dòng điện chạy qua nó.', isTrue: true, exp: 'ĐÚNG. Công thức tính năng lượng từ trường của ống dây là $W = \\frac{1}{2}LI^2$, cho thấy sự tỉ lệ bậc hai.' },
                { id: 'b', text: 'Năng lượng từ trường tích lũy tối đa trong ống dây khi dòng điện đạt $4 \\text{ A}$ là $0,4 \\text{ J}$.', isTrue: true, exp: 'ĐÚNG. Đổi $L = 50 \\text{ mH} = 0,05 \\text{ H}$. Áp dụng công thức: $W = \\frac{1}{2} \\cdot 0,05 \\cdot 4^2 = \\frac{1}{2} \\cdot 0,05 \\cdot 16 = 0,4 \\text{ J}$.' },
                { id: 'c', text: 'Năng lượng từ trường bên trong ống dây thực chất là tổng động năng của các electron tự do chuyển động trong dây dẫn.', isTrue: false, exp: 'SAI. Năng lượng từ trường là năng lượng lưu trữ dưới dạng trường vật lý (từ trường) trong không gian bên trong lõi ống dây, không phải là động năng hạt.' },
                { id: 'd', text: 'Nếu quấn thêm số vòng dây lên gấp đôi trên cùng một ống dây có chiều dài không đổi (cùng dòng điện 4A), năng lượng từ trường sẽ tăng lên gấp 2 lần.', isTrue: false, exp: 'SAI. Độ tự cảm $L$ tỉ lệ với $N^2$. Khi $N$ tăng 2 lần $\\Rightarrow L$ tăng 4 lần. Vậy năng lượng từ trường $W = 0,5LI^2$ sẽ tăng 4 lần chứ không phải 2 lần.' }
            ]
        },
        {
            id: 'q30',
            context: 'Một chiếc xe tải hạng nặng di chuyển trên đường đèo được trang bị hệ thống phanh điện từ. Hệ thống này gồm các đĩa kim loại dày gắn với trục bánh xe, quay trong một vùng từ trường của nam châm điện có thể điều chỉnh cường độ.',
            statements: [
                { id: 'a', text: 'Hoạt động của phanh điện từ dựa trên nguyên lý cảm ứng điện từ sinh ra dòng điện Foucault (dòng điện xoáy) trong đĩa phanh kim loại.', isTrue: true, exp: 'ĐÚNG. Khi đĩa kim loại quay cắt các đường sức từ, từ thông qua các tiết diện đĩa thay đổi, sinh ra dòng điện cảm ứng bên trong khối kim loại gọi là dòng Foucault.' },
                { id: 'b', text: 'Lực từ do từ trường tác dụng lên dòng Foucault sinh ra một mô-men lực cùng chiều quay của bánh xe để hỗ trợ xe vượt dốc.', isTrue: false, exp: 'SAI. Theo định luật Lenz, dòng Foucault sinh ra từ trường chống lại nguyên nhân sinh ra nó (sự quay). Nên mô-men lực sinh ra phải ngược chiều chuyển động để cản trở sự quay (phanh xe).' },
                { id: 'c', text: 'Khi hệ thống phanh điện từ hoạt động, một phần lớn động năng của xe tải được chuyển hóa thành nhiệt năng làm nóng đĩa phanh.', isTrue: true, exp: 'ĐÚNG. Dòng Foucault chạy quẩn trong khối đĩa kim loại có điện trở sẽ tỏa nhiệt rất mạnh theo định luật Joule-Lenz.' },
                { id: 'd', text: 'Ưu điểm của phanh điện từ so với phanh ma sát cơ học là nó không gây mài mòn đĩa phanh, rất phù hợp khi xe đổ đèo liên tục.', isTrue: true, exp: 'ĐÚNG. Lực hãm sinh ra hoàn toàn thông qua trường điện từ mà không có sự tiếp xúc cơ học nào, tránh được hiện tượng cháy má phanh khi ma sát quá nhiệt.' }
            ]
        }
        ]
    },
   hatnhan: {
        theory: `
            <h2>Kiến thức trọng tâm: Vật lí hạt nhân</h2>

            <div class="lesson-card">
                <h3>Bài 21. Cấu trúc hạt nhân</h3>
                
                <div class="concept-box">
                    <h4>1. Khám phá hạt nhân (Thí nghiệm Rutherford)</h4>
                    <ul>
                        <li><strong>Kết luận cốt lõi:</strong> Nguyên tử có cấu tạo rỗng. Hạt nhân mang điện tích dương, chứa gần như toàn bộ khối lượng nguyên tử nhưng có kích thước vô cùng nhỏ bé ($\\sim 10^{-15}\\text{ m}$, nhỏ hơn nguyên tử khoảng $10.000$ đến $100.000$ lần).</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>2. Cấu tạo hạt nhân nguyên tử</h4>
                    <p>Hạt nhân được cấu tạo từ các nucleon, gồm 2 loại:</p>
                    <ul>
                        <li><strong>Proton (p):</strong> Mang điện tích dương ($+e$).</li>
                        <li><strong>Neutron (n):</strong> Không mang điện.</li>
                    </ul>
                    <p><strong>Kí hiệu hạt nhân:</strong></p>
                    <div class="formula-box">
                        $$^{A}_{Z}\\text{X}$$
                    </div>
                    <ul>
                        <li>$Z$: Số hiệu nguyên tử (Số proton = Số electron = Điện tích hạt nhân tính theo $e$).</li>
                        <li>$A$: Số khối (Tổng số nucleon).</li>
                        <li>$N = A - Z$: Số lượng neutron.</li>
                    </ul>
                    <div class="highlight-box">
                        <strong>Đồng vị:</strong> Là các nguyên tử có cùng số proton ($Z$) nhưng khác số neutron ($N$), dẫn đến khác số khối ($A$).
                    </div>
                </div>
            </div>

            <div class="lesson-card">
                <h3>Bài 22. Phản ứng hạt nhân và Năng lượng liên kết</h3>
                
                <div class="concept-box">
                    <h4>1. Hệ thức Einstein về khối lượng – năng lượng</h4>
                    <ul>
                        <li><strong>Khối lượng và năng lượng tỉ lệ thuận với nhau:</strong>
                            <div class="formula-box">$$E = mc^2$$</div>
                        </li>
                        <li><strong>Năng lượng nghỉ:</strong> Một vật đứng yên có khối lượng $m_0$ vẫn mang năng lượng $E_0 = m_0 c^2$.</li>
                        <li><strong>Đơn vị khối lượng nguyên tử (u):</strong> $1\\text{ u} \\approx 931,5\\text{ MeV/c}^2$.</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>2. Độ hụt khối và Năng lượng liên kết</h4>
                    <ul>
                        <li><strong>Độ hụt khối ($\\Delta m$):</strong> Khối lượng của hạt nhân luôn nhỏ hơn tổng khối lượng của các nucleon tạo thành nó.
                            <div class="formula-box">$$\\Delta m = [Z \\cdot m_p + (A - Z) \\cdot m_n] - m_X$$</div>
                        </li>
                        <li><strong>Năng lượng liên kết ($W_{lk}$):</strong> Là năng lượng tối thiểu cần thiết để phá vỡ hạt nhân thành các nucleon riêng rẽ (hoặc năng lượng tỏa ra khi hình thành hạt nhân).
                            <div class="formula-box">$$W_{lk} = \\Delta m \\cdot c^2$$</div>
                        </li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>3. Năng lượng liên kết riêng ($\\varepsilon$)</h4>
                    <ul>
                        <li><strong>Định nghĩa:</strong> Là năng lượng liên kết tính trên một nucleon.
                            <div class="formula-box">$$\\varepsilon = \\frac{W_{lk}}{A}$$</div>
                        </li>
                    </ul>
                    <div class="highlight-box golden-note">
                        <strong>Ý nghĩa "Vàng":</strong> Hạt nhân có năng lượng liên kết riêng <strong>càng lớn thì càng bền vững</strong>. (Các hạt nhân trung bình có số khối $50 < A < 90$ là bền vững nhất, ví dụ: Sắt $^{56}\\text{Fe}$).
                    </div>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Dùng "Năng lượng liên kết tổng" ($W_{lk}$) để so sánh độ bền vững và cho rằng hạt nhân càng nặng càng bền.</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Chìa khóa duy nhất để so sánh độ bền vững là <strong>Năng lượng liên kết riêng</strong> ($\\varepsilon$). Phải lấy $W_{lk}$ chia đều cho số khối $A$. Không được so sánh dựa trên $W_{lk}$.</div>
            </div>

            <div class="lesson-card">
                <h3>Bài 23. Hiện tượng phóng xạ</h3>
                
                <div class="concept-box">
                    <h4>1. Khái niệm và Đặc điểm</h4>
                    <ul>
                        <li><strong>Bản chất:</strong> Là quá trình phân rã tự phát của một hạt nhân không bền vững, phát ra các tia phóng xạ và biến đổi thành hạt nhân khác.</li>
                        <li><strong>Tính chất:</strong> Hoàn toàn ngẫu nhiên và không phụ thuộc vào điều kiện môi trường bên ngoài (nhiệt độ, áp suất,...).</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>2. Các loại tia phóng xạ</h4>
                    <div class="table-responsive">
                        <table class="styled-table">
                            <thead>
                                <tr>
                                    <th>Tia phóng xạ</th>
                                    <th>Bản chất</th>
                                    <th>Khả năng đâm xuyên</th>
                                    <th>Khả năng ion hóa</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Tia $\\alpha$</strong></td>
                                    <td>Dòng hạt nhân Helium ($^{4}_{2}\\text{He}$)</td>
                                    <td>Rất yếu (cản bởi tờ giấy)</td>
                                    <td>Rất mạnh</td>
                                </tr>
                                <tr>
                                    <td><strong>Tia $\\beta$</strong></td>
                                    <td>Dòng electron ($\\beta^-$) hoặc positron ($\\beta^+$)</td>
                                    <td>Mạnh hơn $\\alpha$ (cản bởi lá nhôm vài mm)</td>
                                    <td>Yếu hơn $\\alpha$</td>
                                </tr>
                                <tr>
                                    <td><strong>Tia $\\gamma$</strong></td>
                                    <td>Sóng điện từ bước sóng cực ngắn</td>
                                    <td>Cực kì mạnh (cản bởi lớp chì dày hoặc bê tông cốt thép)</td>
                                    <td>Yếu nhất</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="concept-box">
                    <h4>3. Định luật phân rã phóng xạ</h4>
                    <ul>
                        <li><strong>Chu kì bán rã ($T$):</strong> Khoảng thời gian để một nửa số hạt nhân hiện có bị phân rã.</li>
                        <li><strong>Hằng số phóng xạ ($\\lambda$):</strong> $\\lambda = \\frac{\\ln 2}{T}$</li>
                        <li><strong>Số hạt nhân còn lại sau thời gian $t$:</strong>
                            <div class="formula-box">$$N = N_0 \\cdot e^{-\\lambda t} = \\frac{N_0}{2^{\\frac{t}{T}}}$$</div>
                            <em>(Trong đó $N_0$ là số hạt nhân ban đầu)</em>
                        </li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>4. Độ phóng xạ ($H$)</h4>
                    <ul>
                        <li>Là đại lượng đặc trưng cho tính phóng xạ mạnh hay yếu, bằng số phân rã trong 1 giây.</li>
                        <li><strong>Công thức:</strong> $H = \\lambda \\cdot N$</li>
                        <li><strong>Đơn vị chuẩn:</strong> Becquerel (Bq). $1\\text{ Bq} = 1\\text{ phân rã/giây}$.</li>
                    </ul>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Nhầm lẫn khi đọc đề giữa lượng hạt "còn lại chưa phân rã" và lượng hạt "đã bị phân rã".</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Đọc kĩ câu hỏi và dịch ra công thức:<br>- Khối lượng/Số hạt <strong>Còn lại</strong>: $N$, $m$.<br>- Khối lượng/Số hạt <strong>Đã phân rã / Tạo thành</strong>: $\\Delta N = N_0 - N$, $\\Delta m = m_0 - m$.</div>
            </div>

            <div class="lesson-card">
                <h3>Bài 24. Công nghiệp hạt nhân</h3>
                
                <div class="concept-box">
                    <h4>1. Hai loại phản ứng hạt nhân tỏa năng lượng mạnh nhất</h4>
                    <ul>
                        <li><strong>Phản ứng phân hạch:</strong> Một hạt nhân rất nặng (như Urani $^{235}\\text{U}$) hấp thụ một neutron chậm rồi vỡ thành hai hạt nhân trung bình, tỏa năng lượng và sinh ra các neutron mới (tạo phản ứng dây chuyền).</li>
                        <li><strong>Phản ứng tổng hợp hạt nhân (Nhiệt hạch):</strong> Hai hạt nhân rất nhẹ (như các đồng vị của Hydro) kết hợp thành hạt nhân nặng hơn.
                            <ul>
                                <li><em>Điều kiện:</em> Xảy ra ở nhiệt độ hàng chục triệu độ.</li>
                                <li><em>Ví dụ:</em> Phản ứng tạo ra năng lượng trên Mặt Trời.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>2. Ứng dụng & An toàn bức xạ</h4>
                    <p><strong>Ứng dụng:</strong></p>
                    <ul>
                        <li>Nhà máy điện hạt nhân (kiểm soát phản ứng phân hạch dây chuyền bằng thanh điều khiển).</li>
                        <li>Y tế (đồng vị phóng xạ để xạ trị ung thư, chiếu chụp).</li>
                        <li>Định tuổi khảo cổ học (phương pháp Cacbon-14).</li>
                    </ul>
                    <p><strong>3 nguyên tắc vàng an toàn bức xạ:</strong></p>
                    <ul>
                        <li>Tối đa hóa khoảng cách tới nguồn phát.</li>
                        <li>Tối thiểu hóa thời gian tiếp xúc.</li>
                        <li>Sử dụng vật liệu che chắn phù hợp (chì, bê tông chuyên dụng).</li>
                    </ul>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Cho rằng phản ứng hạt nhân tuân theo định luật bảo toàn khối lượng như trong hóa học.</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Phản ứng hạt nhân <strong>Không bảo toàn khối lượng nghỉ</strong>. Khối lượng luôn bị hụt đi một phần để biến thành năng lượng lan tỏa ra môi trường (theo hệ thức $E = \\Delta m \\cdot c^2$). Chỉ có <em>số khối (A)</em> và <em>điện tích (Z)</em> là được bảo toàn.</div>
            </div>
        `,
       quizzes: [
            {
                id: "hatnhan_1",
                context: "Câu 1 (Cấu trúc hạt nhân và thí nghiệm tán xạ). Phân tích kết quả thí nghiệm Rutherford (bắn phá lá vàng mỏng bằng các hạt $\\alpha$).",
                statements: [
                    { id: "a", text: "a) Hầu hết các hạt $\\alpha$ truyền thẳng qua lá vàng chứng tỏ nguyên tử có cấu tạo chủ yếu là không gian rỗng.", isTrue: true, exp: "Đúng (Đặc điểm cấu tạo rỗng của nguyên tử)." },
                    { id: "b", text: "b) Sự tồn tại của hạt nhân được rút ra từ việc một số rất ít hạt $\\alpha$ bị lệch góc lớn hoặc bật ngược trở lại.", isTrue: true, exp: "Đúng (Kết luận cốt lõi của thí nghiệm Rutherford)." },
                    { id: "c", text: "c) Nguyên nhân hạt $\\alpha$ bị bật ngược trở lại là do chúng va chạm đàn hồi trực tiếp với các electron của nguyên tử vàng.", isTrue: false, exp: "Sai (Hạt $\\alpha$ bị bật lại do lực đẩy tĩnh điện Coulomb với hạt nhân vàng mang điện tích dương và tập trung khối lượng, khối lượng electron quá nhỏ để làm bật ngược hạt $\\alpha$)." },
                    { id: "d", text: "d) Đánh giá từ thí nghiệm cho thấy, kích thước của hạt nhân lớn hơn rất nhiều so với kích thước của toàn bộ nguyên tử.", isTrue: false, exp: "Sai (Kích thước hạt nhân ($10^{-15}\\text{ m}$) vô cùng nhỏ bé so với kích thước nguyên tử ($10^{-10}\\text{ m}$))." }
                ]
            },
            {
                id: "hatnhan_2",
                context: "Câu 2 (Mô hình và Kí hiệu hạt nhân). Xét hạt nhân Đồng vị Cacbon-14 có kí hiệu là $^{14}_{6}\\text{C}$.",
                statements: [
                    { id: "a", text: "a) Kí hiệu hạt nhân của nguyên tử được viết dưới dạng $^{A}_{Z}\\text{X}$, trong đó $A$ là số nucleon và $Z$ là số proton.", isTrue: true, exp: "Đúng (Quy ước quốc tế)." },
                    { id: "b", text: "b) Nguyên tử Cacbon-14 trung hòa về điện gồm có 6 proton, 8 neutron và 6 electron.", isTrue: true, exp: "Đúng ($Z=6 \\Rightarrow 6$ proton, 6 electron; $N = A - Z = 14 - 6 = 8$ neutron)." },
                    { id: "c", text: "c) Số khối $A$ ($A=14$) chính là khối lượng tuyệt đối của hạt nhân tính theo đơn vị gam.", isTrue: false, exp: "Sai ($A$ là TỔNG SỐ hạt nucleon, nó xấp xỉ khối lượng tính theo đơn vị amu, hoàn toàn không phải đơn vị gam)." },
                    { id: "d", text: "d) Điện tích của hạt nhân Cacbon-14 là $+6e$ (với $e$ là điện tích nguyên tố).", isTrue: true, exp: "Đúng (Hạt nhân mang điện tích dương do proton quyết định)." }
                ]
            },
            {
                id: "hatnhan_3",
                context: "Câu 3 (Hệ thức khối lượng - năng lượng). Theo thuyết tương đối hẹp của Einstein, khối lượng $m$ và năng lượng $E$ có mối liên hệ mật thiết.",
                statements: [
                    { id: "a", text: "a) Hệ thức liên hệ là $E = mc^2$, cho thấy khối lượng và năng lượng là hai thuộc tính đồng thời của vật chất, tỉ lệ thuận với nhau.", isTrue: true, exp: "Đúng (Ý nghĩa hệ thức Einstein)." },
                    { id: "b", text: "b) Một vật khi ở trạng thái nghỉ (đứng yên) thì năng lượng của nó hoàn toàn bằng không.", isTrue: false, exp: "Sai (Vật đứng yên vẫn có năng lượng nghỉ $E_0 = m_0 c^2$)." },
                    { id: "c", text: "c) Trong vật lí hạt nhân, khối lượng thường được đo bằng đơn vị khối lượng nguyên tử (amu), với $1\\text{ amu} \\approx 931,5\\text{ MeV/c}^2$.", isTrue: true, exp: "Đúng (Hệ quả của $E = mc^2$, đổi đơn vị amu $\\leftrightarrow \\text{MeV}$)." },
                    { id: "d", text: "d) Sự tỏa năng lượng của một phản ứng hạt nhân luôn đồng nghĩa với việc tổng khối lượng nghỉ của hệ các hạt sau phản ứng nhỏ hơn tổng khối lượng nghỉ của hệ trước phản ứng.", isTrue: true, exp: "Đúng (Nguyên lý bảo toàn: Tỏa năng lượng $\\Rightarrow \\Delta m > 0 \\Rightarrow m_{\\text{trước}} > m_{\\text{sau}}$)." }
                ]
            },
            {
                id: "hatnhan_4",
                context: "Câu 4 (Độ hụt khối và năng lượng liên kết). Hạt nhân Heli ($^{4}_{2}\\text{He}$) được tạo thành từ 2 proton và 2 neutron. Khối lượng của hạt nhân này là $m_{\\text{He}}$. Khối lượng của proton là $m_p$, neutron là $m_n$.",
                statements: [
                    { id: "a", text: "a) Khối lượng $m_{\\text{He}}$ luôn lớn hơn tổng khối lượng của các nucleon cấu tạo nên nó ($2m_p + 2m_n$).", isTrue: false, exp: "Sai (Khối lượng hạt nhân luôn NHỎ HƠN tổng khối lượng các nucleon tạo thành nó)." },
                    { id: "b", text: "b) Sự chênh lệch khối lượng $\\Delta m = (2m_p + 2m_n) - m_{\\text{He}}$ được gọi là độ hụt khối của hạt nhân.", isTrue: true, exp: "Đúng (Định nghĩa độ hụt khối)." },
                    { id: "c", text: "c) Năng lượng liên kết của hạt nhân Heli được tính bằng công thức $W_{lk} = \\Delta m.c^2$.", isTrue: true, exp: "Đúng (Công thức tính năng lượng liên kết)." },
                    { id: "d", text: "d) Năng lượng liên kết chính là năng lượng tối thiểu cần cung cấp để tách hạt nhân nguyên vẹn thành các nucleon riêng rẽ.", isTrue: true, exp: "Đúng (Ý nghĩa vật lí của năng lượng liên kết)." }
                ]
            },
            {
                id: "hatnhan_5",
                context: "Câu 5 (Năng lượng liên kết riêng và Độ bền vững).",
                statements: [
                    { id: "a", text: "a) Năng lượng liên kết riêng của một hạt nhân được tính bằng tỉ số giữa năng lượng liên kết và số proton của hạt nhân đó.", isTrue: false, exp: "Sai (Bẫy định nghĩa: Tỉ số giữa năng lượng liên kết và SỐ NUCLEON ($A$), không phải số proton ($Z$))." },
                    { id: "b", text: "b) Năng lượng liên kết riêng là đại lượng quyết định mức độ bền vững của hạt nhân.", isTrue: true, exp: "Đúng (Ý nghĩa cốt lõi của năng lượng liên kết riêng)." },
                    { id: "c", text: "c) Đồ thị thực nghiệm cho thấy các hạt nhân có số khối trung bình ($50 < A < 90$) có năng lượng liên kết riêng lớn nhất nên bền vững nhất.", isTrue: true, exp: "Đúng (Đặc điểm của đường cong năng lượng liên kết riêng)." },
                    { id: "d", text: "d) Hạt nhân Urani ($^{235}_{92}\\text{U}$) có năng lượng liên kết tổng cộng rất lớn nên nó là một hạt nhân rất bền vững.", isTrue: false, exp: "Sai (Urani nặng, năng lượng liên kết tổng lớn nhưng năng lượng liên kết RIÊNG lại nhỏ hơn sắt, nên nó kém bền và dễ tham gia phân hạch)." }
                ]
            },
            {
                id: "hatnhan_6",
                context: "Câu 6 (Phương trình phân rã đơn giản). Xét phương trình phân rã tự phát của hạt nhân Radi: $^{226}_{88}\\text{Ra} \\rightarrow ^{222}_{86}\\text{Rn} + \\text{X}$.",
                statements: [
                    { id: "a", text: "a) Hạt $\\text{X}$ trong phương trình phân rã trên là hạt $\\alpha$ ($^{4}_{2}\\text{He}$).", isTrue: true, exp: "Đúng ($A_X = 226 - 222 = 4$; $Z_X = 88 - 86 = 2 \\Rightarrow ^{4}_{2}\\text{He}$)." },
                    { id: "b", text: "b) Khi viết phương trình phân rã, ta phải tuân thủ định luật bảo toàn số nucleon (số khối) và định luật bảo toàn điện tích.", isTrue: true, exp: "Đúng (Nguyên tắc lập phương trình hạt nhân)." },
                    { id: "c", text: "c) Trong phương trình phân rã trên, có sự bảo toàn khối lượng nghỉ của các hạt.", isTrue: false, exp: "Sai (Phản ứng hạt nhân không có định luật bảo toàn khối lượng nghỉ, khối lượng bị hụt đi để chuyển thành động năng của hạt tỏa ra)." },
                    { id: "d", text: "d) Sự phân rã này là một dạng phản ứng hạt nhân tỏa năng lượng.", isTrue: true, exp: "Đúng (Phóng xạ tự phát luôn tỏa năng lượng)." }
                ]
            },
            {
                id: "hatnhan_7",
                context: "Câu 7 (Phản ứng phân hạch). Xét phản ứng phân hạch của hạt nhân $^{235}_{92}\\text{U}$.",
                statements: [
                    { id: "a", text: "a) Phân hạch là hiện tượng một hạt nhân rất nặng hấp thụ một neutron chậm rồi vỡ thành hai hạt nhân trung bình.", isTrue: true, exp: "Đúng (Định nghĩa phân hạch)." },
                    { id: "b", text: "b) Mỗi phản ứng phân hạch của $^{235}\\text{U}$ thường giải phóng thêm từ 2 đến 3 neutron mới.", isTrue: true, exp: "Đúng (Đặc tính phản ứng của $^{235}\\text{U}$)." },
                    { id: "c", text: "c) Các neutron giải phóng ra có thể tiếp tục kích thích các hạt nhân $^{235}\\text{U}$ khác, tạo thành phản ứng dây chuyền.", isTrue: true, exp: "Đúng (Cơ chế phản ứng dây chuyền)." },
                    { id: "d", text: "d) Để phản ứng dây chuyền xảy ra, khối lượng của khối Urani phải nhỏ hơn một giá trị nhất định gọi là khối lượng tới hạn.", isTrue: false, exp: "Sai (Khối lượng phải LỚN HƠN hoặc BẰNG khối lượng tới hạn để neutron sinh ra không bị lọt hết ra ngoài trước khi gây phân hạch tiếp theo)." }
                ]
            },
            {
                id: "hatnhan_8",
                context: "Câu 8 (Phản ứng tổng hợp hạt nhân - Nhiệt hạch). Xét phản ứng: $^{2}_{1}\\text{H} + ^{3}_{1}\\text{H} \\rightarrow ^{4}_{2}\\text{He} + ^{1}_{0}\\text{n} + 17,6\\text{ MeV}$.",
                statements: [
                    { id: "a", text: "a) Sự tổng hợp hạt nhân là quá trình hai hạt nhân nhẹ kết hợp lại với nhau thành một hạt nhân nặng hơn.", isTrue: true, exp: "Đúng (Định nghĩa tổng hợp hạt nhân/nhiệt hạch)." },
                    { id: "b", text: "b) Đây là một phản ứng thu năng lượng vì phải tốn nhiều năng lượng để ép hai hạt nhân mang điện dương lại gần nhau.", isTrue: false, exp: "Sai (Là phản ứng TỎA năng lượng ($+17,6\\text{ MeV}$), điều kiện ép chúng vào nhau chỉ là năng lượng kích hoạt ban đầu)." },
                    { id: "c", text: "c) Điều kiện bắt buộc để phản ứng tổng hợp hạt nhân xảy ra là nhiệt độ và áp suất môi trường phải cực kì cao.", isTrue: true, exp: "Đúng (Điều kiện plasma, hàng chục triệu độ)." },
                    { id: "d", text: "d) Nguồn năng lượng khổng lồ phát ra từ Mặt Trời và các vì sao chính là năng lượng của phản ứng tổng hợp hạt nhân.", isTrue: true, exp: "Đúng (Kiến thức vũ trụ học ứng dụng)." }
                ]
            },
            {
                id: "hatnhan_9",
                context: "Câu 9 (Vai trò của công nghiệp hạt nhân).",
                statements: [
                    { id: "a", text: "a) Trong lò phản ứng của nhà máy điện nguyên tử, phản ứng dây chuyền được kiểm soát chặt chẽ ở trạng thái tới hạn (hệ số nhân neutron $k=1$).", isTrue: true, exp: "Đúng ($k=1$ để công suất ổn định, không gây nổ)." },
                    { id: "b", text: "b) Lò phản ứng biến đổi trực tiếp năng lượng hạt nhân tỏa ra thành dòng điện mà không cần qua các hệ thống biến đổi cơ - nhiệt nào khác.", isTrue: false, exp: "Sai (Bẫy kĩ thuật: Năng lượng hạt nhân đun sôi nước $\\rightarrow$ hơi nước làm quay tuabin $\\rightarrow$ máy phát điện sinh ra điện. Không phải chuyển đổi trực tiếp)." },
                    { id: "c", text: "c) Trong y tế, các đồng vị phóng xạ nhân tạo được sử dụng hiệu quả để chẩn đoán hình ảnh và xạ trị tiêu diệt tế bào ung thư.", isTrue: true, exp: "Đúng (Vai trò y học hạt nhân)." },
                    { id: "d", text: "d) Việc phát triển công nghiệp điện hạt nhân giúp giảm phát thải khí nhà kính (như $\\text{CO}_2$) so với nhiên liệu hóa thạch, nhưng đi kèm với thách thức lớn về xử lý chất thải phóng xạ.", isTrue: true, exp: "Đúng (Đánh giá ưu nhược điểm toàn diện của công nghiệp hạt nhân)." }
                ]
            },
            {
                id: "hatnhan_10",
                context: "Câu 10 (Bản chất sự phóng xạ). Một mẫu vật chất chứa các hạt nhân phóng xạ.",
                statements: [
                    { id: "a", text: "a) Sự phóng xạ là một quá trình biến đổi hạt nhân tự phát và không chịu ảnh hưởng bởi các yếu tố vật lí bên ngoài như áp suất, nhiệt độ.", isTrue: true, exp: "Đúng (Đặc điểm bất biến của phóng xạ)." },
                    { id: "b", text: "b) Đối với một hạt nhân phóng xạ cụ thể, ta có thể dùng công cụ tính toán để dự đoán chính xác thời điểm nó sẽ phân rã.", isTrue: false, exp: "Sai (Phân rã là hoàn toàn ngẫu nhiên, không thể dự đoán thời điểm chính xác cho 1 hạt nhân đơn lẻ)." },
                    { id: "c", text: "c) Quá trình phân rã phóng xạ tuân theo các quy luật thống kê, tức là tính ngẫu nhiên đối với từng hạt nhưng có tính quy luật đối với một số lượng lớn hạt.", isTrue: true, exp: "Đúng (Bản chất vĩ mô - vi mô của định luật phóng xạ)." },
                    { id: "d", text: "d) Sự phóng xạ là một phản ứng hạt nhân tỏa năng lượng.", isTrue: true, exp: "Đúng (Giống câu 6d, luôn tỏa năng lượng tạo ra động năng hạt bay ra)." }
                ]
            },
            {
                id: "hatnhan_11",
                context: "Câu 11 (Tính chất các tia phóng xạ). Khảo sát 3 loại tia phóng xạ $\\alpha, \\beta^-$ và $\\gamma$.",
                statements: [
                    { id: "a", text: "a) Tia $\\alpha$ bản chất là hạt nhân Helium, mang điện tích dương nên bị lệch về phía bản âm khi đi qua điện trường đều.", isTrue: true, exp: "Đúng (Bản chất tia $\\alpha$ và lực điện)." },
                    { id: "b", text: "b) Tia $\\beta^-$ là dòng các electron chuyển động với tốc độ xấp xỉ tốc độ ánh sáng, có khả năng đâm xuyên mạnh hơn tia $\\alpha$.", isTrue: true, exp: "Đúng (Bản chất tia $\\beta$)." },
                    { id: "c", text: "c) Tia $\\gamma$ là bức xạ điện từ có bước sóng rất ngắn, mang điện tích trung hòa nên tốc độ của nó thay đổi liên tục trong chân không.", isTrue: false, exp: "Sai (Tia $\\gamma$ là sóng điện từ nên trong chân không luôn truyền với tốc độ không đổi $c = 3.10^8\\text{ m/s}$)." },
                    { id: "d", text: "d) Khi bay trong không khí, khả năng ion hóa chất khí của tia $\\gamma$ là mạnh nhất, còn của tia $\\alpha$ là yếu nhất.", isTrue: false, exp: "Sai (Khả năng ion hóa ngược với khả năng đâm xuyên: Tia $\\alpha$ ion hóa mạnh nhất, $\\gamma$ yếu nhất)." }
                ]
            },
            {
                id: "hatnhan_12",
                context: "Câu 12 (Định luật phóng xạ hàm mũ). Cho $N_0$ là số hạt nhân phóng xạ ban đầu ($t=0$). Gọi $N$ là số hạt chưa phân rã ở thời điểm $t$.",
                statements: [
                    { id: "a", text: "a) Biểu thức của định luật phân rã phóng xạ là $N = N_0 e^{-\\lambda t}$.", isTrue: true, exp: "Đúng (Biểu thức định luật)." },
                    { id: "b", text: "b) Hằng số phóng xạ $\\lambda$ có mối liên hệ với chu kì bán rã $T$ qua công thức: $\\lambda = T \\cdot \\ln 2$.", isTrue: false, exp: "Sai (Biểu thức đúng phải là $\\lambda = \\frac{\\ln 2}{T}$)." },
                    { id: "c", text: "c) Hàm số mô tả số hạt nhân $N$ chưa phân rã là một hàm số mũ giảm dần theo thời gian.", isTrue: true, exp: "Đúng (Dạng đồ thị và toán học của quy luật)." },
                    { id: "d", text: "d) Số hạt nhân đã bị phân rã (biến thành hạt khác) sau thời gian $t$ được tính bằng biểu thức $\\Delta N = N_0(1 - e^{-\\lambda t})$.", isTrue: true, exp: "Đúng ($\\Delta N = N_0 - N = N_0 - N_0 e^{-\\lambda t} = N_0(1 - e^{-\\lambda t})$)." }
                ]
            },
            {
                id: "hatnhan_13",
                context: "Câu 13 (Toán chu kì bán rã). Một mẫu chất phóng xạ nguyên chất có chu kì bán rã là $T = 5$ ngày. Khối lượng ban đầu của mẫu chất là $m_0 = 80\\text{ gam}$.",
                statements: [
                    { id: "a", text: "a) Chu kì bán rã $T$ là khoảng thời gian để một nửa số lượng hạt nhân của một lượng chất phóng xạ bị phân rã.", isTrue: true, exp: "Đúng (Định nghĩa)." },
                    { id: "b", text: "b) Sau 10 ngày, khối lượng chất phóng xạ còn lại chưa bị phân rã là $20\\text{ gam}$.", isTrue: true, exp: "Đúng ($t = 10\\text{ ngày} = 2T \\Rightarrow m = m_0/2^2 = 80/4 = 20\\text{ g}$)." },
                    { id: "c", text: "c) Sau thời gian 15 ngày, khối lượng chất phóng xạ ĐÃ phân rã là $10\\text{ gam}$.", isTrue: false, exp: "Sai (Bẫy \"Còn lại\" vs \"Đã phân rã\". $t = 15\\text{ ngày} = 3T \\Rightarrow m_{\\text{còn}} = 80/2^3 = 10\\text{ g}$. Vậy khối lượng ĐÃ phân rã là $80 - 10 = 70\\text{ g}$, không phải $10\\text{ g}$)." },
                    { id: "d", text: "d) Tỉ số giữa phần khối lượng đã phân rã và phần khối lượng còn lại sau 20 ngày là 15.", isTrue: true, exp: "Đúng ($t = 20\\text{ ngày} = 4T \\Rightarrow m_{\\text{còn}} = m_0/16$. Phần đã phân rã là $15m_0/16$. Tỉ số là 15)." }
                ]
            },
            {
                id: "hatnhan_14",
                context: "Câu 14 (Độ phóng xạ $H$). Đại lượng đặc trưng cho tính phóng xạ mạnh hay yếu của mẫu vật.",
                statements: [
                    { id: "a", text: "a) Độ phóng xạ $H$ của một lượng chất phóng xạ là số phân rã của lượng chất đó trong một đơn vị thời gian.", isTrue: true, exp: "Đúng (Định nghĩa)." },
                    { id: "b", text: "b) Đơn vị của độ phóng xạ trong hệ SI là Becquerel (Bq), với $1\\text{ Bq} = 1\\text{ phân rã/giây}$.", isTrue: true, exp: "Đúng (Đơn vị đo lường chuẩn)." },
                    { id: "c", text: "c) Mối liên hệ toán học giữa độ phóng xạ và số hạt nhân $N$ chưa phân rã ở cùng một thời điểm là $H = \\frac{N}{\\lambda}$.", isTrue: false, exp: "Sai (Biểu thức đúng là $H = \\lambda.N$)." },
                    { id: "d", text: "d) Nếu mẫu chất chứa các đồng vị có hằng số phóng xạ $\\lambda$ càng lớn thì ban đầu nó sẽ phân rã càng nhanh và độ phóng xạ càng mạnh.", isTrue: true, exp: "Đúng (Ý nghĩa của $\\lambda$: xác suất phân rã trong một đơn vị thời gian)." }
                ]
            },
            {
                id: "hatnhan_15",
                context: "Câu 15 (Đồ thị số hạt - thời gian). Đồ thị biểu diễn sự phụ thuộc của số hạt nhân mẹ ($N$) theo thời gian ($t$).",
                statements: [
                    { id: "a", text: "a) Đồ thị là một đường cong trơn đi xuống, thể hiện sự giảm dần của $N$ theo quy luật hàm bậc hai.", isTrue: false, exp: "Sai (Là đường cong mũ (hàm số mũ), không phải hàm bậc hai (parabol))." },
                    { id: "b", text: "b) Giả sử tại thời điểm $t = t_1$, tung độ của đồ thị là $N_1$. Tại thời điểm $t = t_1 + T$, tung độ của đồ thị sẽ là $N_1/2$.", isTrue: true, exp: "Đúng (Tính chất tịnh tiến chu kì bán rã)." },
                    { id: "c", text: "c) Độ dốc (tiếp tuyến) của đường cong này tại bất kì thời điểm nào có giá trị âm, và độ lớn của nó chính là độ phóng xạ $H$ tại thời điểm đó.", isTrue: true, exp: "Đúng (Ý nghĩa đạo hàm: $N'(t) = -\\lambda N_0 e^{-\\lambda t} = -H(t)$)." },
                    { id: "d", text: "d) Đồ thị này sẽ cắt trục hoành ($N=0$) tại một thời điểm $t$ hữu hạn nào đó khi chất phóng xạ cạn kiệt hoàn toàn.", isTrue: false, exp: "Sai (Toán học hàm $e^{-\\lambda t}$ chỉ tiến tới 0 khi $t \\rightarrow \\infty$ (đường tiệm cận), không bao giờ cắt trục hoành về mặt lý thuyết)." }
                ]
            },
            {
                id: "hatnhan_16",
                context: "Câu 16 (Ứng dụng Đồng vị phóng xạ - Tính tuổi Cacbon-14). Phương pháp định tuổi bằng $^{14}\\text{C}$ dùng trong khảo cổ học dựa trên chu kì bán rã 5730 năm.",
                statements: [
                    { id: "a", text: "a) Phương pháp định tuổi bằng Cacbon-14 chỉ áp dụng được cho các di chỉ từng có sự sống (xương thú, gỗ cổ...), không dùng được cho các bức tượng đá thuần túy.", isTrue: true, exp: "Đúng (Điều kiện ứng dụng Cacbon-14 hữu cơ)." },
                    { id: "b", text: "b) Tỉ lệ $^{14}\\text{C}/^{12}\\text{C}$ trong cơ thể sinh vật khi còn sống là một hằng số, bằng với tỉ lệ đó trong khí quyển.", isTrue: true, exp: "Đúng (Nguyên lí cơ bản của phương pháp)." },
                    { id: "c", text: "c) Khi sinh vật chết đi, không còn hô hấp/trao đổi chất, hàm lượng $^{14}\\text{C}$ trong cơ thể sẽ ngừng phân rã và giữ nguyên vĩnh viễn.", isTrue: false, exp: "Sai (Ngược lại, khi chết đi $^{14}\\text{C}$ KHÔNG ĐƯỢC BÙ ĐẮP nữa và bắt đầu GIẢM DẦN do quá trình phân rã phóng xạ)." },
                    { id: "d", text: "d) Nếu một mẩu xương cổ có độ phóng xạ do $^{14}\\text{C}$ chỉ bằng $12,5\\%$ so với một mẩu xương tươi có cùng khối lượng, thì mẩu xương đó có tuổi khoảng 17190 năm.", isTrue: true, exp: "Đúng ($12,5\\% = 1/8 = 1/2^3 \\Rightarrow t = 3T = 3 \\times 5730 = 17190\\text{ năm}$)." }
                ]
            },
            {
                id: "hatnhan_17",
                context: "Câu 17 (Nguyên tắc an toàn và Biển báo phóng xạ). Trong làm việc với chất phóng xạ:",
                statements: [
                    { id: "a", text: "a) Biển báo nguy hiểm bức xạ/phóng xạ quốc tế thường có hình tam giác nền vàng (hoặc biển vuông) với biểu tượng cánh quạt 3 lá màu đen/đỏ.", isTrue: true, exp: "Đúng (Nhận biết biển báo theo yêu cầu cần đạt)." },
                    { id: "b", text: "b) Ba nguyên tắc vàng trong an toàn phóng xạ là: Tối thiểu hóa thời gian tiếp xúc, tối đa hóa khoảng cách và sử dụng vật liệu che chắn phù hợp.", isTrue: true, exp: "Đúng (Nguyên tắc cơ bản an toàn bức xạ)." },
                    { id: "c", text: "c) Việc dùng áo choàng vải hoặc kính y tế bằng nhựa là đủ để cản được tác động đâm xuyên của bức xạ $\\gamma$.", isTrue: false, exp: "Sai (Tia $\\gamma$ đâm xuyên cực mạnh, phải dùng Chì (Pb) dày hoặc bê tông cốt thép đặc biệt để che chắn, vải/nhựa không có tác dụng)." },
                    { id: "d", text: "d) Sự chiếu xạ từ bên ngoài (như chụp X-quang) sẽ làm cho cơ thể người bệnh trở thành một nguồn phát phóng xạ vĩnh viễn, có thể lây bức xạ cho người khác.", isTrue: false, exp: "Sai (Bẫy thực tế: Chiếu xạ ngoài tia X/gamma đi qua cơ thể rồi biến mất, không làm cơ thể bị \"nhiễm phóng xạ\" và phát xạ lại. Khác với \"nhiễm bẩn phóng xạ\" do nuốt phải đồng vị)." }
                ]
            },
            {
                id: "hatnhan_18",
                context: "Câu 18 (Vận dụng biểu thức $H, x$). Một mẫu Đồng vị phóng xạ Iốt-131 ($^{131}\\text{I}$) có hằng số phóng xạ $\\lambda = 10^{-6}\\text{ s}^{-1}$. Tại $t=0$, số hạt nhân $^{131}\\text{I}$ là $N_0 = 10^{14}$ hạt.",
                statements: [
                    { id: "a", text: "a) Độ phóng xạ ban đầu của mẫu là $H_0 = 10^8\\text{ Bq}$.", isTrue: true, exp: "Đúng ($H_0 = \\lambda N_0 = 10^{-6} \\times 10^{14} = 10^8\\text{ Bq}$)." },
                    { id: "b", text: "b) Công thức tính tốc độ đếm số hạt phân rã (hoặc độ phóng xạ) tại thời điểm $t$ là $H = H_0 e^{-\\lambda t}$.", isTrue: true, exp: "Đúng (Định luật biến thiên của độ phóng xạ, tốc độ đếm tỉ lệ với $H$)." },
                    { id: "c", text: "c) Để tính chính xác số phân rã trong $1\\text{ giây}$ ở một thời điểm xa trong tương lai, ta bắt buộc phải đổi $\\lambda$ sang đơn vị $\\text{ngày}^{-1}$ hoặc $\\text{năm}^{-1}$.", isTrue: false, exp: "Sai (Tính theo đơn vị chuẩn hệ SI (Bq - phân rã/s) thì hằng số $\\lambda$ BẮT BUỘC phải dùng đơn vị chuẩn là $\\text{s}^{-1}$, không được đổi sang ngày hay năm)." },
                    { id: "d", text: "d) Số hạt nhân $^{131}\\text{I}$ còn lại sau thời gian $t = 10^6\\text{ s}$ là $N \\approx 3,68.10^{13}$ hạt (lấy $e^{-1} \\approx 0,368$).", isTrue: true, exp: "Đúng ($N = N_0 e^{-\\lambda t} = 10^{14} e^{-10^{-6} \\times 10^6} = 10^{14} e^{-1} \\approx 3,68.10^{13}$)." }
                ]
            },
            {
                id: "hatnhan_19",
                context: "Câu 19 (THỰC HÀNH - Khảo sát định luật phân rã). Học sinh dùng máy đếm xung Geiger-Muller để đo tốc độ đếm (tỉ lệ thuận với độ phóng xạ $H$) của một mẫu chất phóng xạ $X$ trong $5\\text{ giờ}$ liên tục.",
                statements: [
                    { id: "a", text: "a) Máy đếm Geiger-Muller không thể đo trực tiếp số lượng hạt nhân mẹ đang tồn tại trong mẫu chất mà chỉ đo được số lượng tia phóng xạ bắn vào ống đếm.", isTrue: true, exp: "Đúng (Cơ chế hoạt động của cảm biến bức xạ, đo $\\Delta N$ trong 1 khoảng thời gian, không đo được tổng $N$)." },
                    { id: "b", text: "b) Nếu vẽ đồ thị của logarit tự nhiên tốc độ đếm ($\\ln H$) theo thời gian $t$, học sinh sẽ thu được một đường cong hyperbol.", isTrue: false, exp: "Sai ($H = H_0 e^{-\\lambda t} \\Rightarrow \\ln H = -\\lambda t + \\ln H_0$. Đồ thị này phải là một ĐƯỜNG THẲNG có hệ số góc âm, không phải hyperbol)." },
                    { id: "c", text: "c) Độ lớn của hệ số góc của đường thẳng $\\ln H$ theo $t$ chính là giá trị của hằng số phóng xạ $\\lambda$.", isTrue: true, exp: "Đúng (Từ phương trình đường thẳng $y = ax + b \\Rightarrow a = -\\lambda \\Rightarrow$ độ lớn hệ số góc là $\\lambda$)." },
                    { id: "d", text: "d) Khi lấy mẫu không có chất phóng xạ đặt vào máy, máy đếm vẫn nhảy một vài số nhất định. Đây là do phông bức xạ môi trường và ta cần trừ đi số đếm phông này trong phép đo thực tế.", isTrue: true, exp: "Đúng (Quy trình chuẩn hóa số liệu bức xạ môi trường)." }
                ]
            },
            {
                id: "hatnhan_20",
                context: "Câu 20 (THỰC HÀNH - An toàn phóng xạ phòng thí nghiệm). Tại phòng thí nghiệm trường học, giáo viên hướng dẫn học sinh thao tác với các nguồn phóng xạ chuẩn $\\alpha, \\beta, \\gamma$ hoạt độ thấp.",
                statements: [
                    { id: "a", text: "a) Học sinh quan sát thấy một tờ giấy trắng thông thường có thể cản được phần lớn số đếm từ nguồn phát tia $\\alpha$.", isTrue: true, exp: "Đúng (Khả năng đâm xuyên yếu của tia $\\alpha$)." },
                    { id: "b", text: "b) Kẹp gắp (panh) cán dài được sử dụng để lấy các viên phóng xạ ra khỏi hộp bảo vệ thay vì cầm trực tiếp bằng tay, nhằm mục đích tăng khoảng cách an toàn (theo nguyên lý bình phương nghịch đảo).", isTrue: true, exp: "Đúng (Khoảng cách càng xa, cường độ bức xạ giảm tỉ lệ nghịch với bình phương khoảng cách)." },
                    { id: "c", text: "c) Khi thí nghiệm kết thúc, chỉ cần để các viên phóng xạ vào tủ kính trưng bày của lớp học để các bạn khác tiện quan sát.", isTrue: false, exp: "Sai (Bẫy an toàn thực tiễn: Các nguồn phóng xạ BẮT BUỘC phải được cất vào hộp chì chuyên dụng và khóa cẩn thận, không được để phơi sáng ở tủ kính thường)." },
                    { id: "d", text: "d) Học sinh muốn che chắn hoàn toàn tia bức xạ $\\gamma$ phát ra từ nguồn thì chỉ cần dùng một tấm nhôm dày khoảng $5\\text{ mm}$ là đủ.", isTrue: false, exp: "Sai (Tấm nhôm $5\\text{ mm}$ cản được tia $\\beta$ nhưng gần như vô dụng với tia $\\gamma$. Để cản tia $\\gamma$ cần các tấm chì (Pb) dày hàng cm)." }
                ]
            },
			{
            id: 'q21',
            context: 'Xét cấu tạo và năng lượng liên kết của hai hạt nhân: Sắt ($_{26}^{56}\\text{Fe}$) và Uranium ($_{92}^{235}\\text{U}$). Sắt được biết đến là một trong những hạt nhân bền vững nhất trong tự nhiên.',
            statements: [
                { id: 'a', text: 'Hạt nhân Sắt ($_{26}^{56}\\text{Fe}$) được cấu tạo từ 26 proton và 56 neutron.', isTrue: false, exp: 'SAI. Số khối A = 56, số proton Z = 26. Số neutron N = A - Z = 56 - 26 = 30 neutron.' },
                { id: 'b', text: 'Năng lượng liên kết của một hạt nhân là năng lượng tỏa ra khi các nucleon riêng rẽ (tự do) liên kết lại với nhau tạo thành hạt nhân đó.', isTrue: true, exp: 'ĐÚNG. Theo định nghĩa, năng lượng liên kết là năng lượng cần thiết để tách hạt nhân thành các nucleon riêng rẽ, hoặc ngược lại, là năng lượng tỏa ra khi ghép chúng lại.' },
                { id: 'c', text: 'Hạt nhân Uranium ($_{92}^{235}\\text{U}$) có tổng năng lượng liên kết lớn hơn hạt nhân Sắt ($_{26}^{56}\\text{Fe}$) nên Uranium bền vững hơn Sắt.', isTrue: false, exp: 'SAI. Dù tổng năng lượng liên kết của U-235 lớn hơn, nhưng sự bền vững của hạt nhân được quyết định bởi "Năng lượng liên kết riêng" (Năng lượng liên kết chia cho số khối A). Fe-56 có năng lượng liên kết riêng lớn nhất (khoảng 8,8 MeV/nucleon).' },
                { id: 'd', text: 'Khối lượng của một hạt nhân luôn nhỏ hơn tổng khối lượng của các nucleon tạo thành nó khi ở trạng thái tự do.', isTrue: true, exp: 'ĐÚNG. Đây là hiện tượng độ hụt khối ($\\Delta m > 0$). Phần khối lượng hao hụt này đã chuyển hóa thành năng lượng liên kết theo hệ thức Einstein $E = \\Delta m \\cdot c^2$.' }
            ]
        },
        {
            id: 'q22',
            context: 'Một mẫu chất phóng xạ Radon ($^{222}\\text{Rn}$) nguyên chất có chu kì bán rã là $T = 3,8$ ngày. Ban đầu ($t = 0$) mẫu có khối lượng $m_0$.',
            statements: [
                { id: 'a', text: 'Hằng số phóng xạ của Radon-222 là $\\lambda = \\frac{\\ln 2}{3,8} \\text{ ngày}^{-1}$.', isTrue: true, exp: 'ĐÚNG. Công thức liên hệ giữa hằng số phóng xạ và chu kì bán rã là $\\lambda = \\frac{\\ln 2}{T}$.' },
                { id: 'b', text: 'Sau khoảng thời gian 7,6 ngày, khối lượng Radon-222 còn lại trong mẫu là $0,25 m_0$.', isTrue: true, exp: 'ĐÚNG. 7,6 ngày tương đương 2 chu kì bán rã ($2T$). Khối lượng còn lại $m = m_0 \\cdot 2^{-2} = 0,25 m_0$.' },
                { id: 'c', text: 'Khối lượng của các hạt nhân con được tạo thành tăng tỉ lệ thuận bậc nhất (tuyến tính) theo thời gian.', isTrue: false, exp: 'SAI. Khối lượng hạt nhân con tạo thành tuân theo hàm mũ: $m_{\\text{con}} = m_0 \\cdot (1 - e^{-\\lambda t})$, đây là đường cong tăng dần và tiến về tiệm cận $m_0$, không phải đường thẳng.' },
                { id: 'd', text: 'Nếu nung nóng mẫu Radon này lên nhiệt độ rất cao, chu kì bán rã của nó sẽ giảm xuống khiến nó phân rã nhanh hơn.', isTrue: false, exp: 'SAI. Phóng xạ là quá trình biến đổi bên trong hạt nhân, hoàn toàn không bị ảnh hưởng bởi các yếu tố môi trường bên ngoài như nhiệt độ, áp suất hay trạng thái hóa học.' }
            ]
        },
        {
            id: 'q23',
            context: 'Đồng vị Polonium ($_{84}^{210}\\text{Po}$) phóng xạ tia $\\alpha$ và biến đổi thành hạt nhân Chì ($_{82}^{206}\\text{Pb}$) bền vững. Phương trình phản ứng: $_{84}^{210}\\text{Po} \\rightarrow \\alpha + _{82}^{206}\\text{Pb}$.',
            statements: [
                { id: 'a', text: 'Tia $\\alpha$ phát ra trong phản ứng này thực chất là dòng các hạt nhân Helium ($_{2}^{4}\\text{He}$).', isTrue: true, exp: 'ĐÚNG. Hạt $\\alpha$ gồm 2 proton và 2 neutron, chính là hạt nhân nguyên tử Helium-4.' },
                { id: 'b', text: 'Hạt nhân con Chì ($_{82}^{206}\\text{Pb}$) có ít hơn hạt nhân mẹ Polonium 2 proton và 4 neutron.', isTrue: false, exp: 'SAI. Số proton giảm 2 ($84 - 82 = 2$). Số khối giảm 4, nghĩa là tổng số hạt giảm 4. Vậy số neutron chỉ giảm 2 ($4 - 2 = 2$).' },
                { id: 'c', text: 'Tổng khối lượng nghỉ của hạt $\\alpha$ và hạt nhân Chì tạo thành nhỏ hơn khối lượng nghỉ của hạt nhân Polonium ban đầu.', isTrue: true, exp: 'ĐÚNG. Phân rã phóng xạ là phản ứng tỏa năng lượng. Để tỏa năng lượng, khối lượng nghỉ lúc sau phải nhỏ hơn khối lượng nghỉ lúc trước (độ hụt khối tổng cộng).' },
                { id: 'd', text: 'Năng lượng tỏa ra từ phản ứng này chủ yếu chuyển hóa thành bức xạ điện từ (tia gamma) chứ không làm các hạt chuyển động.', isTrue: false, exp: 'SAI. Năng lượng tỏa ra chủ yếu biến thành động năng của hạt $\\alpha$ và hạt nhân giật lùi (Chì). Tia gamma chỉ xuất hiện nếu hạt nhân con ở trạng thái kích thích.' }
            ]
        },
        {
            id: 'q24',
            context: 'Sự phân rã beta trừ ($\\beta^-$) của Đồng vị Carbon-14 ($_{6}^{14}\\text{C}$) tạo ra đồng vị Nitrogen ($_{7}^{14}\\text{N}$). Carbon-14 là đồng vị phóng xạ được dùng để định tuổi các cổ vật.',
            statements: [
                { id: 'a', text: 'Tia phóng xạ $\\beta^-$ mang điện tích âm, thực chất là một dòng các electron bay ra với tốc độ rất lớn.', isTrue: true, exp: 'ĐÚNG. Hạt $\\beta^-$ ký hiệu là $_{-1}^{0}\\text{e}$, chính là các electron bắn ra từ hạt nhân.' },
                { id: 'b', text: 'Bản chất của phóng xạ $\\beta^-$ là một neutron trong hạt nhân mẹ đã biến đổi thành một proton, một electron và một phản neutrino.', isTrue: true, exp: 'ĐÚNG. Phương trình vi mô: $n \\rightarrow p + e^- + \\bar{\\nu}_e$. Điều này giải thích vì sao số proton tăng 1 mà số khối không đổi.' },
                { id: 'c', text: 'Sau khi phóng xạ $\\beta^-$, số khối của hạt nhân con nhỏ hơn số khối của hạt nhân mẹ.', isTrue: false, exp: 'SAI. Carbon-14 và Nitrogen-14 đều có số khối A = 14. Số khối được bảo toàn trong phân rã beta.' },
                { id: 'd', text: 'Khả năng đâm xuyên của tia $\\beta^-$ yếu hơn khả năng đâm xuyên của tia $\\alpha$ trong cùng một môi trường vật chất.', isTrue: false, exp: 'SAI. Tia $\\beta$ (electron) nhẹ và di chuyển cực nhanh, khả năng đâm xuyên của nó mạnh gấp hàng trăm lần tia $\\alpha$ (hạt nặng và cồng kềnh).' }
            ]
        },
        {
            id: 'q25',
            context: 'Trong lò phản ứng hạt nhân, quá trình phân hạch của Uranium-235 diễn ra khi nó hấp thụ một neutron chậm (neutron nhiệt). Một trong các phản ứng tiêu biểu: $_{0}^{1}\\text{n} + _{92}^{235}\\text{U} \\rightarrow _{56}^{144}\\text{Ba} + _{36}^{89}\\text{Kr} + 3_{0}^{1}\\text{n} + 200\\text{ MeV}$.',
            statements: [
                { id: 'a', text: 'Phản ứng phân hạch trên là một quá trình phóng xạ tự nhiên, tự phát xảy ra mà không cần tác động bên ngoài.', isTrue: false, exp: 'SAI. Phân hạch của U-235 là phản ứng hạt nhân kích thích, cần phải có chùm neutron bắn phá (hấp thụ neutron) mới xảy ra.' },
                { id: 'b', text: 'Neutron nhiệt (neutron chuyển động chậm) có xác suất kích thích U-235 phân hạch cao hơn so với neutron nhanh.', isTrue: true, exp: 'ĐÚNG. Neutron bay quá nhanh sẽ dễ dàng xuyên qua hạt nhân mà không bị bắt lại. Để tăng hiệu suất phân hạch, lò phản ứng phải dùng chất làm chậm.' },
                { id: 'c', text: 'Việc sinh ra 3 neutron mới sau phản ứng là điều kiện kiên quyết để có thể duy trì phản ứng phân hạch dây chuyền.', isTrue: true, exp: 'ĐÚNG. Các neutron thứ cấp này sẽ tiếp tục bắn phá các hạt U-235 khác, duy trì phản ứng tự phát tạo ra năng lượng liên tục.' },
                { id: 'd', text: 'Hệ số nhân neutron (k) trong lò phản ứng hạt nhân thương mại luôn được duy trì ở mức k > 1 để phát điện ổn định.', isTrue: false, exp: 'SAI. Để lò hoạt động ổn định và an toàn, hệ số nhân neutron phải được duy trì ở trạng thái tới hạn k = 1. Nếu k > 1, phản ứng bùng phát không kiểm soát gây nổ.' }
            ]
        },
        {
            id: 'q26',
            context: 'Phản ứng nhiệt hạch (phản ứng tổng hợp hạt nhân) là nguồn gốc năng lượng của Mặt Trời và các vì sao. Phản ứng hứa hẹn nhất trên Trái Đất là sự kết hợp giữa Deuterium ($_{1}^{2}\\text{H}$) và Tritium ($_{1}^{3}\\text{H}$).',
            statements: [
                { id: 'a', text: 'Phản ứng nhiệt hạch cần nhiệt độ cực kì cao (hàng chục triệu độ) để thắng được lực đẩy Coulomb giữa các hạt mang điện tích dương.', isTrue: true, exp: 'ĐÚNG. Ở nhiệt độ cao, các hạt nhân có động năng cực lớn mới có thể tiến lại đủ gần nhau để lực hạt nhân (lực hút mạnh) phát huy tác dụng.' },
                { id: 'b', text: 'Năng lượng tỏa ra tính trên một hạt nucleon (năng lượng riêng) của phản ứng nhiệt hạch nhỏ hơn nhiều so với phản ứng phân hạch.', isTrue: false, exp: 'SAI. Dù một phản ứng phân hạch tỏa ~200 MeV (lớn hơn 17,6 MeV của nhiệt hạch), nhưng xét trên mỗi nucleon (chia cho A), nhiệt hạch tỏa năng lượng lớn hơn phân hạch nhiều lần.' },
                { id: 'c', text: 'Sản phẩm của phản ứng giữa Deuterium và Tritium là hạt nhân Helium-4 và một hạt neutron.', isTrue: true, exp: 'ĐÚNG. Phương trình: $_{1}^{2}\\text{H} + _{1}^{3}\\text{H} \\rightarrow _{2}^{4}\\text{He} + _{0}^{1}\\text{n}$.' },
                { id: 'd', text: 'Nhà máy điện nhiệt hạch tạo ra lượng rác thải phóng xạ chu kì sống dài tương đương với lò phản ứng phân hạch hiện nay.', isTrue: false, exp: 'SAI. Sản phẩm chính là Helium (khí trơ không phóng xạ). Nhiệt hạch được xem là nguồn năng lượng "sạch" vì ít rác thải phóng xạ và vật liệu dồi dào từ nước biển.' }
            ]
        },
        {
            id: 'q27',
            context: 'Hệ thức năng lượng - khối lượng của Einstein ($E = mc^2$) khẳng định sự tương đương giữa khối lượng và năng lượng. Khảo sát hiện tượng hủy cặp: Một electron và một positron (phản electron) va chạm và hủy nhau để sinh ra 2 photon tia gamma ($\\gamma$). Biết khối lượng nghỉ của electron/positron là $m_e = 9,1 \\cdot 10^{-31} \\text{ kg}$.',
            statements: [
                { id: 'a', text: 'Tổng điện tích của hệ trước và sau khi xảy ra hiện tượng hủy cặp bằng 0.', isTrue: true, exp: 'ĐÚNG. Electron ($q = -e$) và positron ($q = +e$) có tổng điện tích bằng 0. Photon tia gamma không mang điện.' },
                { id: 'b', text: 'Tổng khối lượng nghỉ của hệ được bảo toàn trong quá trình phản ứng này.', isTrue: false, exp: 'SAI. Toàn bộ khối lượng nghỉ của 2 hạt ($2m_e$) đã biến mất hoàn toàn để chuyển hóa thành năng lượng của các photon bức xạ.' },
                { id: 'c', text: 'Giả sử động năng ban đầu của các hạt không đáng kể, tổng năng lượng của hai photon tia gamma sinh ra bằng $2m_e c^2$.', isTrue: true, exp: 'ĐÚNG. Áp dụng định luật bảo toàn năng lượng toàn phần, năng lượng nghỉ ban đầu hoàn toàn chuyển thành năng lượng bức xạ của các photon.' },
                { id: 'd', text: 'Photon tia gamma bức xạ ra là các hạt mang điện chuyển động với vận tốc ánh sáng c.', isTrue: false, exp: 'SAI. Photon tia gamma là lượng tử năng lượng bức xạ điện từ, chúng di chuyển với tốc độ c nhưng KHÔNG mang điện tích và không có khối lượng nghỉ.' }
            ]
        },
        {
            id: 'q28',
            context: 'Đồng vị Carbon-14 được sử dụng để xác định tuổi của các di tích khảo cổ có nguồn gốc sinh học. Chu kì bán rã của C-14 là $T = 5730$ năm. Khi đo đạc một mẫu gỗ cổ, người ta thấy tỉ số giữa số nguyên tử C-14 và C-12 chỉ bằng $12,5\\%$ so với tỉ số đó trong một cây gỗ cùng loại đang sống.',
            statements: [
                { id: 'a', text: 'Trong cơ thể sinh vật đang sống, tỉ lệ C-14 và C-12 liên tục giảm đi do C-14 bị phân rã theo thời gian.', isTrue: false, exp: 'SAI. Khi sinh vật còn sống, quá trình hô hấp và ăn uống giúp hấp thụ C-14 từ môi trường, bù đắp lượng phân rã nên tỉ lệ này giữ ở mức cân bằng không đổi.' },
                { id: 'b', text: 'Con số $12,5\\%$ chứng tỏ hàm lượng C-14 trong mẫu gỗ cổ đã giảm đi 8 lần so với lúc sinh vật bắt đầu chết.', isTrue: true, exp: 'ĐÚNG. $12,5\\% = \\frac{12,5}{100} = \\frac{1}{8}$. Mức C-14 còn lại bằng 1/8 so với ban đầu.' },
                { id: 'c', text: 'Thời gian mẫu gỗ này tồn tại kể từ khi cây chết (tuổi của mẫu vật) đã trải qua đúng 4 chu kì bán rã.', isTrue: false, exp: 'SAI. Khối lượng còn lại $m = m_0 \\cdot 2^{-n}$. Ta có $\\frac{1}{8} = 2^{-3} \\Rightarrow n = 3$. Mẫu vật đã trải qua 3 chu kì bán rã, không phải 4.' },
                { id: 'd', text: 'Tuổi của mẫu gỗ cổ này được xác định chính xác là 17.190 năm.', isTrue: true, exp: 'ĐÚNG. Thời gian = số chu kì $\\times$ chu kì bán rã = $3 \\times 5730 = 17190$ năm.' }
            ]
        },
        {
            id: 'q29',
            context: 'Khảo sát định luật bảo toàn trong phản ứng hạt nhân. Người ta dùng hạt $\\alpha$ bắn phá hạt nhân Nhôm ($_{13}^{27}\\text{Al}$) đứng yên để tạo ra hạt nhân Phốtpho ($_{15}^{30}\\text{P}$) và một hạt $X$. Phương trình: $\\alpha + _{13}^{27}\\text{Al} \\rightarrow _{15}^{30}\\text{P} + X$.',
            statements: [
                { id: 'a', text: 'Dựa vào định luật bảo toàn, hạt X có số khối A = 1 và điện tích Z = 0, suy ra X là hạt neutron.', isTrue: true, exp: 'ĐÚNG. Bảo toàn điện tích: $2 + 13 = 15 + Z \\Rightarrow Z = 0$. Bảo toàn số khối: $4 + 27 = 30 + A \\Rightarrow A = 1$. Hạt $X (0, 1)$ là neutron.' },
                { id: 'b', text: 'Trong bất kì phản ứng hạt nhân nào, định luật bảo toàn khối lượng cổ điển (tổng khối lượng trước = tổng khối lượng sau) luôn được nghiệm đúng.', isTrue: false, exp: 'SAI. Phản ứng hạt nhân có sự chuyển hóa giữa khối lượng và năng lượng (độ hụt khối), nên tổng khối lượng nghỉ không được bảo toàn.' },
                { id: 'c', text: 'Phản ứng này đảm bảo sự bảo toàn tổng số hạt nucleon và bảo toàn tổng điện tích của hệ.', isTrue: true, exp: 'ĐÚNG. Đây là hai trong bốn định luật bảo toàn cơ bản của phản ứng hạt nhân (bảo toàn số khối A và bảo toàn điện tích Z).' },
                { id: 'd', text: 'Do hạt $\\alpha$ mang điện dương nên nó có thể dễ dàng đi vào hạt nhân Al mà không gặp bất cứ lực cản nào.', isTrue: false, exp: 'SAI. Hạt $\\alpha$ (+2e) và hạt nhân Al (+13e) cùng mang điện dương nên đẩy nhau rất mạnh. Hạt $\\alpha$ phải có động năng rất lớn để vượt qua rào thế Coulomb.' }
            ]
        },
        {
            id: 'q30',
            context: 'Ứng dụng đồng vị phóng xạ trong y học: Iodine-131 ($T = 8$ ngày) được sử dụng để chẩn đoán và điều trị bệnh cường giáp và ung thư tuyến giáp. Hạt nhân này phát ra cả bức xạ $\\beta^-$ và bức xạ $\\gamma$.',
            statements: [
                { id: 'a', text: 'I-131 có chức năng sinh học giống hệt Iodine bền tự nhiên nên cơ thể hấp thụ và tập trung nó tại tuyến giáp.', isTrue: true, exp: 'ĐÚNG. Các đồng vị của cùng một nguyên tố có tính chất hóa học và sinh học giống hệt nhau, cơ thể không thể phân biệt được chúng.' },
                { id: 'b', text: 'Tia $\\gamma$ phát ra có sức đâm xuyên rất mạnh, có thể đi xuyên qua cơ thể bệnh nhân ra ngoài để các thiết bị y tế ghi nhận hình ảnh.', isTrue: true, exp: 'ĐÚNG. Bức xạ gamma xuyên thấu tốt được dùng để chụp xạ hình (imaging), giúp bác sĩ định vị chính xác kích thước khối u.' },
                { id: 'c', text: 'Vì chu kì bán rã là 8 ngày, nên sau đúng 1 tháng (32 ngày), toàn bộ lượng I-131 trong cơ thể bệnh nhân sẽ biến mất hoàn toàn (về 0).', isTrue: false, exp: 'SAI. Sau 32 ngày (4 chu kì bán rã), độ phóng xạ giảm xuống còn $\\frac{1}{2^4} = \\frac{1}{16}$ so với ban đầu. Nó tiệm cận 0 chứ không bao giờ biến mất hoàn toàn trong thời gian hữu hạn.' },
                { id: 'd', text: 'Các hạt $\\beta^-$ phát ra di chuyển được quãng đường rất ngắn trong mô (vài mm) và phá hủy các tế bào bệnh cục bộ mà không làm tổn thương các cơ quan xa.', isTrue: true, exp: 'ĐÚNG. Đây là cơ sở của xạ trị đích. Tia beta truyền toàn bộ năng lượng ion hóa mạnh mẽ trong phạm vi hẹp, tiêu diệt mô tuyến giáp bị bệnh mà không ảnh hưởng diện rộng.' }
            ]
        }
        ]
    }
};