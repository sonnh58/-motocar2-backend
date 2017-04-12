var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CarSchema = new Schema({
    record_id: String,
    title : String,
    url: String,
    year: String,
    make: String,
    model: String,
    trim: String,
    price: String,
    description: String,
    address: String,
    city: String,
    country: String,
    dealerID: String,
    dealerEmail: String,
    dealerPhone: String,
    htmlDescription: String,
    category: String,
    subCategory: String,
    exteriorColor: String,
    interiorColor: String,
    interiorSurface: String,
    transmission: String,
    engine: String,
    body: String,
    doors: String,
    driveTrain: String,
    fuel: String,
    vin: String,
    mileage: String,
    stockNo: String,
    soldTo: String,
    image_url: String,
    Images: Schema.Types.Mixed,
    notified: { type: String, default: 'Pending' }
}, { collection: 'cars' });

module.exports = mongoose.model('Car', CarSchema);
