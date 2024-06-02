function createFn(
	@Body() body,
	@Res() res,
	@Req() req
) {
	try {
		console.log('hello')
	}catch(err){
		console.error(err);
	}
}

export class LinkAsset {
  @IsNotEmpty({ message: validationConstants.REQUIRED })
  @IsMongoId({ message: validationConstants.IS_OBJECT_ID })
  sourceAssetId: string;
  @IsNotEmpty({ message: validationConstants.REQUIRED })
  @IsMongoId({ message: validationConstants.IS_OBJECT_ID })
  targetAssetId: string;
}


const events = [
	{ title:'a', msg: 'e'},
{title:'b',msg:'e'},
	{ title:'ac', msg: 'c',},
]

let we=30;
const po =Date.now()+ we * 60 *1000  

res.send({ contentFilters: [], sort: [], somelongStrs: ['12',23,45]})