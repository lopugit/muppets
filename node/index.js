global.env = require('minimist')(process.argv.slice(2))
global.logging = {
	mongoose: {
		values: false,
		write: true
	},
	timing: {

	}
}

global.secrets = require('secrets')

let muppets = require('muppets')()

let scripts = require('scripts')

let minutes = 5 

if(global.logging && global.logging.timing){
	console.log(`running scripts now and then every ${minutes} minutes`)
}
console.log('test 1')
let run = async ()=>{
	
	console.log('test 2')
	await scripts({muppets}).catch(err=>console.error(err))
	global.scriptsInterval = setInterval(async ()=>{
		await scripts({muppets}).catch(err=>{console.error('something went wrong running the first scripts({muppets}), ', err)})
	}, minutes * 1000 * 60)

}
run()
console.log(`
  
starting the show
  
`)
var ascii = 0
  if(ascii){
    console.log(
      `
                              (  .      )
                              )           (              )
                                .  '   .   '  .  '  .
                          (    , )       (.   )  (   ',    )
                            .' ) ( . )    ,  ( ,     )   ( .
                              ( .   (  ) ( , ') 			 (  ,    )
                                ), ) _) _,')  					,. (' )
                                    __o__
                              /\ | /\  ,__,             \              
                              /__\|/__\o/o /             /                 ,
              __(\          ,   , |    \`7 /              \_               /)
          _.-'   \\        _)\_/) |    __||___,     <----)_)---<<        //
      ,-'  _.---'\\      (/ (6\> |___// /_ /_\ ,_,_,   / )\            //
    ,'_.--'       \\    /\`  _ /\>/._\/\/__/\ | =/= /  / /  \_         //
                    \\  / ,_//\  \>' , / ,/ / ) \`0 /  / /,__, \       //
                    \\ \_('o  | )> _)\_/) |\/  __\\_/ /o/o /-       //
                ,   ,\\  \`7 / /   (/ (0\>  , _/,/ /_'/ \j /      o<\>>o
                _)\_/) \\,__\\_\' /\`  _ /\>_)\_/)|_|_/ __//___,____/_\
              (/ (9\>  \\_) | / / ,_//\  (/ (6\> )_/_// /_ /__\_/_/
              /\`  _ /\> /\\\/_/ '\_('  | /\`  _ /\>/._\/\/__/
            / ,_//\  \>' \_)/  \_|  _/// ,_//\  \>    _)_/
            \_('  |  )>  x / _/ / _/  \\_('\||  )>   x)_::\       ______,
                  /  \>_//( (  / /--.,/     +/  \>__//  o /----.,/(  )\\))
                  \'  \| ) \| / /    / '     \'  \|  )___/ \     \/  \\\\\
                  /    +-/</\/ /    /  \_|   /    +-/o/----+      |
                  / '     \ _/,/  _ / _/ / _// '     \_\,  ___     /
                /  \_|  _// ( __,/( (  / / /  \_|  _/\_|-" /,    /
                / _/ / _/  ^-' |  | \| / / / _/ / _/   )\|  |   _/
              ( (  / /    /_/  \_ \_\/ / ( (  / /    /_/ \_ \_(__
                \| / /           / /_/,/   \| / /           / /  /
                \/ /           / // (      \/ /           / / _/
                _/,/          _/_/,^-'     _/,/          _/_/,/
              / (           /_/ (        / (    b'ger  /_/ (
              ^-'             ^-'        ^-'             ^-'
      `
    )
  } else if(ascii){
    console.log(`
            __     __
           (( \\---/ ))
            )__   __(
           / ()___() \\
           \\  /(_)\\  /
            \\ \\_|_/ /
      _______>     <_______
     //\\      |>o<|      /\\\\
     \\\\/___           ___\\//
           |         |
           |         |
           |         |
           |         |
           \`--....---'
             \\     \\
              \\     \`.  hjw   _
               \\      \`.     | |                    
 _ __  _   _ _ __  _ __   ___| |_ ___  ___ _ __ ___ 
| '_ \\| | | | '_ \\| '_ \\ / _ \\ __/ _ \\/ _ \\ '__/ __|
| |_) | |_| | |_) | |_) |  __/ ||  __/  __/ |  \\__ \\
| .__/ \\__,_| .__/| .__/ \\___|\\__\\___|\\___|_|  |___/
| |         | |   | |                               
|_|         |_|   |_|   

    `)
  } else {
		console.log(`
                                             888            
                                             888            
                                             888            
88888b.d88b. 888  88888888b. 88888b.  .d88b. 888888.d8888b  
888 "888 "88b888  888888 "88b888 "88bd8P  Y8b888   88K      
888  888  888888  888888  888888  88888888888888   "Y8888b. 
888  888  888Y88b 888888 d88P888 d88PY8b.    Y88b.      X88 
888  888  888 "Y8888888888P" 88888P"  "Y8888  "Y888 88888P' 
                     888     888                            
                     888     888                            
                     888     888                            
`)
console.log(`
           . -- .                    This message has been brought to you
          (      )                  by the letters P and H and the number 7.
         ( (/oo\\) )                  <-- Seattle Pacific University -->
          ( \\''/ )                               WW
           ( \\/ )      wwwwww                   /__\\
          (      )   w"ww  ww"w                | oo |   _WWWWW_
         (        ) W   o""o   W    (o)(o)    (|_()_|) /  o o  \\   (+)(+)
   oo   (          )W  ______  W  w"      "w    \\__/ (|  __O__  |)/      \\
 w"()"w  (        ) "w \\_\\/_/ w" W  -====-  W  /|\\/|\\  \\ \\___/ /  \\ -==- /
W -==- W   ' -- '  ww""wwwwww""ww "w      w"  |||||||| /-------\\   \\    /
 "wwww"     =  =    |||||||||||| w""""""""""w |||||||||=========| <\\/\\/\\/>
w"    "w    =  =    ||||||||||||W            W|||||||||=========| /      \\
  Elmo    Big Bird     Oscar    Cookie Monster  Bert     Ernie     Kermit
	
`)
	}

module.exports = muppets
