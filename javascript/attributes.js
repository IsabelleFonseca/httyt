function filter(evt, column) {
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = evt.target;
	filter = input.value.toUpperCase();
	table = evt.path[4];
	tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 2; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[column];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

function goToMap(layer, featureID){
	var feature = layer._layers[featureID];
	if (feature.feature.geometry.type == 'Point' ) {
		map.setView(feature.getLatLng(), 16);
	} else {
		map.fitBounds(feature.getBounds());
	}

	document.getElementById('mapBtn').click();
	feature.openPopup();

	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
		layer.bringToFront();
	};
}

tableHTML__Trechos_concess_es_federais_jul22_vf = '<table id="_Trechos_concess_es_federais_jul22_vf_table">';
tableHTML__Trechos_concess_es_federais_jul22_vf += 	'<tr>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<th>Mapa</th>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<th>Codigo</th>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<th>Concession</th>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<th>Contrato</th>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<th>Empresa</th>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<th>Etapa</th>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<th>Fim_conces</th>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<th>ID</th>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<th>Inicio_con</th>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<th>Prazo_conc</th>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<th>Rodovia</th>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<th>Sigla</th>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<th>Sistema_ro</th>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<th>UF</th>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<th>extensao_k</th>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 	'</tr>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 	'<tr>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<td></td>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar Codigo"></td>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Procurar Concession"></td>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Procurar Contrato"></td>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<td><input type="text" onkeyup="filter(event, 4)" placeholder="Procurar Empresa"></td>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<td><input type="text" onkeyup="filter(event, 5)" placeholder="Procurar Etapa"></td>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<td><input type="text" onkeyup="filter(event, 6)" placeholder="Procurar Fim_conces"></td>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<td><input type="text" onkeyup="filter(event, 7)" placeholder="Procurar ID"></td>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<td><input type="text" onkeyup="filter(event, 8)" placeholder="Procurar Inicio_con"></td>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<td><input type="text" onkeyup="filter(event, 9)" placeholder="Procurar Prazo_conc"></td>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<td><input type="text" onkeyup="filter(event, 10)" placeholder="Procurar Rodovia"></td>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<td><input type="text" onkeyup="filter(event, 11)" placeholder="Procurar Sigla"></td>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<td><input type="text" onkeyup="filter(event, 12)" placeholder="Procurar Sistema_ro"></td>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<td><input type="text" onkeyup="filter(event, 13)" placeholder="Procurar UF"></td>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 		'<td><input type="text" onkeyup="filter(event, 14)" placeholder="Procurar extensao_k"></td>';
tableHTML__Trechos_concess_es_federais_jul22_vf += 	'</tr>';

var _Trechos_concess_es_federais_jul22_vf_IDs = Object.keys(_Trechos_concess_es_federais_jul22_vf._layers);
for (var i=0; i < _Trechos_concess_es_federais_jul22_vf_IDs.length; i++){
	var feature = _Trechos_concess_es_federais_jul22_vf._layers[_Trechos_concess_es_federais_jul22_vf_IDs[i]].feature;
	tableHTML__Trechos_concess_es_federais_jul22_vf += '<tr>';
	tableHTML__Trechos_concess_es_federais_jul22_vf += 	'<td onclick="goToMap(_Trechos_concess_es_federais_jul22_vf, ' + _Trechos_concess_es_federais_jul22_vf_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__Trechos_concess_es_federais_jul22_vf += 	'<td>' + feature.properties['Codigo'] + '</td>';
	tableHTML__Trechos_concess_es_federais_jul22_vf += 	'<td>' + feature.properties['Concession'] + '</td>';
	tableHTML__Trechos_concess_es_federais_jul22_vf += 	'<td>' + feature.properties['Contrato'] + '</td>';
	tableHTML__Trechos_concess_es_federais_jul22_vf += 	'<td>' + feature.properties['Empresa'] + '</td>';
	tableHTML__Trechos_concess_es_federais_jul22_vf += 	'<td>' + feature.properties['Etapa'] + '</td>';
	tableHTML__Trechos_concess_es_federais_jul22_vf += 	'<td>' + feature.properties['Fim_conces'] + '</td>';
	tableHTML__Trechos_concess_es_federais_jul22_vf += 	'<td>' + feature.properties['ID'] + '</td>';
	tableHTML__Trechos_concess_es_federais_jul22_vf += 	'<td>' + feature.properties['Inicio_con'] + '</td>';
	tableHTML__Trechos_concess_es_federais_jul22_vf += 	'<td>' + feature.properties['Prazo_conc'] + '</td>';
	tableHTML__Trechos_concess_es_federais_jul22_vf += 	'<td>' + feature.properties['Rodovia'] + '</td>';
	tableHTML__Trechos_concess_es_federais_jul22_vf += 	'<td>' + feature.properties['Sigla'] + '</td>';
	tableHTML__Trechos_concess_es_federais_jul22_vf += 	'<td>' + feature.properties['Sistema_ro'] + '</td>';
	tableHTML__Trechos_concess_es_federais_jul22_vf += 	'<td>' + feature.properties['UF'] + '</td>';
	tableHTML__Trechos_concess_es_federais_jul22_vf += 	'<td>' + feature.properties['extensao_k'] + '</td>';
	tableHTML__Trechos_concess_es_federais_jul22_vf += '</tr>';
}

tableHTML__Trechos_concess_es_federais_jul22_vf += '</table>';
document.getElementById('_Trechos_concess_es_federais_jul22_vf_tab').innerHTML = tableHTML__Trechos_concess_es_federais_jul22_vf;

