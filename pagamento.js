//Calculo de metas do Magazine

main()

function main(){
meta()
}


function meta(){
let Notas = "Numero de Notas"
    let quantidade = 2150
   
    let pagamento;
   
if(quantidade < 0){ pagamento = "R$ 0,00"
} else if(quantidade >= 30 && quantidade <= 99){pagamento = " R$ 100,00"
} else if(quantidade >= 100 && quantidade <= 200){pagamento = " R$ 150,00"
} else if(quantidade >= 201 && quantidade <= 399){pagamento = " R$ 200,00"
} else if(quantidade >= 400 && quantidade <= 700){pagamento = " R$ 250,00"
} else if(quantidade >= 701 && quantidade <= 1000){pagamento = " R$ 300,00"
} else if(quantidade >= 1001 && quantidade <= 1500){pagamento = " R$ 350,00"
} else if(quantidade >= 1501 && quantidade <= 2000){pagamento = " R$ 400,00"
} else if(quantidade >= 2001 && quantidade <= 3000){pagamento = " R$ 450,00"
} else if(quantidade >= 3001 && quantidade <= 4500){pagamento = " R$ 500,00"
} else if(quantidade >= 4501 && quantidade <= 5000){pagamento = " R$ 550,00"
} else{quantidade = "voce nao ira receber premiação"}


console.log(`Voce ira receber" ${pagamento}  pois teve a" + ${quantidade} de notas exigidas`)

}
