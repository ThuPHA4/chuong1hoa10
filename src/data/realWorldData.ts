import { RealWorldCase } from '../types';

export const realWorldCases: RealWorldCase[] = [
  {
    id: 'rw-1',
    lessonId: 3,
    title: 'Bí ẩn giọt nước kích nổ hỗn hợp nhôm và iot',
    category: 'Đời sống',
    icon: 'FlaskConical',
    story: 'Trong một giờ thực hành Hóa học, thầy giáo trộn lẫn bột nhôm (Al) màu xám bạc với bột tinh thể iot (I₂) màu tím sẫm trong một chén sứ khô ráo. Thật kì lạ, hai chất tiếp xúc với nhau hàng chục phút ở nhiệt độ phòng nhưng không hề có phản ứng gì xảy ra. Sau đó, thầy chỉ nhỏ duy nhất 1 giọt nước cất vào giữa hỗn hợp. Ngay lập tức, một cột khói màu tím bốc lên cuồn cuộn kèm theo ngọn lửa sáng rực tỏa nhiệt mãnh liệt!',
    question: 'Em hãy giải thích vì sao chỉ một giọt nước nhỏ bé lại có thể làm bùng phát phản ứng mãnh liệt như vậy?',
    options: [
      'Nước tác dụng với nhôm sinh ra khí Hydro phát nổ',
      'Nước đóng vai trò là chất xúc tác dị thể, hòa tan một phần iot và làm giảm năng lượng hoạt hóa (Ea), kích hoạt phản ứng xảy ra tức thì',
      'Nước làm tăng nhiệt độ hỗn hợp lên 1000°C',
      'Nước là chất oxi hóa cực mạnh trong phản ứng này'
    ],
    correctIndex: 1,
    scientificExplanation: 'Phản ứng 2Al(s) + 3I₂(s) -> 2AlI₃(s) có năng lượng hoạt hóa (Ea) khá cao ở trạng thái rắn khô do các phân tử khó tiếp xúc trực tiếp. Giọt nước đóng vai trò chất xúc tác dị thể: nước hòa tan một phần I₂, tạo môi trường tiếp xúc bề mặt linh động giữa các ion/phân tử, làm giảm đột ngột hàng rào năng lượng hoạt hóa Ea. Khi phản ứng khởi phát, lượng nhiệt tỏa ra cực lớn tiếp tục duy trì và làm thăng hoa iot tạo khói tím đặc trưng!',
    challenge: {
      question: 'Sau khi phản ứng kết thúc hoàn toàn, nếu ta làm khô và cân lại lượng nước ban đầu (giả sử không bị bay hơi), lượng nước có bị hao hụt theo phương trình hóa học không?',
      answer: 'Không! Vì nước là chất xúc tác, theo định nghĩa chất xúc tác chỉ tham gia làm thay đổi cơ chế phản ứng để giảm Ea nhưng không bị biến đổi về chất và khối lượng sau khi phản ứng kết thúc.'
    }
  },
  {
    id: 'rw-2',
    lessonId: 2,
    title: 'Định tuổi cổ vật nghìn năm bằng đồng vị Carbon-14',
    category: 'Đời sống',
    icon: 'Clock',
    story: 'Một đoàn thám hiểm khai quật được một cỗ quan tài gỗ cổ tại khu lăng mộ hoàng gia. Khi lấy mẫu gỗ phân tích trong phòng thí nghiệm hạt nhân, các nhà khoa học đo được tỉ lệ đồng vị phóng xạ ¹⁴C trong mẫu gỗ chỉ còn đúng 25% so với tỉ lệ ¹⁴C trong một khúc gỗ tươi mới chặt ngoài tự nhiên.',
    question: 'Biết chu kì bán rã của Carbon-14 là 5730 năm, em hãy ước tính niên đại (tuổi) của cỗ quan tài gỗ này?',
    options: [
      'Khoảng 2 865 năm',
      'Khoảng 5 730 năm',
      'Khoảng 11 460 năm (trải qua 2 chu kì bán rã)',
      'Khoảng 22 920 năm'
    ],
    correctIndex: 2,
    scientificExplanation: 'Cây cối khi còn sống liên tục quang hợp hấp thụ CO₂ chứa ¹⁴C từ khí quyển. Khi cây bị chặt làm quan tài, quá trình trao đổi chất dừng lại, ¹⁴C trong gỗ bắt đầu phân rã theo chu kì bán rã T = 5730 năm. Lượng ¹⁴C còn lại 25% = (1/2)² nghĩa là đã trải qua đúng k = 2 chu kì bán rã. Vậy tuổi của cỗ quan tài là: t = 2 × 5730 = 11 460 năm!',
    challenge: {
      question: 'Nếu ta tìm thấy một mẫu xương khủng long hóa thạch có niên đại 65 triệu năm, ta có thể dùng phương pháp đo Carbon-14 để định tuổi được không? Vì sao?',
      answer: 'Không thể! Vì chu kì bán rã của Carbon-14 chỉ là 5730 năm, sau khoảng 10-13 chu kì (khoảng 60.000 - 75.000 năm), lượng ¹⁴C còn lại quá nhỏ đến mức không thể đo đạc chính xác. Để định tuổi mẫu đá và hóa thạch hàng triệu đến hàng tỉ năm, các nhà địa chất phải dùng đồng vị có chu kì cực lớn như Uranium-238 (T = 4,5 tỉ năm) hoặc Potassium-40.'
    }
  },
  {
    id: 'rw-3',
    lessonId: 3,
    title: 'Vì sao một số người bị đau bụng, đầy hơi khi uống sữa tươi?',
    category: 'Y học',
    icon: 'Milk',
    story: 'Bạn Nam sau khi uống một cốc sữa bò tươi thì khoảng 30 phút sau bắt đầu cảm thấy bụng cồn cào, sôi bụng, đầy hơi và phải đi vệ sinh nhiều lần. Trong khi đó, bạn bè cùng lớp uống sữa bình thường không hề có triệu chứng gì. Bác sĩ cho biết Nam mắc hội chứng "Bất dung nạp đường Lactose".',
    question: 'Bản chất sinh hóa học của hiện tượng này liên quan đến loại chất xúc tác sinh học nào?',
    options: [
      'Cơ thể Nam bị thừa quá nhiều acid dạ dày',
      'Ruột non của Nam bị thiếu hụt enzyme xúc tác Lactase, khiến đường lactose không bị thủy phân mà bị vi khuẩn đường ruột lên men sinh khí và acid',
      'Sữa tươi bị biến chất thành chất độc do nhiệt độ',
      'Cơ thể không hấp thụ được canxi trong sữa'
    ],
    correctIndex: 1,
    scientificExplanation: 'Trong sữa có chứa đường đôi lactose (C₁₂H₂₂O₁₁). Ở người bình thường, niêm mạc ruột non tiết ra enzyme Lactase đóng vai trò chất xúc tác sinh học, làm giảm năng lượng hoạt hóa để thủy phân nhanh lactose thành 2 đường đơn dễ hấp thu là glucose và galactose. Khi cơ thể thiếu enzyme này, lactose không được phân giải sẽ đi xuống ruột già, trở thành thức ăn cho vi khuẩn lên men sinh ra nhiều khí (H₂, CO₂, CH₄) và các acid hữu cơ, gây áp lực thẩm thấu hút nước gây sôi bụng, tiêu chảy.',
    challenge: {
      question: 'Làm thế nào các nhà máy sữa có thể sản xuất "Sữa không chứa lactose" (Lactose-free milk) cho người như bạn Nam?',
      answer: 'Họ bổ sung trực tiếp enzyme Lactase tinh khiết vào sữa trong quá trình chế biến công nghiệp. Enzyme này sẽ xúc tác thủy phân toàn bộ đường lactose thành glucose và galactose từ trước, do đó người thiếu enzyme uống vào vẫn hấp thu an toàn và cảm thấy sữa có vị ngọt dịu tự nhiên.'
    }
  },
  {
    id: 'rw-4',
    lessonId: 4,
    title: 'Đá khô (CO₂ rắn) - Hiện tượng thăng hoa tạo khói sân khấu',
    category: 'Đời sống',
    icon: 'Snowflake',
    story: 'Trên các sân khấu ca nhạc hay tiệc cưới, người ta thường thả các viên đá khô (khí carbon dioxide CO₂ được nén đông đặc ở -78,5°C) vào nước ấm. Ngay lập tức, những làn sương khói trắng bồng bềnh phủ kín mặt đất tạo hiệu ứng lung linh tuyệt đẹp. Thậm chí khi để một viên đá khô trên đĩa ở nhiệt độ phòng, nó biến mất dần mà không hề để lại bất kì giọt nước nào!',
    question: 'Tại sao quá trình thăng hoa của CO₂ (chuyển trực tiếp từ thể rắn sang thể khí) là một quá trình thu nhiệt (ΔH > 0) nhưng vẫn tự xảy ra dễ dàng ở nhiệt độ phòng?',
    options: [
      'Vì phản ứng có sự xúc tác của ánh sáng sân khấu',
      'Vì khi chuyển từ thể rắn sang thể khí, độ hỗn loạn tăng vọt (ΔS > 0 rất lớn), ở nhiệt độ phòng T·ΔS > ΔH làm năng lượng tự do Gibbs ΔG = ΔH - T·ΔS < 0',
      'Vì CO₂ tác dụng với oxy không khí tạo thành chất mới',
      'Vì đá khô có áp suất chân không tự hủy'
    ],
    correctIndex: 1,
    scientificExplanation: 'Phương trình chuyển pha: CO₂(s) -> CO₂(g) có ΔH > 0 (thu nhiệt để phá vỡ liên kết tinh thể phân tử). Tuy nhiên, các phân tử khí tự do chuyển động hỗn loạn làm Entropy tăng rất mạnh (ΔS >> 0). Theo phương trình Gibbs: ΔG = ΔH - T·ΔS. Ở nhiệt độ phòng T = 298 K, số hạng nhiệt động T·ΔS lớn hơn năng lượng thu nhiệt ΔH, làm cho ΔG mang giá trị âm (ΔG < 0). Do đó, đá khô tự thăng hoa liên tục mà không cần đun nóng!',
    challenge: {
      question: 'Nếu ta bảo quản đá khô trong một thùng xốp đậy kín nắp thật chặt trong phòng kín, nguy cơ nguy hiểm nào có thể xảy ra?',
      answer: 'Khi CO₂ rắn thăng hoa thành chất khí, thể tích tăng gấp gần 800 lần. Trong thùng kín, áp suất khí tăng vọt có thể gây nổ vật lí làm vỡ tung thùng chứa. Đồng thời, khí CO₂ nặng hơn không khí sẽ chìm xuống sàn nhà làm loãng oxy, gây ngạt thở nguy hiểm trong phòng kín.'
    }
  },
  {
    id: 'rw-5',
    lessonId: 3,
    title: 'Một nguyên tử Clo phá hủy 100.000 phân tử Ozone như thế nào?',
    category: 'Môi trường',
    icon: 'ShieldAlert',
    story: 'Tầng ozone (O₃) ở tầng bình lưu bảo vệ sự sống trên Trái Đất khỏi các tia cực tím (UV) nguy hại. Trước thập niên 1990, các hợp chất CFC (như Freon trong tủ lạnh, máy lạnh) khi rò rỉ lên tầng cao khí quyển bị tia UV bẻ gãy giải phóng ra các gốc Clo tự do (Cl). Điều kinh ngạc là các nhà khoa học phát hiện chỉ một nguyên tử Clo duy nhất có thể phá hủy tới hơn 100.000 phân tử Ozone trước khi bị loại bỏ!',
    question: 'Tại sao một lượng Clo cực nhỏ lại có thể tàn phá lượng Ozone khổng lồ đến như vậy?',
    options: [
      'Clo có khối lượng nguyên tử nặng hơn Ozone',
      'Clo đóng vai trò là chất xúc tác đồng thể trong chu trình phản ứng dây chuyền: tham gia phản ứng phá hủy O₃ rồi lại được tái tạo nguyên vẹn để tiếp tục phá hủy phân tử O₃ tiếp theo',
      'Clo biến Ozone thành acid clohidric',
      'Clo hấp thụ toàn bộ tia UV'
    ],
    correctIndex: 1,
    scientificExplanation: 'Quá trình phá hủy diễn ra theo cơ chế xúc tác 2 giai đoạn:\n- Giai đoạn 1: Cl + O₃ -> ClO + O₂ (Ea rất nhỏ, xảy ra chớp nhoáng)\n- Giai đoạn 2: ClO + O -> Cl + O₂\nTổng cộng: O₃ + O -> 2O₂.\nNguyên tử Clo tham gia vào giai đoạn đầu nhưng lại được giải phóng nguyên vẹn ở giai đoạn sau! Do không bị tiêu hao trong phản ứng, một gốc Clo như một "cỗ máy xúc tác" liên tục lặp lại chu trình hàng trăm ngàn lần.',
    challenge: {
      question: 'Nghị định thư Montreal (1987) cấm sử dụng khí CFC đã giúp lỗ thủng tầng ozone ở Nam Cực dần phục hồi. Điều này chứng minh bài học gì về việc kiểm soát chất xúc tác gây hại trong môi trường?',
      answer: 'Vì chất xúc tác có hoạt tính cực mạnh và không tự mất đi trong phản ứng, việc ngăn chặn triệt để nguồn phát thải chất xúc tác gây hại (CFC) là biện pháp duy nhất và hiệu quả nhất để bảo vệ môi trường toàn cầu.'
    }
  },
  {
    id: 'rw-6',
    lessonId: 4,
    title: 'Công nghệ Haber: Tổng hợp Amoniac (NH₃) nuôi sống nửa nhân loại',
    category: 'Công nghiệp',
    icon: 'Factory',
    story: 'Quá trình tổng hợp Amoniac: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (với ΔH = -92 kJ và ΔS = -198 J/K) là phát minh hóa học vĩ đại nhất thế kỉ 20, cung cấp nguyên liệu sản xuất phân đạm nuôi sống hơn một nửa dân số Trái Đất. Tuy nhiên, các kĩ sư hóa học phải đối mặt với bài toán nhiệt động học nan giải giữa ΔG và tốc độ phản ứng!',
    question: 'Vì sao phản ứng này tỏa nhiệt (ΔH < 0) và giảm entropy (ΔS < 0) nhưng trong công nghiệp người ta lại chọn nhiệt độ khoảng 450°C - 500°C thay vì nhiệt độ phòng 25°C?',
    options: [
      'Vì ở 25°C phản ứng không tự xảy ra',
      'Ở 25°C về mặt nhiệt động ΔG < 0 (thuận lợi), nhưng liên kết ba N≡N quá bền làm năng lượng hoạt hóa Ea quá cao, tốc độ phản ứng gần như bằng 0. Cần nhiệt độ 450-500°C kết hợp xúc tác bột Fe hoạt hóa để tăng tốc độ phản ứng lên mức kinh tế',
      'Vì ở nhiệt độ cao Amoniac mới chuyển thành thể lỏng',
      'Vì nhiệt độ cao làm tăng độ hỗn loạn của Amoniac'
    ],
    correctIndex: 1,
    scientificExplanation: 'Phân tích nhiệt động học và động học:\n1. Nhiệt động học: Vì ΔH < 0 và ΔS < 0, theo công thức ΔG = ΔH - T·ΔS, khi T càng tăng thì số hạng -T·ΔS càng dương, làm cân bằng chuyển dịch ngược lại giảm hiệu suất NH₃.\n2. Động học: Phân tử N₂ có liên kết ba N≡N cực kì bền vững (năng lượng liên kết 945 kJ/mol), làm năng lượng hoạt hóa Ea khổng lồ. Ở 25°C phản ứng mất hàng trăm năm mới tạo được một lượng nhỏ NH₃!\n3. Giải pháp công nghệ: Kĩ sư phải chọn "nhiệt độ thỏa hiệp" 450 - 500°C kết hợp bột Fe hoạt hóa làm chất xúc tác và tăng áp suất cao (200 atm) để phản ứng diễn ra trong vài giây với hiệu suất tối ưu.',
    challenge: {
      question: 'Nếu tăng áp suất từ 1 atm lên 200 atm, cân bằng tổng hợp NH₃ sẽ chuyển dịch theo chiều nào? Vì sao?',
      answer: 'Theo nguyên lí Le Chatelier, khi tăng áp suất, cân bằng sẽ chuyển dịch theo chiều làm giảm số mol khí (từ 4 mol khí N₂ + 3H₂ về 2 mol khí NH₃), tức là chuyển dịch theo chiều thuận tạo ra nhiều NH₃ hơn.'
    }
  }
];
