import MainContainer from "./MainContainer";
function Overview() {
  return (
    <MainContainer className="text-white flex-center flex-col">
      <h1 className="text-2xl">Nhận diện hàng tạp hóa</h1>
      <h2 className="font-bold">About us</h2>
      <table>
        <tbody>
          <tr className="rounded-sm hover:bg-gray-700">
            <td className="py-2 px-3">Nguyễn Trường Thịnh</td>
            <td className="py-2 px-3">18521447</td>
          </tr>
          <tr className="rounded-sm hover:bg-gray-700">
            <td className="py-2 px-3">Nguyễn Hoàng Thiên</td>
            <td className="py-2 px-3">18521427</td>
          </tr>
          <tr className="rounded-sm hover:bg-gray-700">
            <td className="py-2 px-3">Trần Hoàng Sơn</td>
            <td className="py-2 px-3">18521351</td>
          </tr>
          <tr className="rounded-sm hover:bg-gray-700">
            <td className="py-2 px-3">Đỗ Mạnh Quân</td>
            <td className="py-2 px-3">18521283</td>
          </tr>
        </tbody>
      </table>
    </MainContainer>
  );
}

export default Overview;
