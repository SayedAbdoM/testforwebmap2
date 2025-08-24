var wms_layers = [];


        var lyr_EsriSatellite_0 = new ol.layer.Tile({
            'title': 'Esri Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleMap_1 = new ol.layer.Tile({
            'title': 'Google Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_3 = new ol.layer.Tile({
            'title': 'Open Street Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_3IM_11102021_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "3IM_11-10-2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/3IM_11102021_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3197902.157236, 3624005.390719, 3206652.476641, 3631575.393398]
                            })
                        });
var lyr_3IM_17082021_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "3IM_17-08-2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/3IM_17082021_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3197923.122318, 3624005.390719, 3206652.476641, 3631575.065851]
                            })
                        });
var lyr_3IM_21072018_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "3IM_21-07-2018",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/3IM_21072018_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3197902.157236, 3624005.390719, 3206652.476641, 3631575.393398]
                            })
                        });
var lyr_3IM_21072020_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "3IM_21-07-2020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/3IM_21072020_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3197497.884997, 3623531.944359, 3207056.407533, 3632052.423023]
                            })
                        });
var lyr_3IM_29052019_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "3IM_29-05-2019",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/3IM_29052019_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3197902.157236, 3624005.390719, 3206652.476641, 3631575.393398]
                            })
                        });
var lyr_ch20182019_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "ch2018-2019",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ch20182019_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3197871.437233, 3625633.591139, 3206946.544006, 3632033.040476]
                            })
                        });
var lyr_ch082021102021_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "ch08-2021-10-2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ch082021102021_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3197871.437233, 3625633.591139, 3206946.544006, 3632033.040476]
                            })
                        });
var lyr_ch20182020_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "ch2018-2020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ch20182020_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3197871.437233, 3625633.591139, 3206946.544006, 3632033.040476]
                            })
                        });
var lyr_ch20182021_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "ch2018-2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ch20182021_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3197871.437233, 3625633.591139, 3206946.544006, 3632033.040476]
                            })
                        });
var lyr_ch20192020_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "ch2019-2020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ch20192020_13.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3197545.548723, 3623531.904867, 3207058.593006, 3632048.163005]
                            })
                        });
var lyr_ch20192021_14 = new ol.layer.Image({
                            opacity: 1,
                            title: "ch2019-2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ch20192021_14.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3197871.437233, 3625633.591139, 3206946.544006, 3632033.040476]
                            })
                        });
var lyr_ch2020082021_15 = new ol.layer.Image({
                            opacity: 1,
                            title: "ch2020-08-2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ch2020082021_15.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3197517.596264, 3623531.904867, 3207058.593006, 3632048.598964]
                            })
                        });
var lyr_ch20202021_16 = new ol.layer.Image({
                            opacity: 1,
                            title: "ch2020-2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ch20202021_16.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3197871.437233, 3625633.591139, 3206946.544006, 3632033.040476]
                            })
                        });
var format_CoastLine_29052019_17 = new ol.format.GeoJSON();
var features_CoastLine_29052019_17 = format_CoastLine_29052019_17.readFeatures(json_CoastLine_29052019_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoastLine_29052019_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoastLine_29052019_17.addFeatures(features_CoastLine_29052019_17);
var lyr_CoastLine_29052019_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoastLine_29052019_17, 
                style: style_CoastLine_29052019_17,
                interactive: true,
                title: '<img src="styles/legend/CoastLine_29052019_17.png" /> CoastLine_29-05-2019'
            });
var format_CoastLine_21072020_18 = new ol.format.GeoJSON();
var features_CoastLine_21072020_18 = format_CoastLine_21072020_18.readFeatures(json_CoastLine_21072020_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoastLine_21072020_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoastLine_21072020_18.addFeatures(features_CoastLine_21072020_18);
var lyr_CoastLine_21072020_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoastLine_21072020_18, 
                style: style_CoastLine_21072020_18,
                interactive: true,
                title: '<img src="styles/legend/CoastLine_21072020_18.png" /> CoastLine_21-07-2020'
            });
var format_CoastLine_17082021_19 = new ol.format.GeoJSON();
var features_CoastLine_17082021_19 = format_CoastLine_17082021_19.readFeatures(json_CoastLine_17082021_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoastLine_17082021_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoastLine_17082021_19.addFeatures(features_CoastLine_17082021_19);
var lyr_CoastLine_17082021_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoastLine_17082021_19, 
                style: style_CoastLine_17082021_19,
                interactive: true,
                title: '<img src="styles/legend/CoastLine_17082021_19.png" /> CoastLine_17-08-2021'
            });
var format_CoastLine_11102021_20 = new ol.format.GeoJSON();
var features_CoastLine_11102021_20 = format_CoastLine_11102021_20.readFeatures(json_CoastLine_11102021_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoastLine_11102021_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoastLine_11102021_20.addFeatures(features_CoastLine_11102021_20);
var lyr_CoastLine_11102021_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoastLine_11102021_20, 
                style: style_CoastLine_11102021_20,
                interactive: true,
                title: '<img src="styles/legend/CoastLine_11102021_20.png" /> CoastLine_11-10-2021'
            });
var group_ShoreLine = new ol.layer.Group({
                                layers: [lyr_CoastLine_29052019_17,lyr_CoastLine_21072020_18,lyr_CoastLine_17082021_19,lyr_CoastLine_11102021_20,],
                                title: "ShoreLine"});
var group_Changes = new ol.layer.Group({
                                layers: [lyr_ch20182019_9,lyr_ch082021102021_10,lyr_ch20182020_11,lyr_ch20182021_12,lyr_ch20192020_13,lyr_ch20192021_14,lyr_ch2020082021_15,lyr_ch20202021_16,],
                                title: "Changes"});
var group_Raster = new ol.layer.Group({
                                layers: [lyr_3IM_11102021_4,lyr_3IM_17082021_5,lyr_3IM_21072018_6,lyr_3IM_21072020_7,lyr_3IM_29052019_8,],
                                title: "Raster"});
var group_BaseMap = new ol.layer.Group({
                                layers: [lyr_EsriSatellite_0,lyr_GoogleMap_1,lyr_GoogleSatellite_2,lyr_OpenStreetMap_3,],
                                title: "BaseMap"});

lyr_EsriSatellite_0.setVisible(true);lyr_GoogleMap_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_OpenStreetMap_3.setVisible(true);lyr_3IM_11102021_4.setVisible(true);lyr_3IM_17082021_5.setVisible(true);lyr_3IM_21072018_6.setVisible(true);lyr_3IM_21072020_7.setVisible(true);lyr_3IM_29052019_8.setVisible(true);lyr_ch20182019_9.setVisible(true);lyr_ch082021102021_10.setVisible(true);lyr_ch20182020_11.setVisible(true);lyr_ch20182021_12.setVisible(true);lyr_ch20192020_13.setVisible(true);lyr_ch20192021_14.setVisible(true);lyr_ch2020082021_15.setVisible(true);lyr_ch20202021_16.setVisible(true);lyr_CoastLine_29052019_17.setVisible(true);lyr_CoastLine_21072020_18.setVisible(true);lyr_CoastLine_17082021_19.setVisible(true);lyr_CoastLine_11102021_20.setVisible(true);
var layersList = [group_BaseMap,group_Raster,group_Changes,group_ShoreLine];
lyr_CoastLine_29052019_17.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', 'Length': 'Length', });
lyr_CoastLine_21072020_18.set('fieldAliases', {'FID_1': 'FID_1', 'LEFT_FID': 'LEFT_FID', 'Length': 'Length', });
lyr_CoastLine_17082021_19.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', 'Length': 'Length', });
lyr_CoastLine_11102021_20.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', 'Length': 'Length', });
lyr_CoastLine_29052019_17.set('fieldImages', {'LEFT_FID': '', 'RIGHT_FID': '', 'Length': '', });
lyr_CoastLine_21072020_18.set('fieldImages', {'FID_1': '', 'LEFT_FID': '', 'Length': '', });
lyr_CoastLine_17082021_19.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', 'Length': 'TextEdit', });
lyr_CoastLine_11102021_20.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', 'Length': 'TextEdit', });
lyr_CoastLine_29052019_17.set('fieldLabels', {});
lyr_CoastLine_21072020_18.set('fieldLabels', {});
lyr_CoastLine_17082021_19.set('fieldLabels', {});
lyr_CoastLine_11102021_20.set('fieldLabels', {});
lyr_CoastLine_11102021_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});