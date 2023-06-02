function Homepage (){
    return (
        <div className="HomePage">
    
          <AppHeader/>
          <Space className="SideMenuAndPageContent">
          <SideMenu></SideMenu>
          <PageContent></PageContent>
          </Space>
          <AppFooter/>
        </div>
      );
}

export default Homepage;