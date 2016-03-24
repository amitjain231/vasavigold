// Global Variables
jsGlobalColorRateUp				=	'#58BA16';
jsGlobalColorRateDown			=	'#FC1938';
jsGlobalColorRateUnchanged		=	'#000000';
jsGlobalDataStreamingOffHTML	=	"<div class='cl_stream_off' ><span style='color:#E35E1B'>oops!!! </span>&nbsp; No Data Connection...   </div>";
jsGlobalUserVisitURL="http://local_vasavigold/VGDynamic/vgPGUpdateMobileUserVisitCount.php";
jsGlobalJsonpUrl = 'http://local_vasavigold/VGDynamic/vgPGGetMobileRatesDynGet.php';
//jsGlobalUserVisitURL="http://www.vasavigold.com/VGDynamic/vgPGUpdateMobileUserVisitCount.php";
//jsGlobalJsonpUrl = 'http://www.vasavigold.com/VGDynamic/vgPGGetMobileRatesDynGet.php';

$(document).on('vclick', 'a', function(e){ 			
	var jsVarPrevDefault;
	
	jsVarPrevDefault = false;
	switch(this.id)
	{
		case "id_a_booking":
			$( "#myPopupBooking" ).popup( "open" )
			jsVarPrevDefault = true;
		break;
		case "id_a_contact":
			$( "#myPopupContact" ).popup( "open" )
			jsVarPrevDefault = true;
		break;
		case "id_a_rtgs":
			$( "#myPopupRTGS" ).popup( "open" )
			jsVarPrevDefault = true;
		break;
		
	}
	
	if(jsVarPrevDefault == true)
	{
		e.preventDefault();		
	}
			
			
});

function initVGMobileApp()
{
	$('#id_btn_updateapp').css("display", "none");
	
	// Update Mobile User Visit Count
	jsAprAjaxUdpateUserVisitCount();
	
	// Load Rates	
	jsMobRefVGRates();	
	
}

function jsAprAjaxUdpateUserVisitCount()
{
	var jsParams;
	jsParams = "";
	jsParams = jsParams + "TOKEN=DUMMY";
	

	$.ajax({type:						"GET", 
					async:				"true",
					url:					jsGlobalUserVisitURL,
					dataType: 		"jsonp",
					data: 				jsParams,
					crossDomain:	true,          
					cache:				false, 
					contentType: 	"application/json; charset=utf-8",
					dataType: 		"jsonp",
					jsonp: 				"callback",
					jsonpCallback: 	"jsProcessMobileJSONPResult",					
					success: 			onAjaxAprMobileUserVisitSuccess,
					error: 				onAjaxAprMobileUserVisitError
		});				

}	//jsAprAjaxUdpateUserVisitCount

function onAjaxAprMobileUserVisitSuccess( jsResult)
{
	// Do Nothing
}

function onAjaxAprMobileUserVisitError( jsXhrObj )
{
	// Do Nothing
}


function jsProcessMobileJSONPResult( jsonData )
{
	// Do Nothing
}


function jsMobRefVGRates()
{
	var jsTime;
	jsMobUpdVGRates();
	jsTime = setTimeout("jsMobRefVGRates()",2000);   // 2 Second	
}

function jsMobUpdVGRates()
{
   // Local data declarations
	var jsCurrGoldBid, jsCurrGoldAsk, jsCurrSilverBid, jsCurrSilverAsk;
	var jsToday, jsCurrYear, jsCurrMonth, jsCurrDate;
	var jsCurrMonthStr, jsUTCDateStr;
	var jsURL, jsParamStr;
	
	//------- Format current UTC Date start -------->	
	jsToday = new Date();
	jsCurrYear 		= jsToday.getUTCFullYear();
	jsCurrMonth		= jsToday.getUTCMonth();
	jsCurrDate		= jsToday.getUTCDate();
	
	// Format Month
	jsCurrMonth = jsCurrMonth + 1;	
	if( jsCurrMonth < 10 )
	{
		jsCurrMonthStr = '0' + jsCurrMonth.toString();
	}
	else
	{
		jsCurrMonthStr = jsCurrMonth;
	}
	
	// Format Day
	if(jsCurrDate < 10)
	{
		jsCurrDateStr = '0' + jsCurrDate.toString();
	}
	else
	{
		jsCurrDateStr = jsCurrDate;
	}
	
	jsUTCDateStr = jsCurrYear.toString() + jsCurrMonthStr.toString() + jsCurrDateStr.toString();
	//------- Format current UTC Date end -------->	
	 	
	// Get Hidden values
	var jsCurrParam1,  jsCurrParam2, jsCurrParam3, jsCurrParam4, jsCurrParam5;
	var jsCurrParam6,  jsCurrParam7, jsCurrParam8, jsCurrParam9, jsCurrParam10;
	
	jsCurrParam1 		   = document.getElementById('id_vg_hid_mob_param1').value;
	jsCurrParam2 		    = document.getElementById('id_vg_hid_mob_param2').value;
	jsCurrParam3			= document.getElementById('id_vg_hid_mob_param3').value;
	jsCurrParam4			= document.getElementById('id_vg_hid_mob_param4').value;
	jsCurrParam5			= document.getElementById('id_vg_hid_mob_param5').value;
	jsCurrParam6			= document.getElementById('id_vg_hid_mob_param6').value;
	jsCurrParam7			= document.getElementById('id_vg_hid_mob_param7').value;
	jsCurrParam8			= document.getElementById('id_vg_hid_mob_param8').value;
	jsCurrParam9			= document.getElementById('id_vg_hid_mob_param9').value;
	jsCurrParam10			= document.getElementById('id_vg_hid_mob_param10').value;
	
	jsParamStr='';
	jsParamStr = jsParamStr + 'PIN=' + jsUTCDateStr;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P001=' + jsCurrParam1;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P002=' + jsCurrParam2;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P003=' + jsCurrParam3;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P004=' + jsCurrParam4;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P005=' + jsCurrParam5;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P006=' + jsCurrParam6;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P007=' + jsCurrParam7;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P008=' + jsCurrParam8;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P009=' + jsCurrParam9;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P010=' + jsCurrParam10;
	
	
	$.ajax({type:						"GET", 
					async:				"true",
					url:					jsGlobalJsonpUrl,
					dataType: 		 	"jsonp",
					data: 				jsParamStr,
					crossDomain:		true,          
					cache:				false, 
					contentType: 		"application/json; charset=utf-8",
					dataType: 			"jsonp",
					jsonp: 				"callback",
					jsonpCallback: 		"jsProcessJSONPResult",					
					success: 			onAjaxVasaviGoldMobGetRatesSuccess,
					error: 				onAjaxVasaviGoldMobGetRatesError
		});			
	
	
}

function onAjaxVasaviGoldMobGetRatesSuccess(  jsResult )
{

}

function onAjaxVasaviGoldMobGetRatesError()
{
	//-- Do not Output Streaming Off HTML becasue this will impace users witl slow internet connection
	//-- Screen will be switching between 'no data' and 'live data'
	/*
		var jsGridDivObj;
		jsGridDivObj	=	document.getElementById("id_div_grid_outer");
		jsGridDivObj.innerHTML = jsGlobalDataStreamingOffHTML;
	*/
}

function jsProcessJSONPResult( jsonData )
{
	
	var  jsKey, jsAct,  jsFlag, jsCode, jsDesc, jsKeyVal1;
	var jsCsym, jsDesc1, jsDesc2, jsAsk, jsDir;
	var jsSpace, jsGridDivObj;
	var jsDataBKColor;
	var jsLine1, jsLine2;
	var jsHidFieldId;
	
	jsSpace = "&nbsp;";
	jsKey		= 	jsonData.RESULT[0].KEY;
	jsFlag		= 	jsonData.RESULT[0].FLAG;
	jsDesc		= 	jsonData.RESULT[0].DESC;

	jsGridDivObj	=	document.getElementById("id_div_grid_outer");

	
	if( jsFlag == 'E' )
	{
		// This will clear the Grid
		jsGridDivObj.innerHTML = jsGlobalDataStreamingOffHTML;

	}
	else if( jsFlag == 'S' )
	{
	
		//alert( jsonData.RESULT[0].PARAMS.length );
		var jsIndex;
		jsAppUpdateFlag = jsonData.RESULT[0].PARAMS['APPUPDATE'];
		jsComexFlag = jsonData.RESULT[0].PARAMS['CFLAG'];
		jsRatesFlag = jsonData.RESULT[0].PARAMS['RFLAG'];
		
		/*
		if( jsAppUpdateFlag == "Y" )
		{
			$('#id_btn_updateapp').css("display", "block");
		}
		else
		{
			$('#id_btn_updateapp').css("display", "none");
		}
		
		
		if( jsComexFlag == "Y" )
		{
			$('#id_div_grid_comex').css("display", "block");
		}
		else
		{
			$('#id_div_grid_comex').css("display", "none");
		}
		
		if( jsRatesFlag == "Y" )
		{
			$('#id_div_grid_symbol').css("display", "block");
		}
		else
		{
			$('#id_div_grid_symbol').css("display", "none");
		}
		*/
		
		for (var i=1; i< jsonData.RESULT.length; i++)
		{
			jsKey 		=	jsonData.RESULT[i].KEY;
			jsAct		=	jsonData.RESULT[i].ACT;
			jsDesc1		= 	jsonData.RESULT[i].DESC1;
			jsDesc2		=	jsonData.RESULT[i].DESC2;
			jsCsym		=	jsonData.RESULT[i].CSYM;
			jsBid		=	jsonData.RESULT[i].BID;
			jsAsk		=	jsonData.RESULT[i].ASK;
			jsDir		=	jsonData.RESULT[i].DIR;
		
			jsBidId="";
			jsAskId="";
			jsValueBid ="";
			jsValueAsk ="";
			jsClassDivRow="";
			jsContractOnOffFlag = '';
			switch( jsKey )
			{
				case "XAUUSD":
					jsBidId			= "id_span_data_comex_g_bid";
					jsAskId			= "id_span_data_comex_g_ask";
					jsValueBid 		= jsBid;
					jsValueAsk 		= jsAsk;
					jsClassDivRow	= "cl_div_comex_gold";
					jsContractOnOffFlag = jsComexFlag;
				break;
				case "XAGUSD":
					jsBidId			= "id_span_data_comex_s_bid";
					jsAskId			= "id_span_data_comex_s_ask";
					jsValueBid 		= jsBid;
					jsValueAsk 		= jsAsk;
					jsClassDivRow	= "cl_div_comex_silver";
					jsContractOnOffFlag = jsComexFlag;
				break;
				case "USDINR":
					jsBidId			= "id_span_data_comex_u_bid";
					jsAskId			= "id_span_data_comex_u_ask";
					jsValueBid 		= jsBid;
					jsValueAsk 		= jsAsk;
					jsClassDivRow	= "cl_div_comex_usdinr";
					jsContractOnOffFlag = jsComexFlag;
				break;
				case "G999R":
					jsBidId			= "id_span_data_symbol_g999r_bid";
					jsAskId			= "id_span_data_symbol_g999r_ask";
					jsValueBid 		= jsBid;
					jsValueAsk 		= jsAsk;
					jsClassDivRow	= "cl_div_symbol_g999r";
					jsContractOnOffFlag = jsRatesFlag;
				break;
				case "G999T":
					jsBidId			= "id_span_data_symbol_g999t_bid";
					jsAskId			= "id_span_data_symbol_g999t_ask";
					jsValueBid 		= jsBid;
					jsValueAsk 		= jsAsk;
					jsClassDivRow	= "cl_div_symbol_g999t";
					jsContractOnOffFlag = jsRatesFlag;
				break;
				case "GFT999R":
					jsBidId			= "id_span_data_symbol_gft999r_bid";
					jsAskId			= "id_span_data_symbol_gft999r_ask";
					jsValueBid 		= jsBid;
					jsValueAsk 		= jsAsk;
					jsClassDivRow	= "cl_div_symbol_gft999r";
					jsContractOnOffFlag = jsRatesFlag;
				break;
				case "GFT999T":
					jsBidId			= "id_span_data_symbol_gft999t_bid";
					jsAskId			= "id_span_data_symbol_gft999t_ask";
					jsValueBid 		= jsBid;
					jsValueAsk 		= jsAsk;
					jsClassDivRow	= "cl_div_symbol_gft999t";
					jsContractOnOffFlag = jsRatesFlag;
				break;
				case "S999R":
					jsBidId			= "id_span_data_symbol_s999r_bid";
					jsAskId			= "id_span_data_symbol_s999r_ask";
					jsValueBid 		= jsBid;
					jsValueAsk 		= jsAsk;
					jsClassDivRow	= "cl_div_symbol_s999r";
					jsContractOnOffFlag = jsRatesFlag;
				break;
				case "S999T":
					jsBidId			= "id_span_data_symbol_s999t_bid";
					jsAskId			= "id_span_data_symbol_s999t_ask";
					jsValueBid 		= jsBid;
					jsValueAsk 		= jsAsk;
					jsClassDivRow	= "cl_div_symbol_s999t";
					jsContractOnOffFlag = jsRatesFlag;
				break;				
			}
		
			if( jsAct == 'Y' && jsContractOnOffFlag == 'Y' )
			{
				$("." + jsClassDivRow).css("display", "block");
			}
			else
			{
				$( "." + jsClassDivRow ).css("display", "none");
			}	
		
			document.getElementById(jsBidId).innerHTML=jsValueBid;
			document.getElementById(jsAskId).innerHTML=jsValueAsk;
		
			//------- Direction -------->		
			if( jsDir == "-1" )
			{	
				$("#" + jsBidId).css("color", jsGlobalColorRateDown);
				$("#" + jsAskId).css("color", jsGlobalColorRateDown);
			}
			else if( jsDir == "1" )
			{					
				$("#" + jsBidId).css("color", jsGlobalColorRateUp);
				$("#" + jsAskId).css("color", jsGlobalColorRateUp);
			}
			else
			{
				$("#" + jsBidId).css("color", jsGlobalColorRateUnchanged);
				$("#" + jsAskId).css("color", jsGlobalColorRateUnchanged);
			}

			//---- Update Hidden fields --------->
			jsHidFieldId = 'id_vg_hid_mob_param' + i.toString();
			document.getElementById(jsHidFieldId).value	=	jsAsk;
			
			/*
			
			if( jsAct == 'Y' )
			{
				jsLine1	=	"<div class='ui-block-a cl_td_label' >" 
								+ jsDesc1 
								+ "&nbsp;<span class='cl_td_label_2'>"
								+ jsDesc2
								+ "</span></div>";
						
				//------- Direction -------->		
				if( jsDir == "-1" )
				{					
					jsDataBKColor = jsGlobalColorRateDown;
				}
				else if( jsDir == "1" )
				{					
					jsDataBKColor = jsGlobalColorRateUp;
				}
				else
				{
					jsDataBKColor = jsGlobalColorRateUnchanged;
				}							
				
				
				jsLine2	=	"<div class='ui-block-b cl_td_data' style='background-color: " + jsDataBKColor + " '> "
								//+ jsCsymLine
								+ jsAsk
								+ "</div>";
								
				jsGridDivObj.innerHTML +=	jsLine1.toString() + jsLine2.toString();
				
				
				//---- Update Hidden fields --------->
				jsHidFieldId = 'id_vg_hid_mob_param' + i.toString();
				document.getElementById(jsHidFieldId).value	=	jsAsk;
				
				
			
			}			// End check for jsAct
			*/
			
		}			// End for loop JSON loop
	}				// Check for Success flag
		
	
	
	
}		// End function - jsProcessJSONPResult
