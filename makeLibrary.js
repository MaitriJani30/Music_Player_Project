@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
:root{
    --white : white;
    --black : black;
    --silver :  rgb(27, 27, 27);
}
body{
    background-color: var(--black);
}
.row{
    /* background-color: aliceblue; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px 30px;
}
.row input{

    padding: 10px;
    border-radius: 8px;
    border: none;
    outline: none;
}
.row #item{
    padding-right: 450px;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
}
.row #submit{
    color: var(--white);
    background-color: #7c8184;
    font-size: 14px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
}
ul{
    list-style-type: none;
}
#addForm{
    position: relative;
}
#addForm ul{
    position: absolute;
    top: 25%;
    right:0%;
}
#addForm ul li{
 padding: 0px 10px 30px 0px;
display: flex;
flex-direction: row;
align-items: center;
justify-content:space-around;
}

.btn-danger{
background-color:red;
border: none;
outline: none;
margin-left: 20px;
}
.btn-danger:hover{
    background-color:#d9534f;
}

.edit{
    background-color:#5cb85c;
    border: none;
    outline: none;
}
.edit:hover{
    background-color:#5cb85c;
}
 
