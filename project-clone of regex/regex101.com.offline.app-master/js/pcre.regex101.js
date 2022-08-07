function callout(_){if(debugging){var t=_>>2,e=(HEAP32[t+3],HEAP32[t+5]),R=HEAP32[t+6],a=HEAP32[t+10],E=HEAP32[t+11];callout_data[match_id]||(callout_data[match_id]=[]),callout_data[match_id][match_steps]={pstart:oldPatternStart,pend:oldPatternEnd,sstart:e,send:R-e,data:!0},oldPatternStart=a,oldPatternEnd=E,oldStrStart=e,oldStrEnd=R-e}match_steps++,total_steps++}function newMatch(_){if(debugging){var t;t=match_steps>0?_>=0?"Match found in "+(match_steps+1)+" step(s)":_===PCRE_ERROR_NOMATCH?"Match failed in "+(match_steps+1)+" step(s)":_===PCRE_ERROR_MATCHLIMIT?"Catastrophic backtracking was detected and execution halted. See: <a href='http://www.regular-expressions.info/catastrophic.html'>Runaway Regular Expressions</a>":"Funky error: "+_:"Optimization caused halt.",callout_data[match_id][match_steps]={pstart:oldPatternStart,pend:oldPatternEnd,sstart:oldStrStart,send:oldStrEnd,data:!0},match_steps++,callout_data[match_id][match_steps]={data:!1,msg:t,status:_},match_id++,match_steps=0,match_counter=0,tempMatchData={},total_steps++}}function free_regex(){void 0!==cached_pattern.name_table&&_free(cached_pattern.name_table),void 0!==cached_pattern.regex&&_free(cached_pattern.regex),cached_pattern={}}function preg_compile(_,t){if(t+="C",void 0!==cached_pattern){if(cached_pattern.pattern===_&&cached_pattern.options===t)return cached_pattern;free_regex()}for(var e=0,R=!1,a=0;a<t.length;a++)switch(t[a]){case"g":R=!0;break;case"i":e|=PCRE_CASELESS;break;case"m":e|=PCRE_MULTILINE;break;case"s":e|=PCRE_DOTALL;break;case"x":e|=PCRE_EXTENDED;break;case"A":e|=PCRE_ANCHORED;break;case"C":e|=PCRE_AUTO_CALLOUT;break;case"D":case"E":e|=PCRE_DOLLAR_ENDONLY;break;case"J":e|=PCRE_DUPNAMES;break;case"N":e|=PCRE_NO_AUTO_CAPTURE;break;case"S":break;case"U":e|=PCRE_UNGREEDY;break;case"X":e|=PCRE_EXTRA;break;case"Y":e|=PCRE_NO_START_OPTIMISE;break;case"u":e|=PCRE_UTF16|PCRE_UCP}cached_pattern.pattern=_,cached_pattern.options=t,cached_pattern.option_bits=e,cached_pattern.is_global=R;var E=_malloc(2*(2*_.length+1));stringToUTF16(_,E);var r=_malloc(4),c=_malloc(4),C=pcre_compile(E,e,r,c,null);if(!C){free_regex();var P=Pointer_stringify(HEAP32[r>>2])+" - offset: "+HEAP32[c>>2];throw self.postMessage({error:P}),new Error(P)}HEAP32[getCalloutAddr()>>2]=callout_ptr;var n=_malloc(4);pcre_fullinfo(C,null,PCRE_INFO_NAMECOUNT,n),cached_pattern.named_subpats=HEAP32[n>>2],_free(n);var l=_malloc(4);pcre_fullinfo(C,null,PCRE_INFO_NAMETABLE,l),cached_pattern.name_table=l;var A=_malloc(4);pcre_fullinfo(C,null,PCRE_INFO_NAMEENTRYSIZE,A),cached_pattern.name_entry_size=HEAP32[A>>2],_free(A);var T=_malloc(4);return pcre_fullinfo(C,null,PCRE_INFO_CAPTURECOUNT,T),cached_pattern.subpats=HEAP32[T>>2],cached_pattern.ovector_len=3*(HEAP32[T>>2]+1),_free(T),cached_pattern.match_limit=getExtraAddr(),cached_pattern.regex=C,_free(E),_free(r),_free(c),cached_pattern}function putPrefix(_,t,e){_[t]||(_[t]=""),_[t]=e+_[t]}function putSuffix(_,t,e){_[t]||(_[t]=""),_[t]+=e}function preg_match(_){if(cached_pattern.regex){callout_data=[],callout_html={},matchData={},tempMatchData={},lookbehind=void 0,oldPatternStart=oldPatternEnd=match_id=match_steps=total_steps=0;var t=_.length,e=_malloc(2*(2*_.length+1));stringToUTF16(_,e);var R=cached_pattern.named_subpats,a=cached_pattern.name_table,E=cached_pattern.name_entry_size;ovector_len=cached_pattern.ovector_len;var r=_malloc(4*ovector_len),c=r>>2,C=0,P=0,n=[],l=0,A={},T=[],O=0,s=!1;do{var o=pcre_exec(cached_pattern.regex,cached_pattern.match_limit,e,t,C,P,r,ovector_len);if(o>=0){newMatch(o),match_steps=0,match_counter=0,tempMatchData={},0==o&&(o=ovector_len/3);for(var d=[],p=0,N=0;2*o>N;N+=2){var I=HEAP32[c+N],u=HEAP32[c+(N+1)];d[p++]={start:I,end:u,content:_.substring(I,u),subpats:cached_pattern.subpats};var i=-1!==I;if(i){if(I===u)putPrefix(A,u,'<span class="match_99">&nbsp;</span>');else{var h="",m=n.length+";"+I+";"+u+";"+N/2;if(0===N)h="match0"+(s?"_2":""),s=!s;else{var S=N/2%10||10;h="match"+S}var F=";";if(R>0)for(var L=HEAP32[a>>2],f=0;R>f;f++){var M=HEAP8[L];void 0!==d[M]&&(d[M].name=UTF16ToString(L+2),M===p-1&&(F+=d[M].name)),L+=2*E}m+=F,putSuffix(A,I,'<span class="'+h+'" data-tooltip="'+m+'" data-groupNum="'+N/2+'">'),putPrefix(A,u,"</span>")}0===N&&(T[O++]={tag:'<span class="match0">',start:I,end:u})}}n[l++]=d}else{if(o!=PCRE_ERROR_NOMATCH){C>=t||newMatch(o);break}if(!(0!=P&&t>C)){match_steps>0&&newMatch(o);break}HEAP32[c]=C,HEAP32[c+1]=C+1,t-1>C&&"\r"===_.charAt(C)&&"\n"===_.charAt(C+1)&&(HEAP32[c+1]+=1),newMatch(o)}P=HEAP32[c+1]===HEAP32[c]?PCRE_NOTEMPTY_ATSTART|PCRE_ANCHORED:0,C=HEAP32[c+1]}while(cached_pattern.is_global);return _free(e),_free(r),{result:n,highlighter:A,sub:T,callout_data:callout_data,callout_html:callout_html,catastrophic:o===PCRE_ERROR_MATCHLIMIT,steps:total_steps}}throw new Error("No pattern supplied to matching function!")}importScripts("./pcrelib16.js?cache=sucks");var PCRE_CASELESS=1,PCRE_MULTILINE=2,PCRE_DOTALL=4,PCRE_EXTENDED=8,PCRE_ANCHORED=16,PCRE_DOLLAR_ENDONLY=32,PCRE_EXTRA=64,PCRE_NOTBOL=128,PCRE_NOTEOL=256,PCRE_UNGREEDY=512,PCRE_NOTEMPTY=1024,PCRE_UTF8=2048,PCRE_UTF16=2048,PCRE_UTF32=2048,PCRE_NO_AUTO_CAPTURE=4096,PCRE_NO_UTF8_CHECK=8192,PCRE_NO_UTF16_CHECK=8192,PCRE_NO_UTF32_CHECK=8192,PCRE_AUTO_CALLOUT=16384,PCRE_PARTIAL_SOFT=32768,PCRE_PARTIAL=32768,PCRE_NEVER_UTF=65536,PCRE_DFA_SHORTEST=65536,PCRE_DFA_RESTART=131072,PCRE_FIRSTLINE=262144,PCRE_DUPNAMES=524288,PCRE_NEWLINE_CR=1048576,PCRE_NEWLINE_LF=2097152,PCRE_NEWLINE_CRLF=3145728,PCRE_NEWLINE_ANY=4194304,PCRE_NEWLINE_ANYCRLF=5242880,PCRE_BSR_ANYCRLF=8388608,PCRE_BSR_UNICODE=16777216,PCRE_JAVASCRIPT_COMPAT=33554432,PCRE_NO_START_OPTIMIZE=67108864,PCRE_NO_START_OPTIMISE=67108864,PCRE_PARTIAL_HARD=134217728,PCRE_NOTEMPTY_ATSTART=268435456,PCRE_UCP=536870912,PCRE_INFO_OPTIONS=0,PCRE_INFO_SIZE=1,PCRE_INFO_CAPTURECOUNT=2,PCRE_INFO_BACKREFMAX=3,PCRE_INFO_FIRSTBYTE=4,PCRE_INFO_FIRSTCHAR=4,PCRE_INFO_FIRSTTABLE=5,PCRE_INFO_LASTLITERAL=6,PCRE_INFO_NAMEENTRYSIZE=7,PCRE_INFO_NAMECOUNT=8,PCRE_INFO_NAMETABLE=9,PCRE_INFO_STUDYSIZE=10,PCRE_INFO_DEFAULT_TABLES=11,PCRE_INFO_OKPARTIAL=12,PCRE_INFO_JCHANGED=13,PCRE_INFO_HASCRORLF=14,PCRE_INFO_MINLENGTH=15,PCRE_INFO_JIT=16,PCRE_INFO_JITSIZE=17,PCRE_INFO_MAXLOOKBEHIND=18,PCRE_INFO_FIRSTCHARACTER=19,PCRE_INFO_FIRSTCHARACTERFLAGS=20,PCRE_INFO_REQUIREDCHAR=21,PCRE_INFO_REQUIREDCHARFLAGS=22,PCRE_INFO_MATCHLIMIT=23,PCRE_INFO_RECURSIONLIMIT=24,PCRE_ERROR_NOMATCH=-1,PCRE_ERROR_NULL=-2,PCRE_ERROR_BADOPTION=-3,PCRE_ERROR_BADMAGIC=-4,PCRE_ERROR_UNKNOWN_OPCODE=-5,PCRE_ERROR_UNKNOWN_NODE=-5,PCRE_ERROR_NOMEMORY=-6,PCRE_ERROR_NOSUBSTRING=-7,PCRE_ERROR_MATCHLIMIT=-8,PCRE_ERROR_CALLOUT=-9,PCRE_ERROR_BADUTF8=-10,PCRE_ERROR_BADUTF16=-10,PCRE_ERROR_BADUTF32=-10,PCRE_ERROR_BADUTF8_OFFSET=-11,PCRE_ERROR_BADUTF16_OFFSET=-11,PCRE_ERROR_PARTIAL=-12,PCRE_ERROR_BADPARTIAL=-13,PCRE_ERROR_INTERNAL=-14,PCRE_ERROR_BADCOUNT=-15,PCRE_ERROR_DFA_UITEM=-16,PCRE_ERROR_DFA_UCOND=-17,PCRE_ERROR_DFA_UMLIMIT=-18,PCRE_ERROR_DFA_WSSIZE=-19,PCRE_ERROR_DFA_RECURSE=-20,PCRE_ERROR_RECURSIONLIMIT=-21,PCRE_ERROR_NULLWSLIMIT=-22,PCRE_ERROR_BADNEWLINE=-23,PCRE_ERROR_BADOFFSET=-24,PCRE_ERROR_SHORTUTF8=-25,PCRE_ERROR_SHORTUTF16=-25,PCRE_ERROR_RECURSELOOP=-26,PCRE_ERROR_JIT_STACKLIMIT=-27,PCRE_ERROR_BADMODE=-28,PCRE_ERROR_BADENDIANNESS=-29,PCRE_ERROR_DFA_BADRESTART=-30,PCRE_ERROR_JIT_BADOPTION=-31,PCRE_ERROR_BADLENGTH=-32,PCRE_ERROR_UNSET=-33,PCRE_EXTRA_STUDY_DATA=1,PCRE_EXTRA_MATCH_LIMIT=2,PCRE_EXTRA_CALLOUT_DATA=4,PCRE_EXTRA_TABLES=8,PCRE_EXTRA_MATCH_LIMIT_RECURSION=16,pcre_compile=Module.cwrap("pcre16_compile","number",["number","number","number","number","number"]),pcre_exec=Module.cwrap("pcre16_exec","number",["number","number","number","number","number","number","number","number"]),pcre_fullinfo=Module.cwrap("pcre16_fullinfo","number",["number","number","number","number"]),getCalloutAddr=Module.cwrap("getCalloutAddress","number",[]),getExtraAddr=Module.cwrap("getExtraAddress","number",[]),cached_pattern={},callout_ptr=Runtime.addFunction(callout),match_id,match_steps,total_steps,callout_data,callout_html,oldPatternStart=0,oldPatternEnd=0,oldStrStart=0,oldStrEnd=0,matchData={},tempMatchData={},lookbehind=void 0,debugging=!1;self.onmessage=function(_){debugging=_.data.debugging,self.postMessage("onload"),preg_compile(_.data.regex,_.data.options),self.postMessage(preg_match(_.data.regexText))};