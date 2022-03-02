import axios from 'axios';

export const orders = async (req, res) => {
	try{
	    //console.log(req.body)
	    ///trx?product=FF140&qty=1&dest=4101726098&refID=24628226&memberID=IPR0100&pin=887272&password=TY0OlIP0O1
	    const product = req.body.product
	    const qty 	  = req.body.qty 
	    const dest    = req.body.dest 
	    const refid   = req.body.refID 
	    const memberID= req.body.memberID
	    const pin 	  = req.body.pin 
	    const password= req.body.password

	    const resp = await axios.get('http://80.211.13.16:2900/trx?product='+product+'&qty='+qty+'&dest='+dest+'&refID='+refid+'&memberID='+memberID+'&pin='+pin+'&password='+password)
	    console.log(resp.data)
	    const name  = (resp.data).split('Yth ')[1].split(':#')[0]
	    const trxid = (resp.data).split('#')[1].split(' ')[0]
	    const refii = (resp.data).split('#')[1].split(' ')[1].split(' ')[0]
	    const kprod = (resp.data).split('#')[3].split(' ')[1].split('.')[0]
	    const desti = (resp.data).split('#')[3].split(' ')[1].split('.')[1]
	    //const desti = (resp.data).split('#')[3].split(' ')[1].split('.')[1]
	    const saldob = (resp.data).split('Saldo ')[1].split(' ')[0]
	    const harga  = (resp.data).split('Saldo ')[1].split(' ')[2]
	    const saldol = (resp.data).split('Saldo ')[1].split(' ')[4]

	    return res.json({name:name, trxid:trxid, refid:refii, kode_produk:kprod, destination:desti, saldo_awal:saldob, harga_produk:harga, saldo_akhir:saldol});
	}catch(err){
		console.log(err)
	}
	return {'status':'failed'}
}

