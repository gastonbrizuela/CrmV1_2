export const optionsValueOpenOrange = {
    TypeProgrammSend :{'Diaria':0,'Semanal':1,'Mensual':2,'Campaña':3},
    DayWeekToSend:{'Lunes':0,'Martes':1,'Miercoles':2,'Jueves':3,'Viernes':4,'Sabado':5,'Domingo':6},
    TypeNotification:{'Publica':0,'Privada':1},
    TypeSend :{'Unico envio':0,'Automatizada':1},
    outstanding:{'Si':1,'No':0},
    PanelInclude:{'Si':1,'No':0},
    AmountVsActualMore:{'Si':1,'No':0},
    ActiveStatusCurrentCampaign:{'Activo':1, 'Inactivo':0},
    ActiveStatusInCampaign:{'Activo':1, 'Inactivo':0},
    CheckIfPurchase:{'Compro':1, 'No compro':0},
    InvalidEmail:{'Si':1,'No':0},
    InvalidPhone:{'Si':1,'No':0}
}

export const optionsValueAppWeb = {
    TypeProgrammSend :{0:'Diaria',1:'Semanal',2:'Mensual',3:'Campaña'},
    DayWeekToSend:{0:'Lunes',1:'Martes',2:'Miercoles',3:'Jueves',4:'Viernes',5:'Sabado',6:'Domingo'},
    TypeNotification:{0:'Publica',1:'Privada'},
    TypeSend :{0:'Unico envio',1:'Automatizada'},
    outstanding:{1:'Si',0:'No'},
    PanelInclude:{1:'Si',0:'No'},
    AmountVsActualMore:{1:'Si',0:'No'},
    ActiveStatusCurrentCampaign:{1:'Activo',0: 'Inactivo'},
    ActiveStatusInCampaign:{1:'Activo',0 :'Inactivo'},
    CheckIfPurchase:{1:'Compro', 0:'No compro'},
    InvalidEmail:{1:'Si',0:'No'},
    InvalidPhone:{1:'Si',0:'No'}
}



/*        TypeProgrammSend:{}
    TypeNotification
    TypeSend
    Outstanding
    PanelInclude
    AmountVsActualMore
    ActiveStatusCurrentCampaign
    ActiveStatusInCampaign
    CheckIfPurchase
    InvalidEmail
    InvalidPhone */
export const Hourlist = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0]
export const DaysWeek = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
export const programationType = {1:[{key:'DateToSend',name:'Dia del envio',type:'date'},{key:'HourToSend',name:'hora de envio',type:'select',options:Hourlist}],
2:{'Diaria':[{key:'HourToSend',name:'Horario de envio',type:'select',options:Hourlist}],
    'Semanal':[{key:'HourToSend',name:'Horario de envio',type:'select',options:Hourlist},{key:'DayWeekToSend',name:'Dia de la semana',type:'select',options:DaysWeek}],
    'Mensual':[{key:'HourToSend',name:'Horario de envio',type:'select',options:Hourlist},{key:'DayMonthToSend',name:'Dia del mes',type:'number'}],
    'Campaña':[]}}

export const filterTriggers = [{code:'ChargeDate',name:'Fecha carga',
listParameter: [{key:'Lapse',name:'Lapso',type:'number'},{key:'TypeProgrammSend', name:'Tipo de lapso', type:'select', options:['Diaria','Semanal','Mensual','Campaña']}]},
{code:'DateAppDownload',name:'Fecha Descarga App',
    listParameter:[{key:'Lapse',name:'Lapso',type:'number'}]},
{code:'CheckPurchaseItem',name:'Compra del articulo',
    listParameter:[{key:'Lapse',name:'lapso',type:'number'},{key:'PurchaseItem',name:'Articulo',type:'text'}]},
{code:'ConsumePeriodAverage',name:'Consumo promedio',
    listParameter:[{key:'Lapse',name:'lapso',type:'number'}]}]

export const listInput = [
    {key:'Name',name:'Nombre',type:'input',},
    {key:'TypeNotification',name:'Tipo de notificacion',type:'select', options:['Publica','Privada']},
    {key:'TypeSend',name:'Tipo de envio',type:'select',options:['Unico envio','Automatizada']},
    {key:'outstanding',name:'Destacado',type:'select',options:['Si','No']},
    {key:'PanelInclude',name:'Incluir en el panel',type:'select',options:['Si','No']},
    {key:'Status',name:'Estado',type:'select',options:['Activa','Inactiva']},
    {key:'Subject',name:'Asunto',type:'input'},
    {key:'Content',name:'Codigo del template',type:'input'}
]
export const filterlist =[ 
{code:'ChargeDate', name:'Fecha Carga',
    listParameter:[ {key:'StartChargeDate', name:'Fecha Inicio',type:'date'},
                    {key:'EndChargeDate',name:'Fecha Fin',type:'date'}]},
{code:'DateAppDownload',name:'Fecha descarga App',
     listParameter:[{key:'StartDateDownloadApp',name:'Fecha Inicio',type:'date'},
                    {key:'EndDateDownloadApp',name:'Fecha Fin',type:'date'}]} ,
{code:'Consume',name:'Consumos',
    listParameter:[ {key:'MinAmount',name:'Monto Minimo',type:'number'},
                    {key:'MaxAmount', name:'Monto Maximo', type:'number'}]},
{code:'ConsumePeriod',name:'Consumo en periodo',
    listParameter:[{key:'MinAmountConsumePeriod',name:'Monto Minimo',type:'number'},{key:'MaxAmountConsumePeriod',name:'Monto maximo',type:'number'},{key:'StartDateConsumePeriod',name:'Fecha inicio',type:'date'},{key:'EndDateConsumePeriod',name:'Fecha fin',type:'date'}]},
{code:'AmountVsActual',name:'Monto Vs campaña actual',
    listParameter:[{key:'CampaignAmountVsActual',name:'Campaña',type:'text'},{key:'AmountVsActualMore',name:'mayor/menor',type:'select',options:['Mas en Campaña actual','Menos en campaña Actual']}]},
{code:'StatusCurrentCampaign',name:'Estado en campaña Actual',
    listParameter:[{key:'ActiveStatusCurrentCampaign',name:'Estado en campaña actual',type:'salect',options:['Activo', 'Inactivo']}]},
{code:'StatusInCampaign',name:'Estado en campaña',
    listParameter:[{key:'ActiveStatusInCampaign',name:'Actividad en campaña',type:'select',options:['Activo','Inactivo']},{key:'CampaignStatusIn',name:'Campaña',type:'text'}]},
{code:'OfficeCkeck',name:'Oficina',
    listParameter:[{key:'Office',name:'Sucursal',type:'text'}]},
{code:'ProvinceLocality',name:'Provincia/Localidad',
    listParameter:[{key:'Province',name:'Provincia',type:'text'},{key:'Locality',name:'Localidad',type:'text'}]},
{code:'LastUseApp',name:'Ultimo uso de la app',
    listParameter:[{key:'StartLastUseApp',name:'Fecha Inicio',type:'date'},{key:'EndLastUseApp',name:'Fecha Fin',type:'date'}]},
{code:'CheckNoPurchaseInDays',name:'No realizo compra en dias',
    listParameter:[{key:'NoPurchaseInDays',name:'Cantidad de dias',type:'number'}]}, 
{code:'CheckNoPurchaseInCampaign',name:'No realizo compra en campaña',
    listParameter:[{key:'NoPurchaseInCampaign',name:'Campaña',type:'text'}]},
{code:'ConsumePeriodAverage',name:'Consumo promedio en period',
    listParameter:[{key:'MinAmountConsumePeriodAverage',name:'Monto minimo',type:'number'},{key:'MaxAmountConsumePeriodAverage',name:'Monto maximo',type:'number'},{key:'StartDateConsumePeriodAverage',name:'Fecha inicio',type:'date'},{key:'EndDateConsumePeriodAverage',name:'Fecha fin',type:'date'}]},
{code:'CheckPurchaseItem',name:'Compra de Articulo',
    listParameter:[{key:'PurchaseItem',name:'Articulo',type:'text'},{key:'CheckIfPurchase',name:'Compro/No Compro',type:'select',options:['Compro', 'No compro']},{key:'StartDatePurchaseItem',name:'Fecha de inicio',type:'date'},{key:'EndDatePurchaseItem',name:'Fecha fin',type:'date'}]},
{code:'CheckInvalid',name:'Email/telefono invalido',
    listParameter:[{key:'InvalidEmail',name:'Email',type:'select',options:['Si','No']},{key:'InvalidPhone',name:'Telefono',type:'select', options:['Si','No']}]},
{code:'CheckPoints',name:'Puntos', 
    listParameter:[{key:'MinAmountPoint',name:'Minimo',type:'number'},{key:'MaxAmountPoint',name:'Maximo',type:'number'}]}]

export const extraAtribute = ['Content']