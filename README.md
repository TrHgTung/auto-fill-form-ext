## MÔ TẢ KĨ THUẬT

- Khi click vào bất kỳ MỘT trường input hoặc textarea nào, công cụ sẽ bắt sự kiện của người dùng và truyền ra thông tin được lưu sẵn để cho người dùng lựa chọn điền vào trường đó.
- Sau đó, khi click chuột phải tại chính vị trí đó để gọi trình menu ngữ cảnh -> lựa chọn các nội dung khác nhau (do người dùng đã cấu hình) tại các menu con được xổ ra.
- Và cuối cùng, extension sẽ lấy dữ liệu từ file data và điền vào trường đã được focus trước đó.
- Các thông tin mà công cụ có thể hỗ trợ điền: Email và mật khẩu để đăng nhập vào social, các giá trị như trong file sheet Thông tin Profile, gồm có: Tên thương hiệu dài, Tên thương hiệu ngắn, Firstname, Lastname, Website/URL, Username dài, Username ngắn, Ngày sinh, Địa chỉ có dấu, Địa chỉ không dấu, Số điện thoại, ZIP Code / Mã bưu chính, Hashtag, Link Map (CID). Riêng với việc nhập các giá trị Giới thiệu dài, Giới thiệu ngắn 1,2,3,... sẽ có trong 1 bộ source công cụ khác (Đang phát triển - sẽ cập nhật link)

<h2>YÊU CẦU TRƯỚC KHI CÀI ĐẶT EXTENSION</h2>

Không thể dùng được với các trình duyệt Safari / Firefox / Internet Explorer cũ

- Tải xuống (Download ZIP) bộ source tại địa chỉ https://github.com/TrHgTung/ho-tro-dien-thong-tin-dang-nhap-profile, sau đó giải nén ra và ghi nhớ vị trí thư mục đã giải nén.

<img src="./4.png" ><br>

- Thay đổi các nội dung cần thiết trong file data.json (Tùy biến)

<img src="./5.png" ><br>

<br>
<h2>CÁCH CÀI ĐẶT EXTENSION VÀO TRÌNH DUYỆT</h2>

- Bước 1: Vào cài đặt của trình duyệt (tùy vào từng trình duyệt khác nhau thì cách truy cập Settings cũng khác nhau) -> Quản lý tiện ích mở rộng (Extension) -> Tải các phần mở rộng chưa được đóng gói (Load unpacked)
  <img src="./6.png" ><br>
  <img src="./7.png" >

- Bước 2: Trong cửa sổ Explorer hỏi chọn thư mục: Chọn folder chứa source của Extension và Import vào
  <img src="./7.png" >

- Bước 3: Ở phần thông tin extension: Chọn Xem chi tiết (Details) Cho phép chạy toàn quyền & chạy ở chế độ duyệt web riêng tư
  <img src="./8.png" >

<h2>CÁCH SỬ DỤNG EXTENSION</h2>

Trỏ chuột đến các trường cho phép nhập liệu -> Nhấn chuột phải để mở menu context -> Auto Fill Options -> lựa chọn tùy ý Autofill 1 / 2 hoặc 3 hoặc nhiều lựa chọn hơn (cái này do tự cấu hình)

<img src="./1.png" ><br>
<img src="./2.png" >
