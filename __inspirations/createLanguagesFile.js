import { promises } from 'fs';

let data = `brithenig	bzt
dżuhuri	jdt
esperanto	eo
esperanto (morfem)	eom
ewe	ee
hindi	hi
ido	io
interlingua	ia
inuktitut	iu
jèrriais	jer
jidysz	yi
kotava	avk
ladino	lad
lingala	ln
lojban	jbo
novial	nov
papiamento	pap
pitjantjatjara	pjt
polski język migowy	pjm
quenya	qya
sanskryt	sa
slovio	slovio
sranan tongo	srn
tetum	tet
tok pisin	tpi
tupinambá	tpn
użycie międzynarodowe	inter
volapük	vo
znak chiński	zh-char
język abazyński	cau
język abchaski	ab
język abenaki	abe
język adygejski	ady
język afar	aa
język afrykanerski	af
język ajmara	ay
język akadyjski	akk
język aklanon	akl
język alabama	akz
język albański	sq
język alemański	als
język aleucki	ale
język amharski	am
język angielski	en
język arabski	ar
język aragoński	an
język aramejski	arc
język arapaho	arp
język arumuński	roa-rup
język asamski	as
język asturyjski	ast
język awarski	av
język azerski	az
język bambara	bm
język banjumasański	map-bms
język baskijski	eu
język baszkirski	ba
język bawarski	bar
język beludżi	bal
język bengalski	bn
język białoruski	be
język białoruski (taraszkiewica)	be-tarask
język birmański	my
język boloński	egl
język bośniacki	bs
język bretoński	br
język bułgarski	bg
język cebuano	ceb
język chakaski	kjh
język chantyjski (kazymski)	kca-k
język chantyjski (surgucki)	kca-s
język chantyjski (szuryszkarski)	kca-sz
język chantyjski (wachowski)	kca-w
język chickasaw	nai
język chiński standardowy	zh
język chorwacki	hr
język czagatajski	chg
język czamorro	ch
język czarnogórski	srp
język czeczeński	ce
język czeski	cs
język czirokeski	chr
język czuwaski	cv
język dalmatyński	dlm
język dolnoniemiecki	nds
język dolnołużycki	dsb
język duński	da
język dzongkha	dz
język erzja	myv
język estoński	et
język etruski	ett
język farerski	fo
język fenicki	phn
język fidżyjski	fj
język filipino	fil
język fiński	fi
język francuski	fr
język friulski	fur
język fryzyjski	fy
język ful	ff
język ga	gaa
język gagauski	tut
język galicyjski	gl
język gaskoński	oci-gsc
język gocki	got
język grenlandzki	kl
język gruziński	ka
język guarani	gn
język gudźarati	gu
język gyyz	gez
język górnołużycki	hsb
język haitański	ht
język hausa	ha
język hawajski	haw
język hebrajski	he
język hiligaynon	hil
język hiszpański	es
język hupa	hup
język ilokano	ilo
język indonezyjski	id
język inguski	inh
język irlandzki	ga
język islandzki	is
język istriocki	ist
język japoński	ja
język jawajski	jv
język jaćwieski	xsv
język joruba	yor
język kabylski	kab
język kakczikel	cak
język kannada	kn
język karaczajsko-bałkarski	krc
język karakałpacki	kaa
język kaszmirski	ks
język kaszubski	csb
język kataloński	ca
język kazachski	kk
język keczua	qu
język khmerski	km
język kirgiski	ky
język klingoński	tlh
język komi-jaźwiński	kom
język komi-permiacki	koi
język komi-zyriański	kpv
język konkani	kok
język koptyjski	cop
język koreański	ko
język kornijski	kw
język korsykański	co
język kri	cr
język krymskotatarski	crh
język kumycki	kum
język ladyński	lld
język langwedocki	oci-lnc
język laotański	lo
język lezgiński	lez
język liguryjski	lij
język limburski	lim
język litewski	lt
język lombardzki	lmo
język luksemburski	lb
język luo	luo
język macedoński	mk
język malajalam	ml
język malajski	ms
język malediwski	dv
język malgaski	mg
język maltański	mt
język manx	gv
język maoryski	mi
język marathi	mr
język maryjski	chm
język mazanderański	mzn
język mikmak	mic
język minnan	zh-min-nan
język mongolski	mn
język motu	meu
język nauruański	na
język nawaho	nv
język neapolitański	nap
język nepalski	ne
język newarski	new
język niderlandzki	nl
język niemiecki	de
język normandzki	nrm
język norweski (bokmål)	nb
język norweski (nynorsk)	nn
język nowogrecki	el
język nowopruski	art-prg
język orija	or
język ormiański	hy
język oromo	om
język osetyjski	os
język osmański	ota
język pali	pi
język paszto	ps
język pendżabski	pa
język perski	fa
język piemoncki	pms
język pikardyjski	pcd
język pirahã	myp
język polski	pl
język portugalski	pt
język połabski	pox
język prowansalski	oc
język północnofryzyjski	frr
język północnolapoński	sme
język rarotonga	rar
język romansz	roh
język romski	rom
język rosyjski	ru
język rumuński	ro
język rundi	rn
język russenorsk	crp-rsn
język sardyński	sc
język serbski	sr
język shelta	sth
język shona	sn
język sindhi	sd
język sko	sko
język skolt	sms
język somalijski	so
język sorani	ckb
język staro-cerkiewno-słowiański	cu
język staro-wysoko-niemiecki	goh
język staroangielski	ang
język staroegipski	egy
język starofrancuski	fro
język starogrecki	gr
język staroirlandzki	sga
język staronordyjski	non
język staroormiański	xcl
język staropruski	prg
język suahili	sw
język sumeryjski	sux
język sundajski	su
język susu	sus
język sycylijski	scn
język syngaleski	si
język szkocki	sco
język szkocki gaelicki	gla
język szorski	cjs
język szwabski	gsw
język szwedzki	sv
język słowacki	sk
język słoweński	sl
język słowiński	csb-slo
język tabasarański	tab
język tadżycki	tg
język tagalski	tl
język tahitański	ty
język tajski	th
język tamaszek	tmh
język tamazight	tzm
język tamilski	ta
język tashelhiyt	shi
język tatarski	tt
język telugu	te
język tigrinia	ti
język tonga	to
język turecki	tr
język turkmeński	tk
język tuvalu	tvl
język tuwiński	tyv
język twi	tw
język tybetański	bo
język tybetański klasyczny	xct
język udmurcki	udm
język ujgurski	ug
język ukraiński	uk
język urdu	ur
język uwea	wls
język uzbecki	uz
język võro	fiu
język walijski	cy
język waloński	wa
język warajski	war
język wenecki	vec
język wepski	vep
język wietnamski	vi
język wilamowski	wym
język wolof	wo
język wysokoislandzki	art-is
język węgierski	hu
język włoski	it
język yupik środkowy	ypk
język zachodnioflamandzki	vls
język zarfatit	zrp
język zazaki	zza
język zelandzki	zea
język zulu	zu
język łaciński	la
język łatgalski	ltg
język łotewski	lv
język średnio-dolno-niemiecki	gml
język średnio-wysoko-niemiecki	gmh
język średnioangielski	enm
język średnioniderlandzki	dum
język żmudzki	bat
język kałmucki	xal
język a-pucikwar	apq
język jakucki	sah
język lazyjski	lzz
język staroruski	orv
język kurmandżi	kmr
język neo	neu
język bislama	bi
język fryzyjski saterlandzki	stq
język pensylwański	pdc
język plautdietsch	pdt
Lingua Franca Nova	lfn
język karpatorusiński	rue
język arczyński	aqc
język xhosa	xh
język szerpa	xsr
romániço	roc
wenedyk	art-wen
język dari	prs
język serbsko-chorwacki	hbs
język bugijski	bug
język karelski	krl
język moksza	mdf
język ama	amm
język estremadurski	ext
język dołgański	dlg
język ewenkijski	evn
język taos	twf-tao
język mirandyjski	mwl
język staroperski	peo
język kabardyjski	kbd
język karatajski	kpt
język karaimski	kdr
język nieniecki	yrk
język tigre	tig
język tarencki	roa-tara
język giliański	glk
język rohingya	rhg
język północny sotho	nso
język inupiak	ik
język cziczewa	ny
język herero	hz
język abua	abn
język aczoli	ach
język adjukru	adj
język awestyjski	ae
język wotycki	vot
język marszalski	mh
język tumbuka	tum
język szan	shn
język luganda	lg
język mohawk	moh
język minangkabau	min
język akan	ak
język kantoński	yue
język syryjski klasyczny	syc
język starosaksoński	osx
język marwari	mwr
język sango	sg
język kanuri	kr
hiri motu	ho
język mon	mnw
język kildin	sjd
język balijski	ban
język mansyjski	mns
język czukocki	ckt
język inari	smn
język nahuatl klasyczny	nci
język nahuatl centralnego Meksyku	nhn
język maya	yua
język kiliwa	klb
język megrelski	xmf
język pontyjski	pnt
język ubychski	uby
język ketyjski	ket
język buruszaski	bsk
język mizo	lus
język eweński	eve
język nganasański	nio
język koriacki	kpy
język południowoałtajski	alt
język mandżurski	mnc
język mongolski klasyczny	cmg
język umbundu	umb
język hetycki	hit
język zachodniopendżabski	pnb
język kiribati	gil
język tobati	tti
hindi fidżyjskie	hif
język gan	gan
język cachurski	tkr
język lakota	lkt
język buriacki	bua
język niwchijski	mis
język nanajski	gld
język ajnoski	ain
język zhuang	za
język czejeński	chy
język lavukaleve	lvk
język aceh	ace
occidental	ie
język rypuaryjski	ksh
język bench	bcq
język franko-prowansalski	frp
język pampango	pam
język bafia	ksf
język norweski (riksmål)	nor
język samoański	sm
język krik	mus
język dungański	dng
język lakijski	lbe
język antylski	acf
język północnojukagirski	ykg
język yupik środkowosyberyjski	ess
język chuuk	chk
język botlichyjski	bph
język kikuju	ki
język mbukushu	mhw
język tai lue	khb
język diriku	diu
język lozi	loz
język ruanda	rw
język godoberyjski	gdo
język czoktaw	cho
język tokelau	tkl
język mokeński	mhn
język mistek yosondúa	mpm
gallo	roa-gal
język ndyuka	djk
język bisznuprija-manipuri	bpy
język liwski	liv
język meglenorumuński	ruq
język igbo	ig
język selepet	spl
język molbog	pwm
język tatana	txx
język rapanui	rap
język niue	niu
język massachusett	wam
język tshangla	tsj
język itelmeński	itl
język dani zachodni	dnw
język dżerma	dje
język kankuamo	qji
język purepecha	tsz
język jita	jit
język talossański	tzl
język kaingang	kgp
język kansa	ksk
język komoryjski ngazidża	zdj
język kreolski gujański	gyn
język bandżarski	bjn
język ibański	iba
język kweński	fkv
język istrorumuński	ruo
język fon	fon
język mandinka	mnk
język maranao	mrw
język pangasinan	pag
język doteli	dty
język amal	aad
język miniafia-oyan	aai
język ankave	aak
język arara parajski	aap
język algonkiński	alg
język arabela	arl
język południowojukagirski	yux
język yagua	yad
język zaparo	zro
język futuna wschodni	fud
język mandejski	mid
język sasak	sas
język suazi	ss
język mazahua	maz
język kadazdański	dtp
język seszelski	crs
język pileni	piv
język afade	aal
arvanitika	aat
język omahijsko-ponkaski	oma
język klallam	clm
język maurytyjski	mfe
język śląski niemiecki	sli
język tacki	ttt
język tarifit	rif
język ghadameski	gha
język nafusi	jbn
język zenaga	zen
język taznatit	grr
język warkalski	oua
język santyjski	sce
język siwi	siz
język sokna	swn
język hopi	hop
język wschodniokeresański	kee
język zachodniokeresański	kjq
język zuni	zun
język amis	ami
język elfdalski	ovd
język południowomarkiski	mqm
język północnomarkiski	mrq
język siksika	bla
język odżibwe	oji
język dargijski	dar
język starowalijski	owl
język nahuatl ze środkowej Huasteki	nch
język nahuatl z Puebli wyżynnej	azz
język nahuatl z północnej Puebli	ncj
język huastek	hus
język pipil	ppl
język otomi z doliny Mezquital	ote
toki pona	tok
język neosalomoński	pis
język knaan	czk
język komanczerski	com
język aari	aiw
język swański	sva
język hakka	hak
język mindong	cdo
język wu	wuu
język bradź	bra
język assiniboine	asb
język mandan	mhq
język atikamek	atj
język kabowerdeński	kea
yumplatok	tcs
kriol australijski	rop
prakryt śauraseni	psu
prakryt maharasztri	pmh
prakryt ardhamagadhi	pka
sindarin	sjn
miskito	miq
język wschodniokadazański	dtb
język środkowy bikolski	bcl
język bhodźpuri	bho
język matlatzinka	mat
język starofryzyjski	ofs
język tsonga	tso
język venda	ven
język mongorski	mjg
język bedża	bej
język selkupski	sel
język achwaski	akv
język jagnobijski	yai
język bagulalski	kva
język tindyjski	tin
język czamalalski	cji
język khowarski	khw
język hadżong	haj
język maithili	mai
prakryt magadhi	pra
język nahuatl z Orizaba	nlv
język nahuatl ze wschodniej Huasteki	nhe
język nahuatl z Tetelcingo	nhg
język nahuatl z zachodniej Huasteki	nhw
język nahuatl z Temascaltepec	nhv
język nahuatl z Guerrero	ngu
język nahuatl z Durango	azd
język nahuatl z Mecayapan	nhx
język nahuatl z Morelos	nhm
cerkiewnosłowiański	chu
język tswana	tsn
język yurok	yur
język kwama	kmq
język chaladzki	klj
język puluwat	puw
język nogajski	nog
język urumski	uum
język czułymski	clw
język chorasański	kmz
język salarski	slr
język kaszkajski	qxq
język północnoałtajski	atv
język dżurdżeński	juc
język orocki	orh
język oroczański	oac
język orokański	oaa
język azerski (południowy)	azb
język udehejski	ude
język ulczyjski	ulc
język dagurski	dta
język palauski	pau
język negidalski	neg
język mogolski	mhj
język vedda	ved
język bahnarski	bdq
język pingelapski	pif
język karagaski	kim
język sybeński	sjo
język bonański	peh
język dinka	din
język faliski	xfa
język szauniski	sjw
język umbryjski	xum
język ugarycki	uga
hunsrik	hrx
język iliski	ili
fanagalo	fng
język bugotu	bgt
język ndebele północny	nde
język ndebele południowy	nbl
język bulu	bum
język alutorski	alr
język zachodniojugurski	ybe
język dogri	dgo
język partyjski	xpr
język ruski	zle-ort
język staroczeski	zlw-ocs
język starosłowacki	zlw-osk
język jugorusiński	rsk`;

async function createFile() {
    try {
        // Otwieramy plik w trybie 'write' (w)
        const fileHandle = await promises.open("languages.json", "w");
        
        data =  data.split('\n')
        
        data = data.map( row => {
            return row.split('\t')
        })
        
        const jsonRows = []
        for(const [language, short] of data){
            jsonRows.push(
`{
    "language": "${language}",
    "short": "${short}"
}`)
        }

        const jsonToSave = `{
            "languages" : [
                ${jsonRows.join(',\n')}
    ]
        }`

        fileHandle.write( jsonToSave )

        console.log( jsonRows )

        // Opcjonalnie zamykamy uchwyt do pliku
        await fileHandle.close();
    } catch (err) {
        console.error("Wystąpił błąd:", err);
    }
}

createFile();