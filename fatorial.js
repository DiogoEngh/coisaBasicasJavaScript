/*AQUI FIZ UM EXEMPLO BASICO POR RECURSAO DO CALCULO DO FATORIAL*/

const fatorial = (n) =>{
  if(n==0){
    return 1
  }else if(n==1){
    return 1
  }else{
    return n*fatorial(n-1)
  }
}
