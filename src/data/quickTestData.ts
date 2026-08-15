import { TestQuestion } from '../types';

export const quickTestQuestions: TestQuestion[] = [
  {
    id: 1,
    lessonId: 1,
    topic: 'Liên kết & VSEPR',
    level: 'Nhận biết',
    question: 'Theo mô hình VSEPR, phân tử nào sau đây có cấu trúc hình học tứ diện đều với góc liên kết 109,5°?',
    options: ['CO₂', 'BF₃', 'CH₄', 'H₂O'],
    correctIndex: 2,
    explanation: 'CH₄ có dạng AX₄ (4 cặp electron liên kết, 0 cặp e riêng) phân bố đối xứng hoàn hảo trong không gian thành hình tứ diện đều góc 109,5°.'
  },
  {
    id: 2,
    lessonId: 1,
    topic: 'Lai hóa Orbital',
    level: 'Thông hiểu',
    question: 'Sự lai hóa sp² là sự tổ hợp giữa các orbital nào và tạo ra bao nhiêu AO lai hóa?',
    options: [
      '1 AO s + 1 AO p tạo 2 AO sp (góc 180°)',
      '1 AO s + 2 AO p tạo 3 AO sp² (góc 120°)',
      '1 AO s + 3 AO p tạo 4 AO sp³ (góc 109,5°)',
      '2 AO s + 1 AO p tạo 3 AO sp²'
    ],
    correctIndex: 1,
    explanation: 'Lai hóa sp² là sự tổ hợp của 1 orbital ns và 2 orbital np tạo thành 3 orbital lai hóa sp² đồng nhất hướng ra 3 đỉnh của một tam giác đều góc 120°.'
  },
  {
    id: 3,
    lessonId: 2,
    topic: 'Phóng xạ hạt nhân',
    level: 'Nhận biết',
    question: 'Tia phóng xạ nào mang điện tích -1, có bản chất là dòng electron tốc độ cao?',
    options: ['Tia Alpha (α)', 'Tia Beta trừ (β⁻)', 'Tia Positron (β⁺)', 'Tia Gamma (γ)'],
    correctIndex: 1,
    explanation: 'Tia Beta trừ kí hiệu là ⁰₋₁e hoặc ⁰₋₁β, là dòng hạt electron mang điện tích -1 và số khối coi như bằng 0.'
  },
  {
    id: 4,
    lessonId: 2,
    topic: 'Chu kì bán rã & Bảo toàn',
    level: 'Áp dụng',
    question: 'Tìm hạt nhân X trong phản ứng hạt nhân sau: ²⁷₁₃Al + ⁴₂He -> X + ¹₀n',
    options: ['³⁰₁₄Si', '³⁰₁₅P', '³¹₁₅P', '²⁸₁₄Si'],
    correctIndex: 1,
    explanation: 'Bảo toàn số khối: 27 + 4 = A_X + 1 -> A_X = 30. Bảo toàn điện tích: 13 + 2 = Z_X + 0 -> Z_X = 15. Hạt nhân có Z=15 chính là Phosphorus: ³⁰₁₅P.'
  },
  {
    id: 5,
    lessonId: 2,
    topic: 'Ứng dụng đồng vị',
    level: 'Thực tiễn',
    question: 'Để kiểm tra và điều trị bệnh ung thư tuyến giáp trong y học hạt nhân, bác sĩ sử dụng đồng vị phóng xạ nào?',
    options: ['Carbon-14 (¹⁴C)', 'Cobalt-60 (⁶⁰Co)', 'Iodine-131 (¹³¹I)', 'Uranium-235 (²³⁵U)'],
    correctIndex: 2,
    explanation: '¹³¹I được hấp thụ đặc hiệu bởi các tế bào tuyến giáp và phát bức xạ để tiêu diệt các tế bào ung thư khu trú.'
  },
  {
    id: 6,
    lessonId: 3,
    topic: 'Năng lượng hoạt hóa',
    level: 'Thông hiểu',
    question: 'Khi tăng nhiệt độ của phản ứng hóa học, tốc độ phản ứng tăng chủ yếu là do:',
    options: [
      'Năng lượng hoạt hóa Ea của phản ứng bị giảm đi',
      'Động năng các phân tử tăng lên, làm tăng số phân tử hoạt động và số va chạm hiệu quả',
      'Chất phản ứng bị bay hơi hoàn toàn',
      'Khối lượng các chất tham gia phản ứng tự tăng lên'
    ],
    correctIndex: 1,
    explanation: 'Nhiệt độ tăng không làm thay đổi Ea nhưng làm tăng phân bố số phân tử có năng lượng lớn hơn Ea, do đó làm tăng tần số va chạm hiệu quả.'
  },
  {
    id: 7,
    lessonId: 3,
    topic: 'Cơ chế Chất xúc tác',
    level: 'Vận dụng',
    question: 'Nhận định nào sau đây về chất xúc tác là CHÍNH XÁC?',
    options: [
      'Chất xúc tác làm chuyển dịch vị trí cân bằng hóa học theo chiều thuận',
      'Chất xúc tác làm giảm năng lượng hoạt hóa (Ea) của phản ứng bằng cách tạo ra các giai đoạn phản ứng trung gian mới',
      'Chất xúc tác bị tiêu hao dần theo thời gian phản ứng',
      'Mọi chất xúc tác đều làm tăng tốc độ phản ứng như nhau cho tất cả các chất'
    ],
    correctIndex: 1,
    explanation: 'Chất xúc tác không làm thay đổi vị trí cân bằng và không bị mất đi sau phản ứng, nhiệm vụ của nó là hạ thấp hàng rào thế năng Ea bằng con đường phản ứng trung gian.'
  },
  {
    id: 8,
    lessonId: 4,
    topic: 'Entropy (S)',
    level: 'Nhận biết',
    question: 'Phát biểu nào sau đây về Entropy (S) là ĐÚNG?',
    options: [
      'Entropy là thước đo mức độ trật tự tuyệt đối của hệ',
      'Đối với cùng một chất, Entropy ở thể rắn lớn hơn thể lỏng và lớn hơn thể khí',
      'Entropy là thước đo mức độ hỗn loạn (mất trật tự) của hệ, với S(khí) > S(lỏng) > S(rắn)',
      'Entropy của mọi chất luôn bằng 0 ở nhiệt độ phòng'
    ],
    correctIndex: 2,
    explanation: 'Entropy là thước đo mức độ mất trật tự của hệ vi mô. Thể khí có độ tự do chuyển động cao nhất nên S(khí) > S(lỏng) > S(rắn).'
  },
  {
    id: 9,
    lessonId: 4,
    topic: 'Năng lượng Gibbs (ΔG)',
    level: 'Áp dụng',
    question: 'Cho phản ứng: A(k) + B(k) -> C(k) có ΔH = -50 kJ và ΔS = -100 J/K (-0,1 kJ/K). Ở 298 K, giá trị ΔG và chiều của phản ứng là:',
    options: [
      'ΔG = -20,2 kJ -> Phản ứng tự xảy ra theo chiều thuận',
      'ΔG = +20,2 kJ -> Phản ứng không tự xảy ra',
      'ΔG = -79,8 kJ -> Phản ứng đạt cân bằng',
      'ΔG = -50,0 kJ -> Phản ứng không phụ thuộc nhiệt độ'
    ],
    correctIndex: 0,
    explanation: 'ΔG = ΔH - T·ΔS = -50 - 298 × (-0,1) = -50 + 29,8 = -20,2 kJ < 0. Do ΔG < 0 nên phản ứng tự xảy ra ở 298 K.'
  },
  {
    id: 10,
    lessonId: 4,
    topic: 'Thực tiễn Nhiệt động học',
    level: 'Thực tiễn',
    question: 'Trong công nghiệp luyện kim, phản ứng khử oxide kim loại 3C(s) + 2Fe₂O₃(s) -> 4Fe(s) + 3CO₂(g) có ΔH > 0 và ΔS > 0. Vì sao cần phải nung lò ở nhiệt độ rất cao (trên 600°C)?',
    options: [
      'Vì nung nóng để làm bay hơi kim loại Fe',
      'Vì phản ứng có ΔH > 0 và ΔS > 0, cần nhiệt độ T đủ cao để số hạng T·ΔS lớn hơn ΔH, làm cho ΔG = ΔH - T·ΔS < 0 (tự phát)',
      'Vì nhiệt độ cao làm than chì biến thành kim cương',
      'Vì nhiệt độ cao làm khí CO₂ ngưng tụ thành chất lỏng'
    ],
    correctIndex: 1,
    explanation: 'Khi cả ΔH > 0 và ΔS > 0, ở nhiệt độ thấp ΔG > 0 (không xảy ra). Chỉ khi nhiệt độ T > ΔH/ΔS (khoảng > 843 K ~ 570°C), số hạng T·ΔS mới đủ lớn để kéo ΔG âm, giúp phản ứng tự diễn biến.'
  }
];
