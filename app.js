
      function masks(nome,value,id) {
        console.log(value)
        if (nome==='postCode' && value.length<=8) {
          let parte_1=value.substring(0,2)
          let parte_2=value.substring(2,4)
          let parte_3=value.substring(4,7)

          let result='('+parte_1+')'+'.'+parte_2+'-'+parte_3
        }

        if (nome==='tel' && value.length<=12) {
          let ddd=value.substring(0,2)
          let parte_1=value.substring(2,7)
          let parte_2=value.substring(7,11)

          let result='('+ddd+')'+' '+parte_1+'-'+parte_2

          console.log(result)
          document.getElementById(id).value=result
        }
      }
      let subtotal;
      let total;

      function calTotal() {
        let qtd1=eval(document.getElementById('qtd1').value)
        let qtd2=eval(document.getElementById('qtd2').value)
        let qtdTot=qtd1+qtd2
        console.log(qtdTot)
        var valor1 =document.getElementById('preco1').innerHTML
        var valor2 =document.getElementById('preco2').innerHTML
        subtotal=parseFloat((qtd1*valor1)+(qtd2*valor2))
       

        document.getElementById('total').innerHTML=subtotal.toFixed(2)
      }