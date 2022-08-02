var map = L.map('map', {});

// PAINEIS
map.createPane('pane_0').style.zIndex = 499;

var baseMaps = {};
var overlayMaps = {};

// CAMADAS BASE
var googleStreet = L.tileLayer('http://{s}.google.com/vt/lyrs=m,h&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google</a>'
});
baseMaps["Google Street"] = googleStreet;

var googleSatellite = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google</a>'
});
baseMaps['Google Satellite'] = googleSatellite;

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google</a>'
});
googleHybrid.addTo(map);
baseMaps["Google Hybrid"] = googleHybrid;

// CAMADAS VETORIAIS
var _Trechos_concess_es_federais_jul22_vf = L.geoJSON(_Trechos_concess_es_federais_jul22_vf_data, {
			pane: 'pane_0',
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(227, 26, 28, 1.0)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: Trechos_concessões_federais_jul22_vf</h4><br/>'  +
							'<b>CONCESSION:</b>&ensp;' + feature.properties['Concession'] + '<br/>' +
							'<b>CONTRATO:</b>&ensp;' + feature.properties['Contrato'] + '<br/>' +
							'<b>EMPRESA:</b>&ensp;' + feature.properties['Empresa'] + '<br/>' +
							'<b>ETAPA:</b>&ensp;' + feature.properties['Etapa'] + '<br/>' +
							'<b>FIM_CONCES:</b>&ensp;' + feature.properties['Fim_conces'] + '<br/>' +
							'<b>ID:</b>&ensp;' + feature.properties['ID'] + '<br/>' +
							'<b>INICIO_CON:</b>&ensp;' + feature.properties['Inicio_con'] + '<br/>' +
							'<b>PRAZO_CONC:</b>&ensp;' + feature.properties['Prazo_conc'] + '<br/>' +
							'<b>RODOVIA:</b>&ensp;' + feature.properties['Rodovia'] + '<br/>' +
							'<b>SIGLA:</b>&ensp;' + feature.properties['Sigla'] + '<br/>' +
							'<b>SISTEMA_RO:</b>&ensp;' + feature.properties['Sistema_ro'] + '<br/>' +
							'<b>UF:</b>&ensp;' + feature.properties['UF'] + '<br/>' +
							'<b>EXTENSAO_K:</b>&ensp;' + feature.properties['extensao_k'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['Trechos_concess_es_federais_jul22_vf'] = _Trechos_concess_es_federais_jul22_vf;

//Função que dá zoom sobre a feição clicada
function clickedFeature(e) {
	var feature = e.target;
	if (feature.feature.geometry.type == 'Point' ) {
		map.setView(feature.getLatLng(), 16);
	} else {
		map.fitBounds(feature.getBounds());
	}
}

// LEGENDA
var legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {
	var div = L.DomUtil.create('div', 'info legend');
	div.innerHTML = '<dl>';
	div.innerHTML += 	'<dt class="_Trechos_concess_es_federais_jul22_vf_lgd"><svg class="legendIcon"><line x1="0" y1="9" x2="18" y2="9" stroke="rgba(227, 26, 28, 1.0)" stroke-width="3"></svg>Trechos_concessões_federais_jul22_vf</dt>';
	div.innerHTML += '</dl>';
	return div
}
legend.addTo(map);

//ESCALA
L.control.scale({
	maxWidth: 250,
	imperial: false
}).addTo(map);

// CONTROLE DE CAMADAS
L.control.layers(baseMaps, overlayMaps, {
	position: 'topright',
	collapsed: false,
	sortLayers: true
}).addTo(map);

function layerON (event){
	var className = event.name + '_lgd';
	var legendItems = document.getElementsByClassName(className);
	for (var i = 0; i < legendItems.length; i++) {
		legendItems[i].style.display = 'block';
	}
}

function layerOFF (event){
	var className = event.name + '_lgd';
	var legendItems = document.getElementsByClassName(className);
	for (var i = 0; i < legendItems.length; i++) {
		legendItems[i].style.display = 'none';
	}
}

map.on('overlayadd', layerON);
map.on('overlayremove', layerOFF);

// CALCULA A AREA QUE COBRE TODAS AS CAMADAS
var bounds = {xmin: 180, ymin: 90, xmax: -180, ymax: -90};
for (var layer in overlayMaps) {
	var layerBounds = overlayMaps[layer].getBounds();
	if (bounds.xmin > layerBounds.getSouthWest().lng) {bounds.xmin = layerBounds.getSouthWest().lng};
	if (bounds.ymin > layerBounds.getSouthWest().lat) {bounds.ymin = layerBounds.getSouthWest().lat};
	if (bounds.xmax < layerBounds.getNorthEast().lng) {bounds.xmax = layerBounds.getNorthEast().lng};
	if (bounds.ymax < layerBounds.getNorthEast().lat) {bounds.ymax = layerBounds.getNorthEast().lat};
}
map.fitBounds([
	[bounds.ymin, bounds.xmin],
	[bounds.ymax, bounds.xmax]
]);
