<template>
<!-- <link rel="stylesheet" href="styles/layouts.css">


Top navbar -->


<body>
    <nav class="navbar is-dark" role="navigation" aria-label= "main navigation">
        <div class="navbar-brand">
            
            <!-- <div class="dropdown is-hoverable mx-6">
                <div class="dropdown-trigger">
                    <button class="button" aria-controls="dropdown-menu4">
                        <span>
                            Link1                   
                        </span>
                        <span class="icon is-small">
                            <i class="fa fa-caret-down"></i> 
                        </span>
                    </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                    <div class="dropdown-content">
                        <div class="dropdown-item">
                            <p>hi</p>
                        </div>
                    </div>
                </div>

            </div> -->
                    
        </div>
        <div id="navbarLinks" class="navbar-menu">
            <div class="navbar-start">
                <div class="navbar-item has-dropdown is-hoverable ">
                    <a class="navbar-link">
                        Link 1
                    </a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            Sublink 1
                        </a>
                        <hr class="navbar-divider">
                         <a class="navbar-item">
                            Sublink 2
                        </a>
                        <hr class="navbar-divider">
                         <a class="navbar-item">
                            Sublink 3
                        </a>                                              
                    </div>
                </div>
                                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Link 2
                    </a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            Sublink 21
                        </a>
                        <hr class="navbar-divider">
                         <a class="navbar-item">
                            Sublink 22
                        </a>
                        <hr class="navbar-divider">
                         <a class="navbar-item">
                            Sublink 23
                        </a>                                              
                    </div>
                </div>
                                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Link 3
                    </a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            Sublink 31
                        </a>
                        <hr class="navbar-divider">
                         <a class="navbar-item">
                            Sublink 32
                        </a>
                        <hr class="navbar-divider">
                         <a class="navbar-item">
                            Sublink 33
                        </a>                                              
                    </div>
                </div>
                                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Link 4
                    </a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            Sublink 41
                        </a>
                        <hr class="navbar-divider">
                         <a class="navbar-item">
                            Sublink 42
                        </a>
                        <hr class="navbar-divider">
                         <a class="navbar-item">
                            Sublink 43
                        </a>                                              
                    </div>
                </div>
            </div>
            <div class="navbar-end">

            </div>

        </div>
    </nav>
<!-- Top navbar dynamically loaded -->

    <!-- <div class="topnav" id="myTopnav">
        <div class="dropdown">
            <button class="dropbtn">Link 1
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="#">Sublink 11</a>
                <a href="#">Sublink 12</a>
                <a href="#">Sublink 13</a>
            </div>
        </div> 
        <div class="dropdown">
            <button class="dropbtn">Link 2 
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="#">Sublink 21</a>
                <a href="#">Sublink 22</a>
                <a href="#">Sublink 23</a>
                <a href="#">Sublink 24</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Link 3
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="#">Sublink 31</a>
                <a href="#">Sublink 32</a>
                <a href="#">Sublink 33</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Link 4 
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="#">Sublink 41</a>
                <a href="#">Sublink 42</a>
                <a href="#">Sublink 43</a>
                <a href="#">Sublink 44</a>
            </div>
        </div>
    </div> -->
</body>

</template>
<script>
</script>
<style lang ="scss">
/* body {margin:0;font-family:Arial}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.active {
  background-color: #4CAF50;
  color: white;
}

.topnav .icon {
  display: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 17px;    
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.topnav a:hover, .dropdown:hover .dropbtn {
  background-color: #555;
  color: white;
}

.dropdown-content a:hover {
  background-color: #ddd;
  color: black;
}

.dropdown:hover .dropdown-content {
  display: block;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child), .dropdown .dropbtn {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
  .topnav.responsive .dropdown {float: none;}
  .topnav.responsive .dropdown-content {position: relative;}
  .topnav.responsive .dropdown .dropbtn {
    display: block;
    width: 100%;
    text-align: left;
  }
}
.contentDiv{    
	text-align: center;
    margin-top: 50px;
    font-size: 28px;
    font-weight: bold;
} */
</style>