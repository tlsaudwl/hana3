const x=2;
const c=5;
switch (x){
    case 1:
        console.log('11111',abc);
        break;
    case 2:
        var v=1;
        const c=3;
        console.log('222222');
        //break;
    // case x+1===3: 연산은 하지않음
    case 3:
        console.log('xxxxxxxxx+1=3',v,c);
        break;
    case 4:
        console.log('4',x,x+1);
        break;

    default:
        console.log('etc');
}

return;
if(x=== 1) {
    console.log('11111',abc);
    return;
}

if(x=== 2 || x===3) {
    console.log('2 or 3',x);
    return;
}

if(x<1 || x>3) console.log('etc');