
export default function SideBar(porps: { handleToggleModal: () => void  , data: {explanation: string , title: string } }) {
  const { handleToggleModal , data  } = porps;
  return (
    <div className="sidebar">
    <div  className="bgOverlay"></div>
    <div className="sidebarContents">
      <h2>{data.title}</h2>
        <div className="descriptionContainer">
          <p>Description</p>
          <p>{data.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
            <i className="fa-solid fa-arrow-right"></i>
        </button>
    </div>
</div>
  )
}
