## Despesas

O cálculo de despesas é realizado no arquivo calculate-expenses-service.ts e depende diretamente dos valores fornecidos como entrada. Os principais parâmetros considerados são:

* Despesas mensais fixas
* Margem de lucro desejada (%)
* Carga horária mensal (em horas)
* Licenças de software (R$)
* Plano de saúde (R$)
* Honorários do contador (R$)
* Percentual de impostos (%)
* Outros gastos diversos (R$)

Essas informações são utilizadas para gerar uma estimativa realista do valor/hora, considerando tanto os custos operacionais quanto o lucro esperado.