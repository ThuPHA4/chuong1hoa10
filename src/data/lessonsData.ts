import { Lesson } from '../types';

export const lessonsData: Lesson[] = [
  {
    id: 1,
    slug: 'lien-ket-hoa-hoc',
    lessonNumber: 'Bài 1',
    periods: 'Thời lượng: 03 tiết (Tiết 21 - 23)',
    title: 'Liên Kết Hóa Học & Cấu Trúc Phân Tử',
    subtitle: 'Công thức Lewis, Mô hình đẩy các cặp electron hóa trị (VSEPR) và Thuyết lai hóa orbital nguyên tử (AO)',
    iconName: 'Atom',
    color: 'indigo',
    objectives: [
      'Viết được công thức Lewis của một chất hay ion, xác định cặp electron chung và riêng.',
      'Hiểu và vận dụng mô hình VSEPR để dự đoán chính xác dạng hình học phân tử/ion (đường thẳng, tam giác phẳng, tứ diện, gấp khúc, tháp tam giác).',
      'Trình bày khái niệm sự lai hóa AO (sp, sp², sp³) và vận dụng giải thích sự hình thành liên kết trong phân tử.'
    ],
    explore: {
      title: 'Vì sao CO₂ thẳng hàng còn H₂O lại gấp khúc?',
      scenario: 'Trong thực tế, cả phân tử CO₂ và H₂O đều có công thức dạng 3 nguyên tử (AX₂). Tuy nhiên, phân tử CO₂ có dạng đường thẳng 180°, trong khi phân tử nước H₂O lại có dạng góc/gấp khúc 104,5°! Điều gì đã "uốn cong" phân tử nước?',
      description: 'Nguyên nhân là do nguyên tử Oxygen trung tâm trong H₂O còn lại 2 cặp electron hóa trị chưa liên kết (cặp electron tự do E). Các cặp electron này đẩy nhau và đẩy các liên kết O-H khiến phân tử bị gập lại thành hình chữ V!',
      interactiveType: 'vsepr'
    },
    coreKnowledge: [
      {
        heading: '1. Quy trình 4 bước chuẩn viết công thức Lewis',
        summaryPoints: [
          'Bước 1: Tính tổng số electron hóa trị trong phân tử hoặc ion (cộng thêm e nếu là anion, trừ e nếu là cation).',
          'Bước 2: Xác định nguyên tử trung tâm (thường là nguyên tử có độ âm điện nhỏ hơn, trừ H) và vẽ sơ đồ khung liên kết đơn.',
          'Bước 3: Tính số electron hóa trị còn lại. Hoàn thiện quy tắc octet (8 e) cho các nguyên tử xung quanh có độ âm điện lớn.',
          'Bước 4: Kiểm tra nguyên tử trung tâm đã đủ octet chưa. Nếu chưa, chuyển cặp electron chưa liên kết của nguyên tử xung quanh thành liên kết đôi/ba với nguyên tử trung tâm.'
        ],
        steps: [
          {
            stepNumber: 1,
            stepTitle: 'Ví dụ với CO₂',
            description: 'Tổng e hóa trị: C(4) + 2×O(6) = 16 e. Khung: O — C — O (dùng 4 e, còn 12 e). Phân bố 6 e cho mỗi O đạt octet: :Ö: — C — :Ö:. C mới có 4 e -> chuyển mỗi bên 1 cặp e từ O thành liên kết đôi: O = C = O (thỏa octet cho cả 3 nguyên tử).'
          },
          {
            stepNumber: 2,
            stepTitle: 'Ví dụ với PCl₃',
            description: 'Tổng e hóa trị: P(5) + 3×Cl(7) = 26 e. Khung: 3 liên kết P—Cl dùng 6 e, còn 20 e. Mỗi Cl nhận 6 e (tổng 18 e). Còn dư 2 e điền vào nguyên tử trung tâm P -> P có 1 cặp e tự do và 3 cặp e liên kết (dạng AX₃E₁).'
          }
        ]
      },
      {
        heading: '2. Mô hình VSEPR & Dạng hình học phân tử',
        summaryPoints: [
          'Mô hình VSEPR (Valence Shell Electron Pair Repulsion): Các cặp electron hóa trị xung quanh nguyên tử trung tâm phân bố trong không gian sao cho lực đẩy giữa chúng là nhỏ nhất.',
          'Công thức VSEPR tổng quát: AXₙEₘ (A: nguyên tử trung tâm, X: nguyên tử xung quanh, n: số liên kết, E: cặp e tự do của A, m: số cặp e tự do).'
        ],
        tables: [
          {
            title: 'Bảng quy chuẩn hình học phân tử theo mô hình VSEPR',
            headers: ['Dạng VSEPR', 'Dạng hình học', 'Góc liên kết', 'Ví dụ tiêu biểu'],
            rows: [
              ['AX₂', 'Đường thẳng (Linear)', '180°', 'BeCl₂, BeH₂, CO₂, CS₂'],
              ['AX₃', 'Tam giác phẳng (Trigonal planar)', '120°', 'BF₃, SO₃'],
              ['AX₄', 'Tứ diện đều (Tetrahedral)', '109,5°', 'CH₄, CCl₄, CF₄, NH₄⁺'],
              ['AX₂E₁', 'Hình chữ V / Gấp khúc (Bent)', '< 120° (~119°)', 'SO₂'],
              ['AX₃E₁', 'Chóp tam giác / Tháp tam giác', '< 109,5° (107°)', 'NH₃, PCl₃, PH₃, NF₃, NCl₃'],
              ['AX₂E₂', 'Hình chữ V / Gấp khúc (Bent)', '< 109,5° (104,5°)', 'H₂O, H₂S, SCl₂, OF₂']
            ]
          }
        ]
      },
      {
        heading: '3. Thuyết lai hóa Orbital nguyên tử (AO)',
        summaryPoints: [
          'Khái niệm: Lai hóa AO là sự tổ hợp các orbital có mức năng lượng gần bằng nhau để tạo ra các orbital lai hóa mới hoàn toàn tương đương về hình dạng và năng lượng, định hướng xác định trong không gian.',
          'Số AO lai hóa tạo thành luôn bằng tổng số AO tham gia tổ hợp ban đầu.'
        ],
        tables: [
          {
            title: 'Các trạng thái lai hóa cơ bản của nguyên tử trung tâm',
            headers: ['Loại lai hóa', 'AO tham gia tổ hợp', 'Số AO lai hóa', 'Góc liên kết', 'Dạng hình học', 'Ví dụ'],
            rows: [
              ['sp', '1 AO s + 1 AO p', '2 AO sp', '180°', 'Đường thẳng', 'BeF₂, BeH₂, C (nối 3 HCN, axetilen)'],
              ['sp²', '1 AO s + 2 AO p', '3 AO sp²', '120°', 'Tam giác phẳng', 'BF₃, SO₃, SO₂, C (nối đôi C=C)'],
              ['sp³', '1 AO s + 3 AO p', '4 AO sp³', '109,5°', 'Tứ diện đều', 'CH₄, CCl₄, NH₃, H₂O, kim cương']
            ]
          }
        ]
      }
    ],
    quickChecks: [
      {
        id: 'qc1-1',
        question: 'Phân tử SO₂ có nguyên tử S liên kết với 2 nguyên tử O và còn 1 cặp electron tự do. Dạng hình học của SO₂ theo VSEPR là:',
        options: ['Đường thẳng', 'Hình chữ V (gấp khúc) với góc < 120°', 'Tam giác phẳng', 'Tứ diện đều'],
        correctIndex: 1,
        explanation: 'SO₂ có dạng AX₂E₁, gồm 2 liên kết và 1 cặp e tự do trên nguyên tử S. Cặp e này đẩy 2 liên kết S-O làm phân tử có dạng chữ V góc < 120°.',
        hint: 'Xác định công thức VSEPR AX_nE_m với n=2, m=1.'
      },
      {
        id: 'qc1-2',
        question: 'Nguyên tử trung tâm Carbon trong phân tử Methane (CH₄) ở trạng thái lai hóa nào?',
        options: ['Lai hóa sp', 'Lai hóa sp²', 'Lai hóa sp³', 'Không lai hóa'],
        correctIndex: 2,
        explanation: 'C trong CH₄ liên kết với 4 nguyên tử H bằng 4 liên kết đơn σ hướng về 4 đỉnh của tứ diện đều -> Trạng thái lai hóa sp³ (1 AO 2s + 3 AO 2p -> 4 AO sp³).',
        hint: '1 nguyên tử s + 3 nguyên tử p tạo ra 4 orbital tứ diện.'
      }
    ],
    lessonQuiz: [
      {
        id: 'lq1-1',
        question: 'Theo mô hình VSEPR, phân tử Ammonia (NH₃) có công thức và dạng hình học tương ứng là:',
        options: ['AX₄ - Tứ diện', 'AX₃E₁ - Chóp tam giác (tháp tam giác)', 'AX₂E₂ - Gấp khúc', 'AX₃ - Tam giác phẳng'],
        correctIndex: 1,
        explanation: 'Nguyên tử N trong NH₃ liên kết với 3 nguyên tử H và còn 1 cặp e tự do -> AX₃E₁, có dạng chóp tam giác với góc liên kết ~ 107° (< 109,5°).',
        hint: 'N thuộc nhóm VA có 5 e hóa trị, 3 e liên kết với 3 H, còn lại 2 e tạo thành 1 cặp tự do.'
      },
      {
        id: 'lq1-2',
        question: 'Phân tử nào sau đây có cấu trúc hình học đường thẳng với góc liên kết 180°?',
        options: ['H₂O', 'SO₂', 'CO₂', 'OF₂'],
        correctIndex: 2,
        explanation: 'CO₂ có dạng AX₂ (nguyên tử C không còn cặp e riêng), 2 liên kết đôi đẩy nhau tối đa tạo góc 180° thẳng hàng.',
        hint: 'H₂O, SO₂, OF₂ đều còn cặp electron tự do trên nguyên tử trung tâm nên bị gấp khúc.'
      },
      {
        id: 'lq1-3',
        question: 'Trong phân tử BF₃, nguyên tử Boron (B) có trạng thái lai hóa nào và góc liên kết là bao nhiêu?',
        options: ['sp, 180°', 'sp², 120°', 'sp³, 109,5°', 'sp³, < 109,5°'],
        correctIndex: 1,
        explanation: 'B có 3 electron hóa trị tạo 3 liên kết đơn với 3 nguyên tử F, không còn cặp e riêng (AX₃) -> lai hóa sp² dạng tam giác phẳng góc 120°.',
        hint: 'Boron nhóm IIIA có 3 electron hóa trị tạo 3 orbital lai hóa hướng ra 3 đỉnh tam giác đều.'
      },
      {
        id: 'lq1-4',
        question: 'Cặp phân tử nào dưới đây ĐỀU có dạng hình học gấp khúc (chữ V)?',
        options: ['CO₂ và BeH₂', 'H₂O và SO₂', 'BF₃ và NH₃', 'CH₄ và CCl₄'],
        correctIndex: 1,
        explanation: 'H₂O (AX₂E₂) và SO₂ (AX₂E₁) đều có dạng gấp khúc chữ V do sự đẩy của các cặp electron tự do trên nguyên tử trung tâm.',
        hint: 'Cả hai phân tử đều có 2 liên kết và còn ít nhất một cặp electron chưa liên kết.'
      },
      {
        id: 'lq1-5',
        question: 'Phát biểu nào sau đây về sự lai hóa orbital là ĐÚNG?',
        options: [
          'Số AO lai hóa tạo thành luôn gấp đôi số AO tham gia',
          'Các AO tham gia lai hóa phải có mức năng lượng hoàn toàn khác xa nhau',
          'Các AO lai hóa có hình dạng, năng lượng tương đương nhau và định hướng đối xứng trong không gian',
          'Chỉ có orbital p mới tham gia quá trình lai hóa'
        ],
        correctIndex: 2,
        explanation: 'Quá trình lai hóa tổ hợp các AO có năng lượng gần bằng nhau (như ns và np) để tạo ra số AO lai hóa bằng số AO ban đầu, có hình dạng và năng lượng đồng nhất.',
        hint: 'Nhớ định nghĩa: tổ hợp các AO gần bằng năng lượng để tạo AO mới tương đương nhau.'
      }
    ]
  },
  {
    id: 2,
    slug: 'phan-ung-hat-nhan',
    lessonNumber: 'Bài 2',
    periods: 'Thời lượng: 03 tiết (Tiết 24 - 26)',
    title: 'Phản Ứng Hạt Nhân & Phóng Xạ',
    subtitle: 'Phóng xạ tự nhiên, Chu kì bán rã, Phóng xạ nhân tạo, Phân hạch & Nhiệt hạch',
    iconName: 'Radiation',
    color: 'emerald',
    objectives: [
      'Nêu được bản chất phóng xạ tự nhiên, nhận biết các loại tia α, β⁻, β⁺ (positron), γ và so sánh khả năng đâm xuyên / ion hóa.',
      'Hiểu khái niệm chu kì bán rã (t₁/₂) và tính toán lượng chất phóng xạ còn lại sau thời gian t.',
      'Vận dụng định luật bảo toàn số khối (A) và bảo toàn điện tích (Z) để hoàn thành phương trình phản ứng hạt nhân.',
      'Phân biệt phản ứng phân hạch và nhiệt hạch, nêu các ứng dụng trong y tế (Co-60, I-131), khảo cổ học (C-14), địa chất (U-238) và năng lượng.'
    ],
    explore: {
      title: 'Bí ẩn những cổ vật hàng ngàn năm tuổi được định ngày như thế nào?',
      scenario: 'Làm sao các nhà khảo cổ học có thể biết chính xác một xác ướp Ai Cập có niên đại 3000 năm hay một chiếc thuyền gỗ cổ đã chìm từ 5000 năm trước?',
      description: 'Họ sử dụng phương pháp định niên đại bằng đồng vị phóng xạ Carbon-14 (¹⁴C). Sinh vật sống liên tục trao đổi ¹⁴C với môi trường. Khi sinh vật chết đi, lượng ¹⁴C giảm dần theo chu kì bán rã 5730 năm mà không được bù đắp. Bằng cách đo tỉ lệ ¹⁴C còn lại, ta tính ra chính xác thời gian sinh vật đã qua đời!',
      interactiveType: 'nuclear'
    },
    coreKnowledge: [
      {
        heading: '1. Khái niệm & Phân loại Phóng xạ',
        summaryPoints: [
          'Phản ứng hạt nhân là sự biến đổi hạt nhân nguyên tử của một nguyên tố hóa học thành hạt nhân của nguyên tố khác, kèm theo năng lượng tỏa ra vô cùng lớn (lớn hơn phản ứng hóa học hàng triệu lần).',
          'Khác với phản ứng hóa học (chỉ biến đổi lớp vỏ electron), phản ứng hạt nhân biến đổi tận trong hạt nhân nguyên tử.',
          'Phóng xạ tự nhiên: Quá trình hạt nhân không bền tự động phân rã thành hạt nhân khác và phát ra các tia bức xạ không nhìn thấy.'
        ],
        tables: [
          {
            title: 'Bảng đặc trưng các tia phóng xạ tự nhiên',
            headers: ['Tia phóng xạ', 'Kí hiệu', 'Bản chất', 'Số khối (A)', 'Điện tích (Z)', 'Khả năng đâm xuyên', 'Khả năng ion hóa'],
            rows: [
              ['Alpha (α)', '⁴₂He hoặc ⁴₂α', 'Hạt nhân nguyên tử Heli', '4', '+2', 'Yếu (bị chặn bởi tờ giấy)', 'Rất mạnh'],
              ['Beta trừ (β⁻)', '⁰₋₁e hoặc ⁰₋₁β', 'Dòng electron mang điện âm', '0', '-1', 'Trung bình (chặn bởi tấm nhôm vài mm)', 'Trung bình'],
              ['Positron (β⁺)', '⁰₊₁e hoặc ⁰₊₁β', 'Electron mang điện dương', '0', '+1', 'Trung bình', 'Trung bình'],
              ['Gamma (γ)', '⁰₀γ', 'Sóng điện từ năng lượng cực cao', '0', '0', 'Cực mạnh (cần lớp chì dày hàng chục cm)', 'Yếu nhất']
            ]
          }
        ]
      },
      {
        heading: '2. Chu kì bán rã & Định luật phóng xạ',
        summaryPoints: [
          'Chu kì bán rã (t₁/₂ hoặc T): Là khoảng thời gian cần thiết để một nửa số nguyên tử (hay một nửa lượng chất) phóng xạ ban đầu bị phân rã.',
          'Chu kì bán rã càng lớn chứng tỏ đồng vị phóng xạ đó càng bền vững.',
          'Công thức tính lượng chất còn lại sau thời gian t: m(t) = m₀ × (1/2)^(t/T) = m₀ × 2^(-t/T).'
        ],
        formulaBox: {
          title: 'Công thức chu kì bán rã',
          formula: 'm = m₀ / (2^k)  với k = t / T (số chu kì bán rã)',
          notes: [
            'Sau 1 chu kì (t = T): còn 50% lượng ban đầu (m = m₀ / 2)',
            'Sau 2 chu kì (t = 2T): còn 25% lượng ban đầu (m = m₀ / 4)',
            'Sau 3 chu kì (t = 3T): còn 12,5% lượng ban đầu (m = m₀ / 8)'
          ]
        }
      },
      {
        heading: '3. Phân hạch & Nhiệt hạch - Định luật bảo toàn',
        summaryPoints: [
          'Hai định luật bảo toàn trong phản ứng hạt nhân: (1) Bảo toàn số khối: Tổng A (trước) = Tổng A (sau); (2) Bảo toàn điện tích: Tổng Z (trước) = Tổng Z (sau).',
          'Phản ứng phân hạch: Một hạt nhân rất nặng (như ²³⁵U, ²³⁹Pu) hấp thụ neutron chậm rồi vỡ ra thành 2 hay nhiều hạt nhân nhẹ hơn cùng các neutron và tỏa nhiệt lượng khổng lồ (ứng dụng trong nhà máy điện hạt nhân).',
          'Phản ứng nhiệt hạch: Hai hay nhiều hạt nhân rất nhẹ (như ²₁D, ³₁T, ¹₁H) kết hợp lại ở nhiệt độ hàng triệu độ C để tạo hạt nhân nặng hơn (như ⁴₂He). Đây là nguồn năng lượng của Mặt Trời và các ngôi sao.'
        ]
      },
      {
        heading: '4. Các đồng vị phóng xạ thực tiễn quan trọng',
        summaryPoints: [
          '⁶⁰Co: Phát tia γ dùng xạ trị ung thư khối u sâu và chiếu xạ bảo quản thực phẩm y tế.',
          '¹³¹I: Dùng chẩn đoán và điều trị bệnh ung thư tuyến giáp (tuyến giáp hấp thụ chọn lọc iodine).',
          '¹⁴C (T = 5730 năm): Định niên đại cổ vật, mẫu hóa thạch hữu cơ có niên đại dưới 75.000 năm.',
          '²³⁸U (T = 4,5 tỉ năm): Dùng xác định tuổi của các lớp địa chất, mẫu đá khoáng vật Trái Đất.',
          '²³⁵U: Nhiên liệu chính trong các lò phản ứng năng lượng hạt nhân phát điện sạch.'
        ]
      }
    ],
    quickChecks: [
      {
        id: 'qc2-1',
        question: 'Đồng vị ⁹⁰Sr có chu kì bán rã là 28 năm. Nếu ban đầu có 1,0 gam ⁹⁰Sr, sau 56 năm lượng ⁹⁰Sr còn lại là bao nhiêu?',
        options: ['0,50 gam', '0,25 gam', '0,10 gam', '0,75 gam'],
        correctIndex: 1,
        explanation: '56 năm tương ứng với 56 / 28 = 2 chu kì bán rã. Lượng còn lại: m = 1,0 × (1/2)² = 0,25 gam.',
        hint: 'Số chu kì = 56 / 28 = 2. Cứ mỗi chu kì lượng chất giảm đi một nửa.'
      },
      {
        id: 'qc2-2',
        question: 'Tìm hạt X trong phương trình phân rã phóng xạ sau: ²²⁶₈₈Ra -> ²²²₈₆Rn + X',
        options: ['⁰₋₁e (hạt β⁻)', '⁴₂He (hạt α)', '¹₀n (neutron)', '¹₁p (proton)'],
        correctIndex: 1,
        explanation: 'Bảo toàn số khối: A_X = 226 - 222 = 4. Bảo toàn điện tích: Z_X = 88 - 86 = 2 -> X là hạt ⁴₂He (hạt alpha α).',
        hint: 'Áp dụng bảo toàn số khối (226 = 222 + A) và bảo toàn điện tích (88 = 86 + Z).'
      }
    ],
    lessonQuiz: [
      {
        id: 'lq2-1',
        question: 'Sắp xếp các tia phóng xạ theo thứ tự KHẢ NĂNG ĐÂM XUYÊN GIẢM DẦN là:',
        options: ['Alpha (α) > Beta (β) > Gamma (γ)', 'Gamma (γ) > Beta (β) > Alpha (α)', 'Beta (β) > Gamma (γ) > Alpha (α)', 'Gamma (γ) > Alpha (α) > Beta (β)'],
        correctIndex: 1,
        explanation: 'Tia Gamma (γ) có bước sóng cực ngắn nên đâm xuyên mạnh nhất (cần lớp chì dày), sau đó đến tia Beta (β), yếu nhất là tia Alpha (α) (bị chặn bởi tờ giấy mỏng).',
        hint: 'Tia không mang điện và có năng lượng cao nhất sẽ đâm xuyên xa nhất.'
      },
      {
        id: 'lq2-2',
        question: 'Vì sao để xác định niên đại các mẫu đá vỏ Trái Đất (hàng tỉ năm tuổi), người ta dùng ²³⁸U mà không dùng ¹⁴C?',
        options: [
          'Vì ¹⁴C quá độc hại trong khi ²³⁸U an toàn hơn',
          'Vì ¹⁴C có chu kì bán rã ngắn (5730 năm) nên sau hàng triệu năm lượng ¹⁴C đã phân rã hết, trong khi ²³⁸U có chu kì 4,5 tỉ năm phù hợp',
          'Vì đá không chứa nguyên tố Carbon',
          'Vì ²³⁸U chỉ phân rã ở nhiệt độ phòng'
        ],
        correctIndex: 1,
        explanation: 'Chu kì bán rã của ¹⁴C là 5730 năm nên chỉ đo được các mẫu dưới 75.000 năm. Tuổi các mẫu đá địa chất lên tới hàng tỉ năm, bắt buộc phải dùng ²³⁸U có chu kì 4,5 tỉ năm.',
        hint: 'So sánh chu kì bán rã: 5730 năm so với 4,5 tỉ năm.'
      },
      {
        id: 'lq2-3',
        question: 'Quá trình tổng hợp hạt nhân xảy ra trên Mặt Trời: ²₁D + ³₁T -> ⁴₂He + ¹₀n + E thuộc loại phản ứng nào?',
        options: ['Phản ứng phân hạch', 'Phản ứng nhiệt hạch', 'Phóng xạ tự nhiên', 'Phản ứng cháy oxi hóa - khử'],
        correctIndex: 1,
        explanation: 'Đây là phản ứng nhiệt hạch (tổng hợp 2 hạt nhân nhẹ Deuterium và Tritium thành hạt nhân Helium nặng hơn ở nhiệt độ siêu cao và tỏa năng lượng cực lớn).',
        hint: 'Hai hạt nhân nhẹ kết hợp tạo thành hạt nhân nặng hơn.'
      },
      {
        id: 'lq2-4',
        question: 'Đồng vị phóng xạ nào được ứng dụng chuyên biệt trong y học để điều trị bệnh nhân ung thư tuyến giáp?',
        options: ['Cobalt-60 (⁶⁰Co)', 'Iodine-131 (¹³¹I)', 'Carbon-14 (¹⁴C)', 'Uranium-235 (²³⁵U)'],
        correctIndex: 1,
        explanation: 'Tuyến giáp trong cơ thể người có cơ chế tập trung nguyên tố Iodine. Do đó đồng vị ¹³¹I được đưa vào cơ thể sẽ tập trung tiêu diệt chọn lọc các tế bào ung thư tuyến giáp.',
        hint: 'Tuyến giáp cần chất gì có trong muối ăn hàng ngày?'
      },
      {
        id: 'lq2-5',
        question: 'Hoàn thành phương trình phản ứng hạt nhân: ¹⁴₇N + ¹₀n -> ¹⁴₆C + ?',
        options: ['¹₁p (hạt proton)', '⁴₂He (hạt alpha)', '⁰₋₁e (hạt electron)', '⁰₀γ (tia gamma)'],
        correctIndex: 0,
        explanation: 'Bảo toàn số khối: 14 + 1 = 14 + A -> A = 1. Bảo toàn điện tích: 7 + 0 = 6 + Z -> Z = 1. Hạt có A=1, Z=1 chính là proton (¹₁p hoặc ¹₁H).',
        hint: 'Tính 14 + 1 - 14 = 1 và 7 + 0 - 6 = 1.'
      }
    ]
  },
  {
    id: 3,
    slug: 'nang-luong-hoat-hoa',
    lessonNumber: 'Bài 3',
    periods: 'Thời lượng: 03 tiết (Tiết 27 - 29)',
    title: 'Năng Lượng Hoạt Hóa & Chất Xúc Tác',
    subtitle: 'Khái niệm Ea, Va chạm hiệu quả, Phương trình Arrhenius & Cơ chế xúc tác hóa học/sinh học',
    iconName: 'Zap',
    color: 'amber',
    objectives: [
      'Nêu được khái niệm năng lượng hoạt hóa (Ea) và khái niệm va chạm hiệu quả giữa các phân tử hoạt động.',
      'Hiểu và vận dụng phương trình Arrhenius k = A·e^(-Ea/RT) để giải thích ảnh hưởng của Ea và nhiệt độ tới tốc độ phản ứng.',
      'Giải thích được vai trò và cơ chế của chất xúc tác (làm giảm Ea, tạo lối đi mới nhiều giai đoạn, có tính chọn lọc cao).',
      'Liên hệ các quá trình xúc tác thực tế: Enzyme tiêu hóa (lactase, amylase), xúc tác tổng hợp phân đạm (Fe), sản xuất axit sunfuric (V₂O₅), sự phá hủy tầng ozone bởi gốc Cl.'
    ],
    explore: {
      title: 'Vì sao que diêm để trong không khí không tự cháy, nhưng quẹt nhẹ là bùng lửa?',
      scenario: 'Gỗ và đầu que diêm chứa đầy chất cháy tiếp xúc trực tiếp với 21% oxy trong không khí. Tuy nhiên, nó có thể để hàng chục năm mà không hề tự bốc cháy. Tại sao chỉ một cái quẹt nhẹ ma sát lại làm nó bùng cháy mãnh liệt?',
      description: 'Phản ứng cháy cần vượt qua "Hàng rào năng lượng hoạt hóa" (Ea). Ở nhiệt độ thường, các phân tử không đủ năng lượng để va chạm hiệu quả. Động tác quẹt tạo ma sát sinh nhiệt cục bộ cung cấp đủ năng lượng hoạt hóa, kích hoạt chuỗi phản ứng cháy tỏa nhiệt duy trì!',
      interactiveType: 'arrhenius'
    },
    coreKnowledge: [
      {
        heading: '1. Khái niệm Năng lượng hoạt hóa (Ea)',
        summaryPoints: [
          'Năng lượng hoạt hóa (Ea, đơn vị J/mol hoặc kJ/mol) là năng lượng tối thiểu mà các phân tử chất phản ứng cần có để phản ứng hóa học có thể xảy ra.',
          'Va chạm hiệu quả: Để phản ứng xảy ra, các phân tử phải va chạm với nhau và có năng lượng đủ lớn (lớn hơn hoặc bằng Ea). Các phân tử này được gọi là "phân tử hoạt động".',
          'Mối quan hệ: Ea càng lớn -> số phân tử hoạt động càng ít -> số va chạm hiệu quả càng nhỏ -> tốc độ phản ứng càng chậm (và ngược lại).'
        ]
      },
      {
        heading: '2. Phương trình kinh nghiệm Arrhenius',
        summaryPoints: [
          'Phương trình Arrhenius biểu diễn mối liên hệ giữa hằng số tốc độ phản ứng k với nhiệt độ T (Kelvin) và năng lượng hoạt hóa Ea:',
          'k = A · e^(-Ea / (R · T))  trong đó A: hằng số tần số va chạm, R = 8,314 J/(mol·K), T: nhiệt độ Kelvin (K = °C + 273).',
          'Khi xét phản ứng ở 2 nhiệt độ T₁ và T₂:',
          'ln(k₂ / k₁) = (Ea / R) · (1/T₁ - 1/T₂).'
        ],
        formulaBox: {
          title: 'Phương trình Arrhenius dạng 2 nhiệt độ',
          formula: 'ln(k_{T2} / k_{T1}) = (E_a / R) * (1/T_1 - 1/T_2)',
          notes: [
            'Khi T tăng (T₂ > T₁) thì k₂ > k₁ -> tốc độ phản ứng tăng.',
            'Khi Ea càng nhỏ thì hằng số k càng lớn -> phản ứng xảy ra càng nhanh.'
          ]
        }
      },
      {
        heading: '3. Bản chất & Vai trò của Chất xúc tác',
        summaryPoints: [
          'Chất xúc tác là chất làm tăng tốc độ phản ứng hóa học nhưng không bị biến đổi về chất và lượng sau phản ứng.',
          'Cơ chế: Chất xúc tác làm giảm năng lượng hoạt hóa (Ea) bằng cách chia phản ứng thành nhiều giai đoạn trung gian có năng lượng hoạt hóa thấp hơn.',
          'Tỉ số tăng tốc độ khi có xúc tác: k_x / k_o = e^(ΔEa / (R·T)) (với ΔEa = Ea_không_xúc_tác - Ea_có_xúc_tác).',
          'Đặc điểm quan trọng: (1) Không làm thay đổi chiều cân bằng phản ứng; (2) Có tính chọn lọc cao (mỗi phản ứng cần xúc tác riêng).'
        ],
        tables: [
          {
            title: 'Các ví dụ xúc tác thực tiễn và công nghiệp',
            headers: ['Phản ứng / Quá trình', 'Chất xúc tác', 'Loại xúc tác', 'Ý nghĩa thực tế'],
            rows: [
              ['2Al(s) + 3I₂(s) -> 2AlI₃', 'Nước (H₂O)', 'Xúc tác dị thể', 'Bột Al + I₂ khô không phản ứng, nhỏ giọt nước bùng cháy tím'],
              ['N₂ + 3H₂ ⇌ 2NH₃', 'Bột Sắt (Fe hoạt hóa)', 'Xúc tác dị thể', 'Quá trình Haber tổng hợp phân đạm quy mô công nghiệp'],
              ['2SO₂ + O₂ ⇌ 2SO₃', 'V₂O₅ hoặc Platin (Pt)', 'Xúc tác dị thể', 'Sản xuất Sulfuric acid (H₂SO₄)'],
              ['Thủy phân đường Lactose', 'Enzyme Lactase', 'Xúc tác sinh học', 'Giúp tiêu hóa đường sữa trong ruột non'],
              ['Phá hủy tầng Ozone (O₃)', 'Gốc tự do Clo (Cl)', 'Xúc tác đồng thể', '1 nguyên tử Cl phá hủy hàng trăm ngàn phân tử O₃']
            ]
          }
        ]
      }
    ],
    quickChecks: [
      {
        id: 'qc3-1',
        question: 'Chất xúc tác làm tăng tốc độ phản ứng hóa học chủ yếu bằng cách nào?',
        options: [
          'Làm tăng nhiệt độ phản ứng lên hàng trăm độ',
          'Làm giảm năng lượng hoạt hóa (Ea) của phản ứng',
          'Làm thay đổi chất phản ứng thành một sản phẩm hoàn toàn khác',
          'Làm tăng thể tích của bình phản ứng'
        ],
        correctIndex: 1,
        explanation: 'Chất xúc tác mở ra con đường phản ứng mới gồm các giai đoạn trung gian có năng lượng hoạt hóa thấp hơn nhiều so với phản ứng ban đầu, làm tăng mạnh số va chạm hiệu quả.',
        hint: 'Chất xúc tác giúp hạ thấp hàng rào thế năng.'
      },
      {
        id: 'qc3-2',
        question: 'Khi tăng nhiệt độ phản ứng từ 300 K lên 400 K với phản ứng có Ea = 70 kJ/mol, hằng số tốc độ k sẽ biến đổi ra sao?',
        options: ['Tăng lên hơn 1000 lần', 'Giảm đi 1000 lần', 'Không đổi', 'Tăng đúng 1,33 lần theo tỉ lệ nhiệt độ'],
        correctIndex: 0,
        explanation: 'Áp dụng công thức Arrhenius: ln(k₄₀₀/k₃₀₀) = (70000/8.314) × (1/300 - 1/400) ≈ 7.016 -> k₄₀₀/k₃₀₀ = e^7.016 ≈ 1115 lần!',
        hint: 'Tốc độ tăng theo hàm số mũ e^(ΔT) chứ không tăng tuyến tính.'
      }
    ],
    lessonQuiz: [
      {
        id: 'lq3-1',
        question: 'Phát biểu nào sau đây về năng lượng hoạt hóa (Ea) là KHÔNG ĐÚNG?',
        options: [
          'Ea là năng lượng tối thiểu cần thiết để các chất phản ứng xảy ra phản ứng',
          'Phản ứng có Ea càng nhỏ thì tốc độ phản ứng càng lớn ở cùng nhiệt độ',
          'Chất xúc tác làm tăng tốc độ phản ứng bằng cách làm tăng năng lượng hoạt hóa Ea',
          'Khi đun nóng, số lượng phân tử có năng lượng lớn hơn Ea tăng lên làm tốc độ phản ứng tăng'
        ],
        correctIndex: 2,
        explanation: 'Chất xúc tác làm GIẢM năng lượng hoạt hóa Ea, chứ không làm tăng. Tăng Ea sẽ khiến phản ứng khó xảy ra hơn!',
        hint: 'Xúc tác giúp phản ứng dễ dàng hơn hay khó khăn hơn?'
      },
      {
        id: 'lq3-2',
        question: 'Trong cơ thể người, những người bị thiếu hụt enzyme Lactase sẽ gặp hiện tượng gì khi uống sữa tươi?',
        options: [
          'Hấp thu đường sữa nhanh gấp đôi bình thường',
          'Đường lactose không được thủy phân thành glucose/galactose, bị vi khuẩn lên men sinh khí gây đau bụng, tiêu chảy',
          'Cơ thể tự biến đổi đường lactose thành protein',
          'Không bị ảnh hưởng gì vì enzyme không có vai trò sinh học'
        ],
        correctIndex: 1,
        explanation: 'Enzyme Lactase đóng vai trò xúc tác sinh học thủy phân lactose (C₁₂H₂₂O₁₁) -> glucose + galactose. Khi thiếu enzyme, lactose lên men gây đầy hơi, sôi bụng (chứng bất dung nạp lactose).',
        hint: 'Enzyme xúc tác phản ứng tiêu hóa đường sữa trong ruột non non.'
      },
      {
        id: 'lq3-3',
        question: 'Xét phản ứng phá hủy tầng ozone: Giai đoạn 1: Cl + O₃ -> ClO + O₂; Giai đoạn 2: ClO + O₃ -> Cl + 2O₂. Chất xúc tác trong quá trình này là:',
        options: ['Khí Oxy (O₂)', 'Khí Ozone (O₃)', 'Gốc Clo (Cl)', 'Hợp chất ClO'],
        correctIndex: 2,
        explanation: 'Gốc Cl tham gia vào giai đoạn 1 và được tái tạo nguyên vẹn ở giai đoạn 2 (không bị tiêu hao sau toàn bộ phản ứng) -> Cl đóng vai trò chất xúc tác.',
        hint: 'Chất xúc tác tham gia phản ứng ban đầu và được tái tạo ở giai đoạn cuối.'
      },
      {
        id: 'lq3-4',
        question: 'Khi trộn bột nhôm (Al) và bột iot (I₂) khô ở nhiệt độ phòng, phản ứng không xảy ra. Nhỏ một giọt nước vào, hỗn hợp bốc cháy dữ dội tạo khói tím AlI₃. Nước đóng vai trò gì?',
        options: ['Chất oxi hóa', 'Chất khử', 'Chất xúc tác dị thể', 'Môi trường làm nguội'],
        correctIndex: 2,
        explanation: 'Nước là chất xúc tác dị thể (hòa tan bề mặt và tạo điều kiện các hạt tiếp xúc phản ứng mãnh liệt mà nước không bị biến đổi về bản chất hóa học).',
        hint: 'Nước kích hoạt phản ứng mà không bị tiêu hao trong phương trình tạo AlI₃.'
      },
      {
        id: 'lq3-5',
        question: 'Tính chọn lọc của chất xúc tác có nghĩa là gì?',
        options: [
          'Một chất xúc tác có thể làm tăng tốc độ của tất cả mọi phản ứng hóa học trên thế giới',
          'Mỗi chất xúc tác thường chỉ xúc tác hiệu quả cho một phản ứng hoặc một nhóm phản ứng nhất định',
          'Chất xúc tác tự chọn thời điểm để phản ứng bắt đầu',
          'Chỉ những chất đắt tiền mới làm được chất xúc tác'
        ],
        correctIndex: 1,
        explanation: 'Tính chọn lọc: Ví dụ enzyme urease chỉ thủy phân urea mà không thủy phân chất khác; xúc tác lên men lactic khác với xúc tác lên men rượu từ đường.',
        hint: 'Mỗi ổ khóa có một chìa khóa riêng biệt.'
      }
    ]
  },
  {
    id: 4,
    slug: 'entropy-va-nang-luong-gibbs',
    lessonNumber: 'Bài 4',
    periods: 'Thời lượng: 04 tiết (Tiết 30 - 33)',
    title: 'Entropy & Biến Thiên Năng Lượng Tự Do Gibbs',
    subtitle: 'Thước đo độ hỗn loạn (S), Năng lượng Gibbs (ΔG) và Dự đoán chiều hướng tự phát của phản ứng hóa học',
    iconName: 'Compass',
    color: 'rose',
    objectives: [
      'Nêu được khái niệm Entropy (S) là thước đo độ hỗn loạn của hệ, so sánh entropy giữa các trạng thái rắn, lỏng, khí.',
      'Tính được biến thiên entropy chuẩn ΔrS°₂₉₈ của phản ứng từ bảng số liệu.',
      'Hiểu và vận dụng phương trình năng lượng tự do Gibbs: ΔrG°_T = ΔrH°_T - T·ΔrS°_T để dự đoán chiều tự phát của phản ứng hóa học (ΔG < 0).',
      'Vận dụng giải thích các hiện tượng thực tế: Sự thăng hoa của đá khô CO₂, quá trình luyện kim khử quặng ở nhiệt độ cao, tổng hợp amoniac Haber.'
    ],
    explore: {
      title: 'Vì sao một giọt mực tự lan đều trong cốc nước mà không bao giờ tự gom lại?',
      scenario: 'Khi nhỏ một giọt mực vào cốc nước tinh khiết, sau vài phút giọt mực tự khuếch tán đều ra toàn bộ cốc nước. Nhưng ta không bao giờ thấy nước tự tách giọt mực trở lại! Quy luật tự nhiên nào chi phối điều này?',
      description: 'Đó chính là nguyên lý tăng Entropy (độ hỗn loạn) trong tự nhiên! Vũ trụ luôn có xu hướng chuyển từ trạng thái trật tự sang trạng thái hỗn loạn hơn (Entropy cực đại). Trạng thái phân tán đều có độ hỗn loạn lớn hơn nhiều so với trạng thái mực gom thành một điểm.',
      interactiveType: 'gibbs'
    },
    coreKnowledge: [
      {
        heading: '1. Khái niệm Entropy (S) - Thước đo độ hỗn loạn',
        summaryPoints: [
          'Entropy (S, đơn vị J/(mol·K)) là thước đo mức độ hỗn loạn (mất trật tự) của hệ chứa số lượng lớn hạt vi mô.',
          'Độ tự do chuyển động của các hạt càng lớn thì Entropy càng cao.',
          'So sánh trạng thái cùng một chất: S(khí) >> S(lỏng) > S(rắn). (Ví dụ: H₂O(hơi) > H₂O(lỏng) > H₂O(đá)).',
          'Quy ước: Một tinh thể chất rắn lí tưởng ở độ không tuyệt đối (0 Kelvin) có Entropy bằng 0.'
        ]
      },
      {
        heading: '2. Biến thiên Entropy của phản ứng (ΔrS°₂₉₈)',
        summaryPoints: [
          'Biến thiên entropy của phản ứng: ΔrS°₂₉₈ = Σ S°₂₉₈(sản phẩm) - Σ S°₂₉₈(chất đầu).',
          'Dự đoán dấu của ΔrS°:',
          '+ Phản ứng làm TĂNG số mol chất khí (hoặc từ rắn/lỏng tạo ra khí) -> ΔrS° > 0 (Entropy tăng).',
          '+ Phản ứng làm GIẢM số mol chất khí -> ΔrS° < 0 (Entropy giảm).'
        ]
      },
      {
        heading: '3. Năng lượng tự do Gibbs (ΔG) & Chiều tự phát của phản ứng',
        summaryPoints: [
          'Hai xu hướng tự nhiên của phản ứng: (1) Xu hướng làm giảm enthalpy (ΔH < 0, tỏa nhiệt bền vững); (2) Xu hướng làm tăng entropy (ΔS > 0, tăng độ hỗn loạn).',
          'Năng lượng tự do Gibbs (ΔG) kết hợp cả hai yếu tố trên ở nhiệt độ T (Kelvin):',
          'ΔrG°_T = ΔrH°_T - T · ΔrS°_T'
        ],
        formulaBox: {
          title: 'Tiêu chuẩn xét chiều tự phát của phản ứng (ở T và P không đổi)',
          formula: 'Δ_r G^o = Δ_r H^o - T * Δ_r S^o',
          notes: [
            'ΔrG° < 0: Phản ứng TỰ XẢY RA theo chiều thuận (giá trị càng âm, phản ứng càng dễ xảy ra).',
            'ΔrG° = 0: Phản ứng ở trạng thái CÂN BẰNG.',
            'ΔrG° > 0: Phản ứng KHÔNG TỰ XẢY RA theo chiều thuận (tự xảy ra theo chiều nghịch).'
          ]
        },
        tables: [
          {
            title: 'Mối quan hệ giữa dấu của ΔH, ΔS và tính tự phát của phản ứng',
            headers: ['Dấu ΔH', 'Dấu ΔS', 'Điều kiện để phản ứng tự xảy ra (ΔG < 0)', 'Ví dụ thực tế'],
            rows: [
              ['– (Tỏa nhiệt)', '+ (Tăng độ hỗn loạn)', 'Luôn tự xảy ra ở MỌI nhiệt độ', '2H₂O₂ (l) -> 2H₂O (l) + O₂ (g)'],
              ['– (Tỏa nhiệt)', '– (Giảm độ hỗn loạn)', 'Tự xảy ra ở NHIỆT ĐỘ THẤP (khi |ΔH| > T|ΔS|)', 'Tổng hợp NH₃: N₂ + 3H₂ ⇌ 2NH₃'],
              ['+ (Thu nhiệt)', '+ (Tăng độ hỗn loạn)', 'Tự xảy ra ở NHIỆT ĐỘ CAO (khi T·ΔS > ΔH)', 'Nhiệt phân đá vôi: CaCO₃ (s) -> CaO(s) + CO₂(g)'],
              ['+ (Thu nhiệt)', '– (Giảm độ hỗn loạn)', 'KHÔNG BAO GIỜ tự xảy ra ở bất kì nhiệt độ nào', '2NO(g) -> N₂(g) + O₂(g) ngược chiều']
            ]
          }
        ]
      }
    ],
    quickChecks: [
      {
        id: 'qc4-1',
        question: 'Phản ứng nào sau đây có biến thiên Entropy mang giá trị DƯƠNG (ΔrS° > 0)?',
        options: [
          '2H₂ (g) + O₂ (g) -> 2H₂O (l)',
          'CaCO₃ (s) -> CaO (s) + CO₂ (g)',
          'N₂ (g) + 3H₂ (g) -> 2NH₃ (g)',
          'Ag⁺ (aq) + Cl⁻ (aq) -> AgCl (s)'
        ],
        correctIndex: 1,
        explanation: 'Phản ứng CaCO₃(s) -> CaO(s) + CO₂(g) chuyển từ 1 mol chất rắn thành 1 mol rắn + 1 mol khí CO₂ -> sinh ra chất khí làm tăng độ hỗn loạn nên ΔrS° > 0.',
        hint: 'Tìm phản ứng sinh thêm số mol chất khí.'
      },
      {
        id: 'qc4-2',
        question: 'Ở 25°C (298 K), một phản ứng có ΔH = -39,0 kJ và ΔS = +247 J/K (+0,247 kJ/K). Giá trị ΔG và kết luận về phản ứng là:',
        options: [
          'ΔG = +34,6 kJ -> Phản ứng không tự xảy ra',
          'ΔG = -112,6 kJ -> Phản ứng tự xảy ra ở điều kiện chuẩn',
          'ΔG = 0 kJ -> Phản ứng đạt cân bằng',
          'ΔG = -39,0 kJ -> Phản ứng tỏa nhiệt nhưng không tự xảy ra'
        ],
        correctIndex: 1,
        explanation: 'ΔG = ΔH - T·ΔS = -39,0 - 298 × (0,247) = -39,0 - 73,6 = -112,6 kJ < 0 -> Phản ứng tự xảy ra thuận lợi.',
        hint: 'Nhớ đổi đơn vị ΔS từ J/K sang kJ/K (chia cho 1000).'
      }
    ],
    lessonQuiz: [
      {
        id: 'lq4-1',
        question: 'Entropy chuẩn của CO₂ ở các thể rắn, lỏng, khí được sắp xếp theo thứ tự tăng dần là:',
        options: [
          'CO₂ (s) < CO₂ (l) < CO₂ (g)',
          'CO₂ (g) < CO₂ (l) < CO₂ (s)',
          'CO₂ (s) < CO₂ (g) < CO₂ (l)',
          'CO₂ (l) < CO₂ (s) < CO₂ (g)'
        ],
        correctIndex: 0,
        explanation: 'Chất rắn có cấu trúc mạng trật tự nhất (S nhỏ nhất), chất lỏng có độ linh động vừa phải, chất khí chuyển động hỗn loạn nhất (S lớn nhất): S(s) < S(l) < S(g).',
        hint: 'Độ tự do chuyển động: Rắn < Lỏng < Khí.'
      },
      {
        id: 'lq4-2',
        question: 'Điều kiện để một phản ứng hóa học tự xảy ra theo chiều thuận ở nhiệt độ và áp suất xác định là:',
        options: ['ΔH > 0', 'ΔS < 0', 'ΔG < 0', 'ΔG > 0'],
        correctIndex: 2,
        explanation: 'Biến thiên năng lượng tự do Gibbs ΔG < 0 là tiêu chuẩn nhiệt động học xác định phản ứng tự phát xảy ra ở nhiệt độ và áp suất không đổi.',
        hint: 'Năng lượng tự do Gibbs mang dấu âm (ΔG < 0).'
      },
      {
        id: 'lq4-3',
        question: 'Tại sao đá khô (CO₂ rắn) tự thăng hoa thành khí CO₂ ngay ở nhiệt độ phòng dù quá trình này thu nhiệt (ΔH > 0)?',
        options: [
          'Vì nhiệt độ phòng quá thấp',
          'Vì khi thăng hoa tạo thể khí làm Entropy tăng rất mạnh (ΔS > 0), ở nhiệt độ phòng số hạng T·ΔS lớn hơn ΔH khiến ΔG < 0',
          'Vì phản ứng có chất xúc tác đặc biệt',
          'Vì CO₂ rắn có khối lượng riêng nhẹ hơn không khí'
        ],
        correctIndex: 1,
        explanation: 'Khi CO₂(s) -> CO₂(g), độ hỗn loạn tăng vọt làm ΔS > 0. Ở nhiệt độ phòng T = 298 K, đại lượng T·ΔS > ΔH nên ΔG = ΔH - T·ΔS < 0, quá trình tự xảy ra.',
        hint: 'Sự tăng độ hỗn loạn (Entropy) là động lực giúp phản ứng thu nhiệt tự xảy ra ở nhiệt độ cao.'
      },
      {
        id: 'lq4-4',
        question: 'Phản ứng khử Fe₂O₃ bằng than chì: 3C(s) + 2Fe₂O₃(s) -> 4Fe(s) + 3CO₂(g) có ΔH° = +470,5 kJ và ΔS° = +558,4 J/K. Ở 25°C phản ứng này có tự xảy ra không?',
        options: [
          'Có, vì phản ứng sinh ra kim loại Fe',
          'Không, vì ở 25°C ΔG° = 470,5 - 298×0,5584 = +304,1 kJ > 0 (cần nung nóng nhiệt độ cao mới tự xảy ra)',
          'Có, vì ΔS° dương',
          'Đạt trạng thái cân bằng ở 25°C'
        ],
        correctIndex: 1,
        explanation: 'Ở 25°C (298 K), ΔG° = +304,1 kJ > 0 nên phản ứng không thể tự xảy ra ở nhiệt độ phòng. Trong công nghiệp luyện kim, người ta phải nung lò cao ở nhiệt độ > 843 K (~ 570°C) để T·ΔS > ΔH giúp ΔG < 0.',
        hint: 'Tính ΔG° = 470,5 - 298 × 0,5584 xem kết quả dương hay âm.'
      },
      {
        id: 'lq4-5',
        question: 'Biểu thức nào sau đây dùng để tính biến thiên Entropy chuẩn của phản ứng hóa học?',
        options: [
          'ΔrS°₂₉₈ = Σ S°₂₉₈(chất đầu) - Σ S°₂₉₈(sản phẩm)',
          'ΔrS°₂₉₈ = Σ S°₂₉₈(sản phẩm) - Σ S°₂₉₈(chất đầu)',
          'ΔrS°₂₉₈ = ΔrH°₂₉₈ / T',
          'ΔrS°₂₉₈ = k · ln(W)'
        ],
        correctIndex: 1,
        explanation: 'Biến thiên entropy của phản ứng chuẩn bằng tổng entropy chuẩn của các sản phẩm trừ tổng entropy chuẩn của các chất phản ứng (chất đầu).',
        hint: 'Biến thiên = Sau (sản phẩm) trừ Trước (chất đầu).'
      }
    ]
  }
];
