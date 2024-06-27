const navbar=(login="login",signup="signup")=>{

    return ` <nav>
        <div class="brand">
            <h3>TRAVELIA</h3>
        </div>
        <div class="navigation">
            <ul class="menu">
                <li><a href="#">AddPlaces</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Sighup</a></li>
            </ul>
            <div class="search">
                <div class="search-content">
                    <button class="search-button"><i class="fa fa-search"></i></button>
                    <input type="text" class="search-input" placeholder="Search here...">
                </div>
            </div>
        </div>
    </nav>`
}

export default navbar