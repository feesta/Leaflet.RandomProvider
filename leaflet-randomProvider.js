
L.TileLayer.Random = L.TileLayer.extend({

	initialize: function (urls, options) {
        L.TileLayer.prototype.initialize.call(this, undefined, options);
        this._urls = urls;
	},

	setUrl: {},

	getTileUrl: function (coords) {
        this._url = this._urls[Math.floor(Math.random()*this._urls.length)];
		return L.Util.template(this._url, L.extend({
			r: this.options.detectRetina && L.Browser.retina && this.options.maxZoom > 0 ? '@2x' : '',
			s: this._getSubdomain(coords),
			x: coords.x,
			y: this.options.tms ? this._globalTileRange.max.y - coords.y : coords.y,
			z: this._getZoomForUrl()
		}, this.options));
	},
});

L.TileLayer.random = function(urls, options){
    return new L.TileLayer.Random(urls, options);
};
