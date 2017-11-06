function prepareBallonData(dealerObj) {
    strHTML  = '<table cellpadding="3" cellspacing="0" border="0">';
    strHTML += '	<tr>';
    strHTML += '		<td';    
    strHTML += '		><b>Автосалон</b> <b style="color:red">&laquo;'+ dealerObj.name + '&raquo;</b></td>';
    strHTML += '	</tr>';
    strHTML += '	<tr>';    
    strHTML += '		<td>'+ dealerObj.address + '</td>';
    strHTML += '	</tr>';
    strHTML += '	<tr>';
    strHTML += '		<td style="font-size:120%;">'+ dealerObj.phone + '</td>';
    strHTML += '	</tr>';   
    strHTML += '	<tr>';
    strHTML += '		<td><a href="http://'+ dealerObj.www + '" target="_blank" class="red">'+ dealerObj.www + '</a></td>';
    strHTML += '	</tr>';
	strHTML += '</table>';
	
	return strHTML;
}
    
function initYandexMaps(lon,lat,zoom) {	
   	var map = new YMaps.Map(document.getElementById("YMapsID"));
	map.setCenter(new YMaps.GeoPoint(lon,lat), zoom);        	
	map.addControl(new YMaps.TypeControl());
    map.addControl(new YMaps.ToolBar());
    map.addControl(new YMaps.Zoom());
    map.addControl(new YMaps.ScaleLine());			    
			
    var s = new YMaps.Style();
        s.iconStyle = new YMaps.IconStyle("mmc#dealerIcon");
        s.iconStyle.offset = new YMaps.Point(-22, -46);
        s.iconStyle.href = "../img/dot.png";
        s.iconStyle.size = new YMaps.Point(26, 46);
    	s.iconStyle.shadow = new YMaps.IconShadowStyle();
        s.iconStyle.shadow.offset = new YMaps.Point(0, -25);
        s.iconStyle.shadow.href = "../img/dot_shadow.png";
        s.iconStyle.shadow.size = new YMaps.Point(25, 23);		
  
	
    for (var i = 0; i < dealersBaloonsData.length; i++) {
    	var dlrPlacemark = new YMaps.Placemark(new YMaps.GeoPoint(dealersBaloonsData[i].lon,dealersBaloonsData[i].lat),{style: s,hideIcon: false});
            dlrPlacemark.setBalloonContent(prepareBallonData(dealersBaloonsData[i]));
            	
            map.addOverlay(dlrPlacemark);
    }
    return map;
}
    

