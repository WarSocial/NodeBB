var async = require('async'),
	winston = require('winston'),
	S = require('string'),

	utils = require('./../public/src/utils'),
	db = require('./database');

(function(Map) {
	'use strict';

	Map.getMapField = function(mid, field, callback) {
		db.getObjectField('map:' + mid, field, callback);
	};

	Map.getMapFields = function(mid, fields, callback) {
		db.getObjectFields('map:' + mid, fields, callback);
	};

	Map.getMapData = function(mid, callback) {
		db.getObject('map:' + mid, function(err, data) {
			if(err) {
				return callback(err);
			}
			callback(err, data);
		});
	};

	Map.getMaps = function(set, start, stop, callback) {
		db.getSortedSetRevRange(set, start, stop, function(err, mids) {
			if (err) {
				return callback(err, null);
			}

			function getMapData(mid, callback) {
				Map.getMapData(mid, function(err, mapData) {
                    callback(null, mapData);
				});
			}

			async.map(mids, getMapData, callback);
		});
	};


}(exports));
