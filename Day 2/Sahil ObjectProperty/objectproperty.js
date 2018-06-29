<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
<script>

let gameobject={
    gamename:"Assisain Creed",
    version:"2.0"
}

let anotherobject={
    gamename:"CounterStrike",
    version:2.0
}


function equivalent(gameobject,anotherobject)
{
    var a=Object.getOwnPropertyNames(gameobject);
    var b=Object.getOwnPropertyNames(anotherobject);

    console.log(a.length);
    console.log(b.length);
}


</script>
</body>
</html>


