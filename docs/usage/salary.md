## Salário

O cálculo baseado pelo salário usa algumas informações basicas para o calculo. A lógica para esse serviço está no arquivo calculate-salary-service.ts e depende diretamente dos valores fornecidos como entrada. Os principais parâmetros considerados são:

* Salário por mês (R$)
* Benefícios (R$)
* Horas de trabalho por mês
* Multiplicador autônomo

Essas informações são utilizadas para gerar uma estimativa realista do valor/hora, considerando tanto os custos operacionais quanto o lucro esperado.