---

excalidraw-plugin: parsed
tags: [excalidraw]

---
==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠==


# Text Elements
Customer ^5sz0iWdt

firstName: string [0..1]
lastName: string [1]
subscribedNewsletter: bool [1] ^jOZytHjV

SQL DDL ^DxwzXGwW

Python dataclass ^Eejho6Db

JSON Schema object ^JbWorpql

CREATE TABLE Customer (
    firstName VARCHAR(255),
    lastName VARCHAR(255) NOT NULL,
    subscribedNewsletter BOOL NOT NULL
) ^cbdTC8qu

@dataclass
class Customer:
    first_name: Optional[str]
    last_name: str
    subscribed_newsletter: bool ^FVqGtDbd

{
  "$id": "https://example.com/customer.schema.json",
  "title": "Customer",
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string",
      "required": true
    },
    "subscribedNewsletter": {
      "type": "boolean",
      "required": true
    }
  }
} ^7XwBvms1

%%
# Drawing
```json
{
	"type": "excalidraw",
	"version": 2,
	"source": "https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.0.13",
	"elements": [
		{
			"type": "rectangle",
			"version": 268,
			"versionNonce": 2099039120,
			"isDeleted": false,
			"id": "VFzR8GQ_jTnd_qbI7zsBx",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -356.5,
			"y": -592.7421875,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 324.26672761915944,
			"height": 174.7872864160979,
			"seed": 1823168787,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "5sz0iWdt"
				},
				{
					"id": "4X2nKW4oilEMAaNsWUCdi",
					"type": "arrow"
				},
				{
					"id": "FeUjMDRbgyLHi0amy7-yJ",
					"type": "arrow"
				}
			],
			"updated": 1704138018498,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 284,
			"versionNonce": 345823632,
			"isDeleted": false,
			"id": "5sz0iWdt",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -239.20658675194372,
			"y": -587.7421875,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 89.67990112304688,
			"height": 25,
			"seed": 1997372061,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1704138018498,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Customer",
			"rawText": "Customer",
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": "VFzR8GQ_jTnd_qbI7zsBx",
			"originalText": "Customer",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 286,
			"versionNonce": 540890992,
			"isDeleted": false,
			"id": "jOZytHjV",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -336.02254656641156,
			"y": -497.63040043228983,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 291.59967041015625,
			"height": 75,
			"seed": 1147876627,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "Y-mEGtxhFX2XJTWE7MKqT",
					"type": "arrow"
				},
				{
					"id": "FeUjMDRbgyLHi0amy7-yJ",
					"type": "arrow"
				},
				{
					"id": "4X2nKW4oilEMAaNsWUCdi",
					"type": "arrow"
				}
			],
			"updated": 1704138022854,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "firstName: string [0..1]\nlastName: string [1]\nsubscribedNewsletter: bool [1]",
			"rawText": "firstName: string [0..1]\nlastName: string [1]\nsubscribedNewsletter: bool [1]",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "firstName: string [0..1]\nlastName: string [1]\nsubscribedNewsletter: bool [1]",
			"lineHeight": 1.25,
			"baseline": 68
		},
		{
			"type": "arrow",
			"version": 294,
			"versionNonce": 1754334064,
			"isDeleted": false,
			"id": "4X2nKW4oilEMAaNsWUCdi",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -646.2497538660431,
			"y": -302.0848791721446,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 333.08499750843475,
			"height": 114.69965501802267,
			"seed": 834031539,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1704138022855,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "jz9YPrb5GFxh39GaBk5RC",
				"focus": -0.4822010365377949,
				"gap": 1.142857142857224
			},
			"endBinding": {
				"elementId": "jOZytHjV",
				"focus": -0.011516704444367361,
				"gap": 5.845866242122582
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "triangle",
			"points": [
				[
					0,
					0
				],
				[
					333.08499750843475,
					-114.69965501802267
				]
			]
		},
		{
			"type": "arrow",
			"version": 146,
			"versionNonce": 344079216,
			"isDeleted": false,
			"id": "Y-mEGtxhFX2XJTWE7MKqT",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -133.67886403453699,
			"y": -306.3642484758685,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 66.05930239038705,
			"height": 108.90712781956188,
			"seed": 1609188211,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1704138022854,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "6gAhqNNu67vkBCKx5ccZj",
				"focus": 0.241829527272155,
				"gap": 1.6295298389191544
			},
			"endBinding": {
				"elementId": "jOZytHjV",
				"focus": 0.21789529903878901,
				"gap": 7.359024136859404
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "triangle",
			"points": [
				[
					0,
					0
				],
				[
					-66.05930239038705,
					-108.90712781956188
				]
			]
		},
		{
			"type": "arrow",
			"version": 345,
			"versionNonce": 1608392560,
			"isDeleted": false,
			"id": "FeUjMDRbgyLHi0amy7-yJ",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 318.76592069519256,
			"y": -304.35923594454016,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 396.41022966694874,
			"height": 112.62266666667972,
			"seed": 370180605,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1704138022854,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "t6NqB8frgxCM6p79qUxyp",
				"gap": 1.5292792123527192,
				"focus": 0.6175585418244594
			},
			"endBinding": {
				"elementId": "jOZytHjV",
				"gap": 5.648497821069924,
				"focus": 0.14145820591350222
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "triangle",
			"points": [
				[
					0,
					0
				],
				[
					-396.41022966694874,
					-112.62266666667972
				]
			]
		},
		{
			"type": "text",
			"version": 46,
			"versionNonce": 294357904,
			"isDeleted": false,
			"id": "DxwzXGwW",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -715.571899022548,
			"y": -89.94510643862748,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 91.41993713378906,
			"height": 25,
			"seed": 265332691,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1704137921171,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "SQL DDL",
			"rawText": "SQL DDL",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "SQL DDL",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 58,
			"versionNonce": 1726066576,
			"isDeleted": false,
			"id": "Eejho6Db",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -245.3829092017677,
			"y": -103.31024335029156,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 173.9197998046875,
			"height": 25,
			"seed": 1783333437,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1704137925418,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Python dataclass",
			"rawText": "Python dataclass",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Python dataclass",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 165,
			"versionNonce": 1729569680,
			"isDeleted": false,
			"id": "JbWorpql",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -177.3000337807356,
			"y": -21.637534292230157,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 201.3397979736328,
			"height": 25,
			"seed": 1244059261,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1704137933952,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "JSON Schema object",
			"rawText": "JSON Schema object",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "JSON Schema object",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "line",
			"version": 102,
			"versionNonce": 990524784,
			"isDeleted": false,
			"id": "RVj2_f38XHtKlDNgGU_kI",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 45.712681554108485,
			"y": -12.665254523423528,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 36.73165494136106,
			"height": 38.144410900644175,
			"seed": 625271283,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1704137978217,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					36.73165494136106,
					-38.144410900644175
				]
			]
		},
		{
			"type": "line",
			"version": 68,
			"versionNonce": 1546650480,
			"isDeleted": false,
			"id": "AUHJQtbQaP_OuJAnxYJgR",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -157.88693254194413,
			"y": -114.12028507907758,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 0,
			"height": 42.38267877849364,
			"seed": 2117509341,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1704137923269,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					0,
					-42.38267877849364
				]
			]
		},
		{
			"type": "line",
			"version": 69,
			"versionNonce": 1895176560,
			"isDeleted": false,
			"id": "i69pjbUvBOES_1Fc4IHtw",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -672.4744166105063,
			"y": -97.42164219432607,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 5.2539107073833975,
			"height": 62.90631566254905,
			"seed": 1007417341,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1704137921171,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					5.2539107073833975,
					-62.90631566254905
				]
			]
		},
		{
			"type": "rectangle",
			"version": 159,
			"versionNonce": 1070689136,
			"isDeleted": false,
			"id": "jz9YPrb5GFxh39GaBk5RC",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -879.0729459343502,
			"y": -300.9420220292874,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 484.3809523809524,
			"height": 139.42857142857144,
			"seed": 73394064,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"type": "text",
					"id": "cbdTC8qu"
				},
				{
					"id": "4X2nKW4oilEMAaNsWUCdi",
					"type": "arrow"
				}
			],
			"updated": 1704137921171,
			"link": null,
			"locked": false
		},
		{
			"id": "cbdTC8qu",
			"type": "text",
			"x": -874.0729459343502,
			"y": -295.9420220292874,
			"width": 445.3125,
			"height": 120,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1961063312,
			"version": 102,
			"versionNonce": 1893811088,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1704137921171,
			"link": null,
			"locked": false,
			"text": "CREATE TABLE Customer (\n    firstName VARCHAR(255),\n    lastName VARCHAR(255) NOT NULL,\n    subscribedNewsletter BOOL NOT NULL\n)",
			"rawText": "CREATE TABLE Customer (\n    firstName VARCHAR(255),\n    lastName VARCHAR(255) NOT NULL,\n    subscribedNewsletter BOOL NOT NULL\n)",
			"fontSize": 20,
			"fontFamily": 3,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 115,
			"containerId": "jz9YPrb5GFxh39GaBk5RC",
			"originalText": "CREATE TABLE Customer (\n    firstName VARCHAR(255),\n    lastName VARCHAR(255) NOT NULL,\n    subscribedNewsletter BOOL NOT NULL\n)",
			"lineHeight": 1.2
		},
		{
			"id": "6gAhqNNu67vkBCKx5ccZj",
			"type": "rectangle",
			"x": -346.60333440552824,
			"y": -304.73471863694937,
			"width": 398.0952380952382,
			"height": 145.80952380952385,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 573716848,
			"version": 196,
			"versionNonce": 497067888,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "FVqGtDbd"
				},
				{
					"id": "Y-mEGtxhFX2XJTWE7MKqT",
					"type": "arrow"
				}
			],
			"updated": 1704137973240,
			"link": null,
			"locked": false
		},
		{
			"id": "FVqGtDbd",
			"type": "text",
			"x": -341.60333440552824,
			"y": -299.73471863694937,
			"width": 363.28125,
			"height": 120,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1176153456,
			"version": 121,
			"versionNonce": 1639394704,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1704137921171,
			"link": null,
			"locked": false,
			"text": "@dataclass\nclass Customer:\n    first_name: Optional[str]\n    last_name: str\n    subscribed_newsletter: bool",
			"rawText": "@dataclass\nclass Customer:\n    first_name: Optional[str]\n    last_name: str\n    subscribed_newsletter: bool",
			"fontSize": 20,
			"fontFamily": 3,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 115,
			"containerId": "6gAhqNNu67vkBCKx5ccZj",
			"originalText": "@dataclass\nclass Customer:\n    first_name: Optional[str]\n    last_name: str\n    subscribed_newsletter: bool",
			"lineHeight": 1.2
		},
		{
			"id": "t6NqB8frgxCM6p79qUxyp",
			"type": "rectangle",
			"x": 101.9680941659002,
			"y": -302.82995673218744,
			"width": 649.5238095238096,
			"height": 453.80952380952385,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 2086594960,
			"version": 167,
			"versionNonce": 328035216,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "7XwBvms1"
				},
				{
					"id": "FeUjMDRbgyLHi0amy7-yJ",
					"type": "arrow"
				}
			],
			"updated": 1704137969370,
			"link": null,
			"locked": false
		},
		{
			"id": "7XwBvms1",
			"type": "text",
			"x": 106.9680941659002,
			"y": -297.82995673218744,
			"width": 609.375,
			"height": 432,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1837912976,
			"version": 162,
			"versionNonce": 1217919856,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1704137965966,
			"link": null,
			"locked": false,
			"text": "{\n  \"$id\": \"https://example.com/customer.schema.json\",\n  \"title\": \"Customer\",\n  \"type\": \"object\",\n  \"properties\": {\n    \"firstName\": {\n      \"type\": \"string\"\n    },\n    \"lastName\": {\n      \"type\": \"string\",\n      \"required\": true\n    },\n    \"subscribedNewsletter\": {\n      \"type\": \"boolean\",\n      \"required\": true\n    }\n  }\n}",
			"rawText": "{\n  \"$id\": \"https://example.com/customer.schema.json\",\n  \"title\": \"Customer\",\n  \"type\": \"object\",\n  \"properties\": {\n    \"firstName\": {\n      \"type\": \"string\"\n    },\n    \"lastName\": {\n      \"type\": \"string\",\n      \"required\": true\n    },\n    \"subscribedNewsletter\": {\n      \"type\": \"boolean\",\n      \"required\": true\n    }\n  }\n}",
			"fontSize": 20,
			"fontFamily": 3,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 427,
			"containerId": "t6NqB8frgxCM6p79qUxyp",
			"originalText": "{\n  \"$id\": \"https://example.com/customer.schema.json\",\n  \"title\": \"Customer\",\n  \"type\": \"object\",\n  \"properties\": {\n    \"firstName\": {\n      \"type\": \"string\"\n    },\n    \"lastName\": {\n      \"type\": \"string\",\n      \"required\": true\n    },\n    \"subscribedNewsletter\": {\n      \"type\": \"boolean\",\n      \"required\": true\n    }\n  }\n}",
			"lineHeight": 1.2
		}
	],
	"appState": {
		"theme": "light",
		"viewBackgroundColor": "#ffffff",
		"currentItemStrokeColor": "#1e1e1e",
		"currentItemBackgroundColor": "#ffc9c9",
		"currentItemFillStyle": "hachure",
		"currentItemStrokeWidth": 2,
		"currentItemStrokeStyle": "solid",
		"currentItemRoughness": 1,
		"currentItemOpacity": 100,
		"currentItemFontFamily": 3,
		"currentItemFontSize": 20,
		"currentItemTextAlign": "left",
		"currentItemStartArrowhead": null,
		"currentItemEndArrowhead": "triangle",
		"scrollX": 1044.7280211223201,
		"scrollY": 770.5785758363318,
		"zoom": {
			"value": 0.8
		},
		"currentItemRoundness": "sharp",
		"gridSize": null,
		"gridColor": {
			"Bold": "#C9C9C9FF",
			"Regular": "#EDEDEDFF"
		},
		"currentStrokeOptions": null,
		"previousGridSize": null,
		"frameRendering": {
			"enabled": true,
			"clip": true,
			"name": true,
			"outline": true
		}
	},
	"files": {}
}
```
%%