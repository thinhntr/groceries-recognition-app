import MainContainer from "./MainContainer";
function Overview() {
  return (
    <MainContainer>
      <h1 className="text-3xl sm:text-5xl sm:leading-normal font-extrabold bg-clip-text text-transparent bg-gradient-to-tl from-green-400 to-blue-500">
        Nhận diện hàng tạp hóa
      </h1>
      <h2 className="text-white font-bold text-xl mt-4 mb-2">About us</h2>
      <div className="text-white">
        <div className="overview-table-row">
          <div className="overview-table-cell">Nguyễn Trường Thịnh</div>
          <div className="overview-table-cell">18521447</div>
        </div>
        <div className="overview-table-row">
          <div className="overview-table-cell">Nguyễn Hoàng Thiên</div>
          <div className="overview-table-cell">18521427</div>
        </div>
        <div className="overview-table-row">
          <div className="overview-table-cell">Trần Hoàng Sơn</div>
          <div className="overview-table-cell">18521351</div>
        </div>
        <div className="overview-table-row">
          <div className="overview-table-cell">Đỗ Mạnh Quân</div>
          <div className="overview-table-cell">18521283</div>
        </div>
      </div>
    </MainContainer>
  );
}

export default Overview;
