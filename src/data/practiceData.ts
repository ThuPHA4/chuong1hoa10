import { PracticeExercise } from '../types';

export const practiceExercises: PracticeExercise[] = [
  // ===================== MỨC 1: NHỚ & HIỂU =====================
  {
    id: 'p1-01',
    lessonId: 1,
    level: 1,
    levelName: 'Mức 1 – Nhớ & Hiểu',
    title: 'Xác định dạng VSEPR của phân tử Nước (H₂O)',
    question: 'Phân tử H₂O có nguyên tử trung tâm O liên kết với 2 nguyên tử H và còn 2 cặp electron hóa trị riêng (chưa liên kết). Công thức VSEPR của H₂O là gì?',
    options: ['AX₂', 'AX₂E₁', 'AX₂E₂', 'AX₄'],
    correctIndex: 2,
    explanation: 'Nguyên tử O liên kết với 2 nguyên tử H (n = 2) và còn lại 2 cặp electron tự do (m = 2) nên công thức VSEPR là AX₂E₂ (dạng hình học chữ V hay gấp khúc).',
    hint: 'A là nguyên tử O, X là 2 nguyên tử H, E là 2 cặp e riêng của O.',
    detailedSolution: [
      'Tổng e hóa trị của O là 6 e.',
      'Dùng 2 e tạo 2 liên kết đơn O-H với 2 nguyên tử H -> n = 2.',
      'Còn lại 4 e hóa trị chưa tham gia liên kết tạo thành 2 cặp e riêng -> m = 2.',
      'Vậy công thức VSEPR là AX₂E₂.'
    ],
    tags: ['VSEPR', 'Liên kết hóa học', 'Hình học phân tử']
  },
  {
    id: 'p1-02',
    lessonId: 1,
    level: 1,
    levelName: 'Mức 1 – Nhớ & Hiểu',
    title: 'Trạng thái lai hóa của C trong phân tử Methane (CH₄)',
    question: 'Nguyên tử Carbon trong phân tử CH₄ tạo 4 liên kết đơn σ tương đương hướng về 4 đỉnh của hình tứ diện đều. Trạng thái lai hóa của nguyên tử Carbon là:',
    options: ['Lai hóa sp', 'Lai hóa sp²', 'Lai hóa sp³', 'Lai hóa dsp²'],
    correctIndex: 2,
    explanation: '1 orbital 2s tổ hợp với 3 orbital 2p của nguyên tử C tạo thành 4 orbital lai hóa sp³ tương đương nhau hướng về 4 đỉnh tứ diện.',
    hint: '4 liên kết đơn tứ diện tương ứng với 1 AO s + 3 AO p.',
    detailedSolution: [
      'Cấu hình electron của C (Z=6): 1s² 2s² 2p².',
      'Ở trạng thái kích thích: 1 electron từ 2s chuyển lên 2p tạo 4 electron độc thân (2s¹ 2p³).',
      'AO 2s tổ hợp với 3 AO 2p tạo 4 AO lai hóa sp³ tương đương nhau.',
      '4 AO sp³ này xen phủ trục với 4 AO 1s của H tạo 4 liên kết σ.'
    ],
    tags: ['Lai hóa AO', 'Methane', 'sp3']
  },
  {
    id: 'p1-03',
    lessonId: 2,
    level: 1,
    levelName: 'Mức 1 – Nhớ & Hiểu',
    title: 'Nhận biết bản chất của hạt Alpha (α)',
    question: 'Hạt Alpha (α) phát ra trong quá trình phóng xạ tự nhiên có bản chất là gì?',
    options: [
      'Dòng các hạt electron mang điện tích âm',
      'Hạt nhân nguyên tử Helium (⁴₂He) gồm 2 proton và 2 neutron',
      'Sóng điện từ có bước sóng cực ngắn',
      'Dòng các hạt neutron không mang điện'
    ],
    correctIndex: 1,
    explanation: 'Hạt alpha kí hiệu là ⁴₂α hoặc ⁴₂He, là hạt nhân của nguyên tử Helium mang điện tích +2 và số khối bằng 4.',
    hint: 'Alpha có số khối 4 và điện tích +2.',
    detailedSolution: [
      'Tia alpha (α) là dòng hạt nhân nguyên tử Helium ⁴₂He²⁺.',
      'Khối lượng xấp xỉ 4 amu, điện tích +2.',
      'Khả năng ion hóa rất mạnh nhưng khả năng đâm xuyên yếu.'
    ],
    tags: ['Phản ứng hạt nhân', 'Tia Alpha', 'Phóng xạ']
  },
  {
    id: 'p1-04',
    lessonId: 3,
    level: 1,
    levelName: 'Mức 1 – Nhớ & Hiểu',
    title: 'Khái niệm Năng lượng hoạt hóa (Ea)',
    question: 'Năng lượng hoạt hóa (Ea) của một phản ứng hóa học được định nghĩa là:',
    options: [
      'Nhiệt lượng tỏa ra khi phản ứng kết thúc hoàn toàn',
      'Năng lượng tối thiểu mà các chất phản ứng cần có để phản ứng hóa học có thể xảy ra',
      'Năng lượng cần thiết để làm lạnh chất phản ứng',
      'Hiệu số giữa nhiệt độ đầu và nhiệt độ cuối của phản ứng'
    ],
    correctIndex: 1,
    explanation: 'Ea là năng lượng tối thiểu mà các phân tử chất phản ứng phải sở hữu để khi va chạm với nhau có thể phá vỡ liên kết cũ và hình thành liên kết mới (va chạm hiệu quả).',
    hint: 'Từ "hoạt hóa" nghĩa là kích hoạt để phân tử đủ năng lượng phản ứng.',
    detailedSolution: [
      'Năng lượng hoạt hóa Ea là rào cản năng lượng cần vượt qua để chuyển chất đầu thành chất trung gian hoạt động.',
      'Ea càng nhỏ thì phản ứng xảy ra càng nhanh ở nhiệt độ phòng.'
    ],
    tags: ['Năng lượng hoạt hóa', 'Tốc độ phản ứng', 'Ea']
  },
  {
    id: 'p1-05',
    lessonId: 4,
    level: 1,
    levelName: 'Mức 1 – Nhớ & Hiểu',
    title: 'Ý nghĩa của dấu biến thiên năng lượng tự do Gibbs (ΔG)',
    question: 'Ở điều kiện nhiệt độ và áp suất không đổi, một phản ứng hóa học tự xảy ra theo chiều thuận khi đại lượng nào thỏa mãn?',
    options: ['ΔrG° > 0', 'ΔrG° < 0', 'ΔrG° = 0', 'ΔrS° < 0'],
    correctIndex: 1,
    explanation: 'Tiêu chuẩn tự phát: Phản ứng tự xảy ra khi biến thiên năng lượng tự do Gibbs ΔrG° < 0. Giá trị ΔrG° càng âm, phản ứng càng dễ xảy ra.',
    hint: 'Năng lượng Gibbs giảm (mang dấu âm) là điều kiện tự phát.',
    detailedSolution: [
      'Biểu thức Gibbs: ΔG = ΔH - T·ΔS.',
      'Nếu ΔG < 0: Quá trình tự diễn biến (tự phát).',
      'Nếu ΔG = 0: Hệ ở trạng thái cân bằng động.',
      'Nếu ΔG > 0: Phản ứng không tự xảy ra theo chiều thuận.'
    ],
    tags: ['Năng lượng Gibbs', 'Entropy', 'Nhiệt động học']
  },

  // ===================== MỨC 2: ÁP DỤNG =====================
  {
    id: 'p2-01',
    lessonId: 1,
    level: 2,
    levelName: 'Mức 2 – Áp dụng',
    title: 'Dự đoán hình học và phân cực của SO₃ và NCl₃',
    question: 'Dựa vào mô hình VSEPR, hãy xác định dạng hình học và tính phân cực của phân tử SO₃ và NCl₃:',
    options: [
      'SO₃: Tam giác phẳng (không phân cực); NCl₃: Chóp tam giác (phân cực)',
      'SO₃: Tứ diện (phân cực); NCl₃: Tam giác phẳng (không phân cực)',
      'Cả hai đều là hình chữ V và đều phân cực',
      'Cả hai đều có cấu trúc đường thẳng và không phân cực'
    ],
    correctIndex: 0,
    explanation: 'SO₃ có dạng AX₃ (tam giác phẳng 120° đối xứng cao -> phân tử không phân cực). NCl₃ có dạng AX₃E₁ (chóp tam giác bất đối xứng do còn 1 cặp e tự do của N -> phân tử phân cực).',
    hint: 'Kiểm tra xem nguyên tử trung tâm có còn cặp electron tự do nào không để xét tính đối xứng.',
    detailedSolution: [
      '1. Phân tử SO₃: S có 6 e hóa trị liên kết với 3 nguyên tử O, không còn e riêng -> dạng AX₃ (Tam giác phẳng, góc 120°). Sự đối xứng hoàn hảo làm triệt tiêu momen lưỡng cực -> Phân tử không phân cực.',
      '2. Phân tử NCl₃: N có 5 e hóa trị, 3 e liên kết với 3 Cl, còn 1 cặp e riêng -> dạng AX₃E₁ (Chóp tam giác, góc < 109,5°). Phân tử bất đối xứng -> Phân tử phân cực.'
    ],
    tags: ['VSEPR', 'Phân cực', 'SO3', 'NCl3']
  },
  {
    id: 'p2-02',
    lessonId: 2,
    level: 2,
    levelName: 'Mức 2 – Áp dụng',
    title: 'Bảo toàn số khối và điện tích tìm hạt nhân con',
    question: 'Hoàn thành phương trình phản ứng hạt nhân sau: ²³⁸₉₂U + ¹₀n -> ²³⁹₉₃Np + X. Hạt X là hạt gì?',
    options: ['⁴₂He (hạt α)', '⁰₋₁e (hạt β⁻)', '⁰₊₁e (hạt positron β⁺)', '¹₁p (proton)'],
    correctIndex: 1,
    explanation: 'Bảo toàn số khối: 238 + 1 = 239 + A_X -> A_X = 0. Bảo toàn điện tích: 92 + 0 = 93 + Z_X -> Z_X = -1. Hạt có A=0, Z=-1 là hạt electron (Beta trừ ⁰₋₁e hoặc ⁰₋₁β).',
    hint: 'Tổng số khối trước: 238+1=239. Tổng điện tích trước: 92+0=92.',
    detailedSolution: [
      'Định luật bảo toàn số khối: A(U) + A(n) = A(Np) + A(X) <=> 238 + 1 = 239 + A(X) => A(X) = 0.',
      'Định luật bảo toàn điện tích: Z(U) + Z(n) = Z(Np) + Z(X) <=> 92 + 0 = 93 + Z(X) => Z(X) = -1.',
      'Hạt có số khối 0 và điện tích -1 chính là hạt electron (tia Beta âm: ⁰₋₁e / ⁰₋₁β).'
    ],
    tags: ['Bảo toàn hạt nhân', 'Uranium', 'Beta']
  },
  {
    id: 'p2-03',
    lessonId: 2,
    level: 2,
    levelName: 'Mức 2 – Áp dụng',
    title: 'Tính toán chu kì bán rã của Đồng vị Y tế Iodine-131',
    question: 'Đồng vị phóng xạ ¹³¹I dùng trong điều trị ung thư tuyến giáp có chu kì bán rã T = 8 ngày. Sau 24 ngày, tỉ lệ phần trăm lượng ¹³¹I ban đầu còn lại trong cơ thể là bao nhiêu?',
    options: ['50%', '25%', '12,5%', '6,25%'],
    correctIndex: 2,
    explanation: 'Số chu kì bán rã đã trôi qua: k = t / T = 24 / 8 = 3 chu kì. Lượng còn lại: m / m₀ = (1/2)³ = 1/8 = 12,5%.',
    hint: '24 ngày là gấp mấy lần của 8 ngày? (3 chu kì).',
    detailedSolution: [
      'Số chu kì k = 24 / 8 = 3 chu kì bán rã.',
      'Sau 1 chu kì (8 ngày): còn 50%.',
      'Sau 2 chu kì (16 ngày): còn 25%.',
      'Sau 3 chu kì (24 ngày): còn 12,5% lượng ban đầu.'
    ],
    tags: ['Chu kì bán rã', 'I-131', 'Y học hạt nhân']
  },
  {
    id: 'p2-04',
    lessonId: 3,
    level: 2,
    levelName: 'Mức 2 – Áp dụng',
    title: 'Tính hằng số tốc độ k theo phương trình Arrhenius',
    question: 'Cho phản ứng: 2NOCl (g) -> 2NO (g) + Cl₂ (g) có Ea = 100 kJ/mol. Ở 350 K, hằng số tốc độ k₁ = 8,0·10⁻⁶ L/(mol·s). Tính hằng số tốc độ k₂ ở 400 K (cho R = 8,314 J/(mol·K)).',
    options: [
      'k₂ ≈ 5,9 · 10⁻⁴ L/(mol·s)',
      'k₂ ≈ 1,2 · 10⁻⁵ L/(mol·s)',
      'k₂ ≈ 8,0 · 10⁻³ L/(mol·s)',
      'k₂ ≈ 4,3 · 10⁻⁶ L/(mol·s)'
    ],
    correctIndex: 0,
    explanation: 'Áp dụng ln(k₂/k₁) = (Ea/R)·(1/T₁ - 1/T₂) = (100.000 / 8,314) × (1/350 - 1/400) = 12027,9 × 0,0003571 ≈ 4,295. Suy ra k₂ = k₁ · e^4,295 = 8,0·10⁻⁶ × 73,36 ≈ 5,9 · 10⁻⁴ L/(mol·s).',
    hint: 'Đổi Ea = 100 kJ/mol = 100.000 J/mol rồi áp dụng công thức Arrhenius 2 nhiệt độ.',
    detailedSolution: [
      '1. Đổi đơn vị: Ea = 100 kJ/mol = 100 000 J/mol.',
      '2. Áp dụng phương trình Arrhenius:',
      'ln(k₄₀₀ / k₃₅₀) = (Ea / R) * (1/350 - 1/400)',
      '= (100 000 / 8,314) * ( (400 - 350) / (350 * 400) )',
      '= 12 027,9 * 0,00035714 = 4,2957',
      '3. Suy ra tỉ số: k₄₀₀ / k₃₅₀ = e^(4,2957) ≈ 73,38',
      '4. Hằng số k₄₀₀ = 8,0 * 10^(-6) * 73,38 ≈ 5,9 * 10^(-4) L/(mol.s).'
    ],
    tags: ['Arrhenius', 'Tính toán k', 'Nhiệt độ']
  },
  {
    id: 'p2-05',
    lessonId: 4,
    level: 2,
    levelName: 'Mức 2 – Áp dụng',
    title: 'Tính biến thiên Entropy chuẩn của phản ứng oxi hóa SO₂',
    question: 'Tính ΔrS°₂₉₈ của phản ứng: SO₂ (g) + 1/2 O₂ (g) -> SO₃ (g). Biết S°₂₉₈ của SO₃(g) = 256,7 J/(mol·K); SO₂(g) = 248,1 J/(mol·K); O₂(g) = 205,0 J/(mol·K).',
    options: ['-93,9 J/K', '+93,9 J/K', '-196,4 J/K', '+108,6 J/K'],
    correctIndex: 0,
    explanation: 'ΔrS°₂₉₈ = S°(SO₃) - [S°(SO₂) + 1/2 S°(O₂)] = 256,7 - [248,1 + 0,5 × 205,0] = 256,7 - 350,6 = -93,9 J/K (giảm số mol khí từ 1,5 mol xuống 1 mol nên ΔS âm).',
    hint: 'ΔrS° = S°(sản phẩm) - Tổng S°(chất đầu nhân hệ số).',
    detailedSolution: [
      'Phương trình: SO₂(g) + 1/2 O₂(g) -> SO₃(g).',
      'ΔrS°₂₉₈ = S°₂₉₈(SO₃, g) - [ S°₂₉₈(SO₂, g) + 1/2 * S°₂₉₈(O₂, g) ]',
      '= 256,7 - [ 248,1 + 0,5 * 205,0 ]',
      '= 256,7 - 350,6 = -93,9 J/K.',
      'Nhận xét: Phản ứng giảm 0,5 mol khí nên biến thiên entropy mang dấu âm là hoàn toàn phù hợp.'
    ],
    tags: ['Entropy', 'SO2', 'Nhiệt động học']
  },

  // ===================== MỨC 3: VẬN DỤNG =====================
  {
    id: 'p3-01',
    lessonId: 1,
    level: 3,
    levelName: 'Mức 3 – Vận dụng',
    title: 'Xác định trạng thái lai hóa của các nguyên tử Carbon trong hợp chất hữu cơ',
    question: 'Cho phân tử H₃C(1)—C(2)(=O)—C(3)≡N. Trạng thái lai hóa của 3 nguyên tử Carbon (1), (2) và (3) lần lượt là:',
    options: [
      'C(1): sp³, C(2): sp², C(3): sp',
      'C(1): sp², C(2): sp³, C(3): sp',
      'C(1): sp³, C(2): sp, C(3): sp²',
      'C(1): sp, C(2): sp², C(3): sp³'
    ],
    correctIndex: 0,
    explanation: 'C(1) tạo 4 liên kết đơn xung quanh (AX₄) -> lai hóa sp³. C(2) tạo 1 liên kết đôi C=O và 2 liên kết đơn (AX₃) -> lai hóa sp². C(3) tạo 1 liên kết ba C≡N và 1 liên kết đơn (AX₂) -> lai hóa sp.',
    hint: 'Quy tắc nhanh: C liên kết đơn (sp³), C có 1 liên kết đôi (sp²), C có 1 liên kết ba hoặc 2 nối đôi liền nhau (sp).',
    detailedSolution: [
      '- C(1) trong nhóm -CH₃: có 4 liên kết đơn σ (với 3 H và 1 C) -> trạng thái lai hóa sp³ (góc ~ 109,5°).',
      '- C(2) trong nhóm -C(=O)-: có 1 liên kết đôi C=O (1σ + 1π) và 2 liên kết đơn C-C -> có 3 hướng liên kết σ -> trạng thái lai hóa sp² (góc ~ 120°).',
      '- C(3) trong nhóm -C≡N: có 1 liên kết ba C≡N (1σ + 2π) và 1 liên kết đơn C-C -> có 2 hướng liên kết σ -> trạng thái lai hóa sp (góc 180° thẳng hàng).'
    ],
    tags: ['Lai hóa Carbon', 'Hóa hữu cơ', 'sp/sp2/sp3']
  },
  {
    id: 'p3-02',
    lessonId: 3,
    level: 3,
    levelName: 'Mức 3 – Vận dụng',
    title: 'Chứng minh mức độ tăng tốc độ của chất xúc tác ở 600 K',
    question: 'Một phản ứng hóa học xảy ra ở 600 K. Khi sử dụng chất xúc tác, năng lượng hoạt hóa Ea giảm đi một lượng ΔEa = 41,9 kJ/mol (41 900 J/mol). Tốc độ phản ứng có xúc tác (kx) tăng gấp bao nhiêu lần so với phản ứng không có xúc tác (ko)?',
    options: ['Tăng khoảng 4 445 lần', 'Tăng khoảng 600 lần', 'Tăng đúng 41,9 lần', 'Tăng 8,314 lần'],
    correctIndex: 0,
    explanation: 'Tỉ số kx / ko = e^(ΔEa / (R·T)) = e^(41900 / (8,314 × 600)) = e^(8,40) ≈ 4 445 lần!',
    hint: 'Áp dụng công thức tỉ số xúc tác: kx / ko = e^(ΔEa / RT).',
    detailedSolution: [
      '1. Biểu thức tốc độ không xúc tác: ko = A * e^(-Ea_o / RT)',
      '2. Biểu thức tốc độ có xúc tác: kx = A * e^(-Ea_x / RT)',
      '3. Lập tỉ số: kx / ko = e^( (Ea_o - Ea_x) / RT ) = e^( ΔEa / RT )',
      '4. Thay số: ΔEa = 41 900 J/mol; R = 8,314 J/(mol.K); T = 600 K',
      '-> Số mũ = 41 900 / (8,314 * 600) = 41 900 / 4988,4 ≈ 8,3995',
      '-> kx / ko = e^(8,40) ≈ 4 445 lần.',
      'Kết luận: Chỉ cần giảm 41,9 kJ/mol Ea, tốc độ phản ứng đã tăng vọt hơn 4400 lần!'
    ],
    tags: ['Chất xúc tác', 'Arrhenius', 'Tăng tốc độ']
  },
  {
    id: 'p3-03',
    lessonId: 4,
    level: 3,
    levelName: 'Mức 3 – Vận dụng',
    title: 'Xét khả năng tự xảy ra của phản ứng nhiệt phân KClO₃ ở 25°C',
    question: 'Phản ứng nhiệt phân: KClO₃(s) -> KCl(s) + 3/2 O₂(g) có ΔrH°₂₉₈ = -39,0 kJ và ΔrS°₂₉₈ = +247,0 J/K. Hãy tính ΔrG°₂₉₈ và kết luận phản ứng có tự xảy ra ở 25°C hay không?',
    options: [
      'ΔrG° = -112,6 kJ < 0 -> Phản ứng có khả năng tự xảy ra ở điều kiện chuẩn 25°C',
      'ΔrG° = +34,6 kJ > 0 -> Phản ứng không thể tự xảy ra ở 25°C',
      'ΔrG° = -39,0 kJ -> Phản ứng đạt cân bằng',
      'ΔrG° = +112,6 kJ -> Phản ứng thu nhiệt mạnh'
    ],
    correctIndex: 0,
    explanation: 'ΔrG°₂₉₈ = ΔrH° - T·ΔrS° = -39,0 - 298 × (247,0 × 10⁻³) = -39,0 - 73,61 = -112,6 kJ < 0. Do ΔrG° < 0 nên về mặt nhiệt động học phản ứng tự xảy ra ở 25°C.',
    hint: 'ΔrG° = ΔrH° - 298 × (ΔrS° / 1000).',
    detailedSolution: [
      '1. Dữ kiện bài toán:',
      '- ΔrH°₂₉₈ = -39,0 kJ (phản ứng tỏa nhiệt)',
      '- ΔrS°₂₉₈ = +247,0 J/K = +0,247 kJ/K (tăng 1,5 mol khí O₂ làm tăng entropy)',
      '- Nhiệt độ chuẩn T = 25 + 273 = 298 K',
      '2. Tính năng lượng tự do Gibbs chuẩn:',
      'ΔrG°₂₉₈ = ΔrH°₂₉₈ - T * ΔrS°₂₉₈',
      '= -39,0 - 298 * 0,247',
      '= -39,0 - 73,606 = -112,6 kJ',
      '3. Kết luận: Vì ΔrG°₂₉₈ = -112,6 kJ < 0, phản ứng có xu hướng nhiệt động tự diễn biến ở 25°C (tuy nhiên ở nhiệt độ phòng tốc độ rất chậm do Ea cao, khi đun nóng có MnO₂ làm xúc tác sẽ xảy ra nhanh chóng).'
    ],
    tags: ['Gibbs', 'KClO3', 'Nhiệt động học']
  },
  {
    id: 'p3-04',
    lessonId: 4,
    level: 3,
    levelName: 'Mức 3 – Vận dụng',
    title: 'Khử quặng Fe₂O₃ bằng than chì: Điều kiện nhiệt độ tối thiểu để phản ứng tự xảy ra',
    question: 'Phản ứng luyện kim: 3C(graphite, s) + 2Fe₂O₃(s) -> 4Fe(s) + 3CO₂(g) có ΔrH° = +470,5 kJ và ΔrS° = +558,4 J/K (+0,5584 kJ/K). Giả sử ΔH và ΔS không đổi theo nhiệt độ, nhiệt độ tối thiểu (T_min) để phản ứng bắt đầu tự xảy ra (ΔG < 0) là:',
    options: [
      'T > 842,6 K (khoảng 569,6°C)',
      'T > 298 K (25°C)',
      'T > 1200 K (khoảng 927°C)',
      'T > 470,5 K'
    ],
    correctIndex: 0,
    explanation: 'Để phản ứng tự xảy ra thì ΔG = ΔH - T·ΔS < 0 <=> T > ΔH / ΔS = 470,5 / 0,5584 ≈ 842,6 K (~ 569,6°C). Do đó ở nhiệt độ thường phản ứng không xảy ra, nhưng trong lò luyện gang thép nhiệt độ cao trên 570°C phản ứng xảy ra thuận lợi.',
    hint: 'Tìm điều kiện T sao cho ΔH - T·ΔS < 0 -> T > ΔH / ΔS.',
    detailedSolution: [
      '1. Ở nhiệt độ phòng (298 K): ΔG° = 470,5 - 298 * 0,5584 = +304,1 kJ > 0 -> phản ứng không thể tự xảy ra.',
      '2. Vì phản ứng có ΔH > 0 (thu nhiệt) và ΔS > 0 (sinh ra 3 mol khí CO₂), phản ứng sẽ tự xảy ra ở nhiệt độ cao khi số hạng T·ΔS thắng ΔH.',
      '3. Điều kiện tự xảy ra: ΔG < 0 <=> ΔH - T * ΔS < 0',
      '<=> T > ΔH / ΔS = 470,5 / 0,5584 ≈ 842,6 K',
      'Đổi sang độ C: t = 842,6 - 273 = 569,6°C.',
      '4. Ý nghĩa thực tiễn: Đây là cơ sở khoa học giải thích tại sao trong ngành luyện kim phải nung lò cao ở nhiệt độ cao thì carbon mới khử được quặng sắt oxit!'
    ],
    tags: ['Luyện kim', 'Gibbs', 'Nhiệt độ tự phát', 'Fe2O3']
  }
];
