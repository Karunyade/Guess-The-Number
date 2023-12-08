
  var rano=Math.random()
  var number=Math.floor(rano*10)+1
  console.log(number)
  var gscore=0
  function check()
  {
    var selbox=document.getElementById("no")
    var cno=Number(selbox.value)
    var an=document.getElementById("ans")
    var sc=document.getElementById("score")
    if(number==cno)
    {
       an.textContent="correct"
       gscore++
       sc.textContent="score: "+gscore
    }
    else 
    {
       an.textContent="wrong"
       gscore--
       sc.textContent="score: "+gscore 
    }
   if(gscore==5)
   {
      document.body.style.background="aqua"
      an.textContent="Congratulations! You Won The Match"
      gscore=0;
   }
  }
