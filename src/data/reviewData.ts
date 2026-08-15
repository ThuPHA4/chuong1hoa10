import { ReviewQuestion } from '../types';

export const reviewQuestions: ReviewQuestion[] = [
  {
    id: 'rev-1',
    type: 'multiple-choice',
    question: 'Electron hóa trị của các nguyên tố nhóm A trong bảng tuần hoàn thường là:',
    options: [
      'Tổng số electron ở mọi lớp trong nguyên tử',
      'Số electron ở lớp ngoài cùng (và phân lớp d chưa bão hòa nếu có)',
      'Chỉ số hạt proton trong hạt nhân',
      'Số neutron trong hạt nhân nguyên tử'
    ],
    correctAnswer: 'Số electron ở lớp ngoài cùng (và phân lớp d chưa bão hòa nếu có)',
    explanation: 'Đối với nguyên tố nhóm A, số electron hóa trị bằng đúng số electron ở lớp ngoài cùng và bằng số thứ tự của nhóm (ví dụ: nhóm IVA có 4 e hóa trị, VIIA có 7 e hóa trị).',
    hint: 'Nhớ lại bảng tuần hoàn: số thứ tự nhóm A tương ứng với số e lớp ngoài cùng.'
  },
  {
    id: 'rev-2',
    type: 'true-false',
    question: 'Quy tắc octet (bát tử) phát biểu rằng các nguyên tử có xu hướng liên kết để đạt được cấu hình bền vững với 8 electron ở lớp ngoài cùng (giống khí hiếm, trừ Helium có 2 e).',
    correctAnswer: true,
    explanation: 'Chính xác! Để đạt cấu hình bền 8 electron (octet), các nguyên tử có thể nhường, nhận hoặc góp chung các cặp electron hóa trị.',
    hint: 'Khí hiếm có 8 electron lớp ngoài cùng (trừ He) là trạng thái cấu hình rất bền vững.'
  },
  {
    id: 'rev-3',
    type: 'multiple-choice',
    question: 'Liên kết cộng hóa trị được hình thành chủ yếu do cơ chế nào?',
    options: [
      'Lực hút tĩnh điện giữa các ion mang điện tích trái dấu',
      'Sự góp chung một hoặc nhiều cặp electron giữa các nguyên tử',
      'Lực hấp dẫn giữa các hạt nhân mang điện dương',
      'Sự chuyển dịch electron tự do trong toàn bộ mạng tinh thể'
    ],
    correctAnswer: 'Sự góp chung một hoặc nhiều cặp electron giữa các nguyên tử',
    explanation: 'Liên kết cộng hóa trị được tạo nên bởi một hoặc nhiều cặp electron dùng chung giữa hai nguyên tử (ví dụ H-H, H-Cl, O=O).',
    hint: 'Cộng hóa trị = "cùng chia sẻ/góp chung" electron.'
  },
  {
    id: 'rev-4',
    type: 'multiple-choice',
    question: 'Kí hiệu hạt nhân nguyên tử $^A_Z X$ cho ta biết thông tin gì về cấu tạo hạt nhân?',
    options: [
      'A là điện tích hạt nhân (số proton), Z là số khối',
      'A là số khối (tổng proton + neutron), Z là số hiệu nguyên tử (số proton)',
      'A là số electron, Z là số khối',
      'A là thể tích hạt nhân, Z là khối lượng nguyên tử'
    ],
    correctAnswer: 'A là số khối (tổng proton + neutron), Z là số hiệu nguyên tử (số proton)',
    explanation: 'Trong kí hiệu $^A_Z X$: A là số khối ($A = Z + N$), Z là số hiệu nguyên tử = số proton = số electron của nguyên tử trung hòa.',
    hint: 'Chỉ số ở trên là số khối A (lớn hơn), chỉ số ở dưới là điện tích Z.'
  },
  {
    id: 'rev-5',
    type: 'true-false',
    question: 'Phản ứng tỏa nhiệt có biến thiên enthalpy $\\Delta H < 0$, còn phản ứng thu nhiệt có $\\Delta H > 0$.',
    correctAnswer: true,
    explanation: 'Đúng! $\\Delta H < 0$ giải phóng nhiệt lượng ra môi trường xung quanh; $\\Delta H > 0$ hấp thu nhiệt lượng từ môi trường.',
    hint: 'Tỏa nhiệt làm hệ mất bớt nhiệt lượng nên mang dấu âm (–).'
  },
  {
    id: 'rev-6',
    type: 'multiple-choice',
    question: 'Khi nhiệt độ tăng lên, tốc độ của hầu hết các phản ứng hóa học biến đổi như thế nào?',
    options: [
      'Tăng lên vì các phân tử chuyển động nhanh hơn và số va chạm hiệu quả tăng',
      'Giảm đi vì các phân tử bay ra xa nhau không va chạm được',
      'Không thay đổi vì lượng chất tham gia phản ứng giữ nguyên',
      'Luôn giảm về 0 do chất bị phân hủy'
    ],
    correctAnswer: 'Tăng lên vì các phân tử chuyển động nhanh hơn và số va chạm hiệu quả tăng',
    explanation: 'Khi nhiệt độ tăng, động năng phân tử tăng làm tăng tần số va chạm và đặc biệt là tăng tỉ lệ các va chạm có năng lượng vượt qua năng lượng hoạt hóa (va chạm hiệu quả).',
    hint: 'Khi đun nóng thức ăn chín nhanh hơn hay chậm hơn?'
  },
  {
    id: 'rev-7',
    type: 'multiple-choice',
    question: 'Chất khí có độ hỗn loạn (mức độ mất trật tự) của các hạt so với chất lỏng và chất rắn như thế nào?',
    options: [
      'Chất khí có độ hỗn loạn lớn nhất vì các phân tử chuyển động hỗn loạn không ngừng trong toàn bộ thể tích',
      'Chất rắn có độ hỗn loạn lớn nhất do các hạt xếp sát nhau',
      'Chất lỏng và chất khí có độ trật tự như nhau',
      'Chất khí luôn trật tự nhất vì các hạt ở xa nhau'
    ],
    correctAnswer: 'Chất khí có độ hỗn loạn lớn nhất vì các phân tử chuyển động hỗn loạn không ngừng trong toàn bộ thể tích',
    explanation: 'Ở thể khí, các phân tử cách xa nhau và chuyển động tự do hỗn loạn theo mọi hướng, nên độ hỗn loạn (Entropy S) là cao nhất: $S_{khí} > S_{lỏng} > S_{rắn}$.',
    hint: 'Hãy tưởng tượng các hạt trong chất rắn (đứng yên tại nút mạng) và hạt khí (bay tự do).'
  }
];
