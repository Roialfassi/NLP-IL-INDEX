(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["LabsAndResearchers-vue"],{"680b":function(e,a,r){},8117:function(e,a,r){"use strict";r("680b")},"95f9":function(e,a,r){"use strict";r.r(a);var s=function(){var e=this,a=e._self._c;return a("div",[a("h1",[e._v("Labs & Researchers")]),a("div",{staticClass:"filters"},[a("label",[e._v("\n       Search Your Item\n    "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],attrs:{type:"text",placeholder:"Search items"},domProps:{value:e.searchQuery},on:{input:function(a){a.target.composing||(e.searchQuery=a.target.value)}}})]),a("br"),a("label",[e._v("\n      Filter by tag:\n      "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedTag,expression:"selectedTag"}],on:{change:[function(a){var r=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.selectedTag=a.target.multiple?r:r[0]},e.filterItems]}},[a("option",{attrs:{value:"all"}},[e._v("All")]),e._l(e.tags,(function(r){return a("option",{domProps:{value:r}},[e._v(e._s(r))])}))],2)]),a("br")]),a("div",{staticClass:"items-section"},e._l(e.itemsToDisplay,(function(r,s){return a("div",{key:r.name,staticClass:"item"},[a("h3",{staticClass:"item-name"},[e._v(e._s(r.name))]),a("p",[e._v(e._s(r.tags.join(", ")))]),a("a",{staticClass:"linkToRef",attrs:{href:r.url,target:"_blank"}},[e._v("Link to source")]),a("br"),a("br"),a("div",[a("transition",{attrs:{duration:{enter:800,leave:100},name:"fade",mode:"out-in"}},[r.expanded?a("div",{staticClass:"expandable"},[e._v("\n            "+e._s(r.description)+"\n            "),a("br"),a("br")]):e._e()]),a("button",{staticClass:"expand-button",on:{click:function(a){return e.toggleExpanded(r.name)}}},[e._v(e._s(r.buttonText))])],1)])})),0)])},i=[],t={data(){return{searchQuery:"",expanded:!1,items:[],tags:["Lab","Researcher","Academia","Bar Ilan University","The Open University of Israel","Ben-Gurion University","University of Haifa","Tel Aviv University","The Technion","The Hebrew University of Jerusalem","Non-Profit","Industry"],selectedTag:"all"}},computed:{itemsToDisplay(){let e=this.items.map(e=>({...e,buttonText:e.expanded?"Collapse":"Expand"}));return e=e.filter(e=>e.name.toLowerCase().includes(this.searchQuery.toLowerCase())),"all"===this.selectedTag?e:e.filter(e=>e.tags.includes(this.selectedTag))}},beforeMount(){let e=r("f3e1").map(e=>({...e,expanded:!1}));this.items=e},methods:{filterItems(){},toggleExpanded(e){const a=this.items.find(a=>a.name===e);a.expanded=!a.expanded}}},n=t,o=(r("8117"),r("2877")),c=Object(o["a"])(n,s,i,!1,null,null,null);a["default"]=c.exports},f3e1:function(e){e.exports=JSON.parse('[{"name":"The ONLP Lab","tags":["Labs & Researchers","Academia","Bar Ilan University","Lab"],"description":"NLP Lab","url":"https://nlp.biu.ac.il/~rtsarfaty/onlp#"},{"name":"Prof. Reut Tsarfaty","tags":["Labs & Researchers","Academia","Bar Ilan University","Researcher"],"description":"Head of the ONLP Lab.","url":"https://nlp.biu.ac.il/~rtsarfaty/"},{"name":"Dan Bareket","tags":["Labs & Researchers","Academia","Bar Ilan University","Researcher"],"description":"Data Scientist","url":"/"},{"name":"The Natural Language Processing Lab at Bar Ilan University","tags":["Labs & Researchers","Academia","Bar Ilan University","Lab"],"description":"Twitter <https://twitter.com/biunlp/>","url":"http://u.cs.biu.ac.il/~nlp/"},{"name":"Prof. Ido Dagan ","tags":["Labs & Researchers","Academia","Bar Ilan University","Researcher"],"description":"Prof","url":"http://u.cs.biu.ac.il/~dagan/"},{"name":"Prof. Yoav Goldberg","tags":["Labs & Researchers","Academia","Bar Ilan University","Researcher","Non-Profit"],"description":"Prof","url":"http://u.cs.biu.ac.il/~yogo/"},{"name":"Graduate Students & Researchers List","tags":["Labs & Researchers","Academia","Bar Ilan University","Researcher"],"description":"List of graduate students","url":"http://u.cs.biu.ac.il/~nlp/people/graduate-students-researchers/"},{"name":"Prof. Moshe Koppel","tags":["Labs & Researchers","Academia","Bar Ilan University","Researcher"],"description":"prof","url":"https://www1.biu.ac.il/indexE.php?id=8041&pt=30&cPath=7702"},{"name":"Dr. Avi Shmidman","tags":["Labs & Researchers","Academia","Bar Ilan University","Researcher"],"description":"Dr","url":"http://dsi.biu.ac.il/team/dr-avi-shmidman/"},{"name":"Prof. Joseph (Yossi) Keshet","tags":["Labs & Researchers","Academia","Bar Ilan University","Researcher"],"description":"Prof","url":"http://u.cs.biu.ac.il/~jkeshet"},{"name":"The Speech, Language and Deep Learning Lab at Bar Ilan University","tags":["Labs & Researchers","Academia","Bar Ilan University","Lab"],"description":"GitHub <https://github.com/MLSpeech>","url":"http://u.cs.biu.ac.il/~jkeshet/#lab"},{"name":"The Open Media and Information Lab (OMILab) at the Open University of Israel","tags":["Labs & Researchers","Academia","The Open University of Israel","Lab"],"description":"An interdisciplinary center for research and for teaching in new media and related areas, such as big data, information science, network cultures and digital sociology.","url":"https://www.openu.ac.il/en/omilab/pages/default.aspx"},{"name":"Dr. Vered Silber-Varod","tags":["Labs & Researchers","Academia","The Open University of Israel","Researcher"],"description":"Director of the Open Media and Information Lab (OMILab). Research interests and publications focus on various aspects of speech sciences, with expertise in speech prosody, acoustic phonetics, and speech communication and text analytics.","url":"https://www.openu.ac.il/en/personalsites/VeredSilberVarod.aspx"},{"name":"Dr. Anat Lerner","tags":["Labs & Researchers","Academia","The Open University of Israel","Researcher"],"description":"Senior Lecturer  Interested in speech prosody analyses, combinatorial auctions and computer Networks (especially Ad-Hoc networks, mobile and cellular networks).","url":"https://www.openu.ac.il/en/personalsites/AnatLerner.aspx"},{"name":"Natural Language Processing Lab at Ben Gurion University","tags":["Labs & Researchers","Academia","Ben-Gurion University","Lab"],"description":"","url":"https://www.cs.bgu.ac.il/~elhadad/nlpproj/"},{"name":"Prof. Michael Elhadad","tags":["Labs & Researchers","Academia","Ben-Gurion University","Researcher"],"description":"Prof","url":"https://www.cs.bgu.ac.il/~elhadad/"},{"name":"Dr. Yael Netzer","tags":["Labs & Researchers","Academia","Ben-Gurion University","Researcher"],"description":"Dr","url":"https://www.cs.bgu.ac.il/~yaeln/"},{"name":"Dr. Meni Adler","tags":["Labs & Researchers","Academia","Ben-Gurion University","Researcher"],"description":"Dr","url":"https://www.cs.bgu.ac.il/~adlerm/"},{"name":"Dr. Oren Tzur","tags":["Labs & Researchers","Academia","Ben-Gurion University","Researcher"],"description":"Dr","url":"http://www.ise.bgu.ac.il/OrenTsur/"},{"name":"Prof. Shuly Wintner","tags":["Labs & Researchers","Academia","University of Haifa","Researcher"],"description":"Prof","url":"http://cs.haifa.ac.il/~shuly/Shuly_Wintner/Home.html"},{"name":"Dr. Einat Minkov","tags":["Labs & Researchers","Academia","University of Haifa","Researcher"],"description":"Working on Information Extraction and Semantics, as well as in other Natural Language Processing applications. I am also interested in Machine Learning - and the application of learning to NLP problems.","url":"https://sites.google.com/hevra.haifa.ac.il/einatm/"},{"name":"Prof. Jonathan Berant","tags":["Labs & Researchers","Academia","Tel Aviv University","Researcher","Non-Profit"],"description":"Prof","url":"http://www.cs.tau.ac.il/~joberant/"},{"name":"Dr Yonatan Belinkov","tags":["Labs & Researchers","Academia","The Technion","Researcher"],"description":"Assistant Professor at the faculty of Computer Science. Focus: interpretability and robustness.","url":"https://www.cs.technion.ac.il/~belinkov/"},{"name":"Prof. Alon Itai","tags":["Labs & Researchers","Academia","The Technion","Researcher"],"description":"retired","url":"http://www.cs.technion.ac.il/~itai/"},{"name":"Prof. Roi Reichart","tags":["Labs & Researchers","Academia","The Technion","Researcher"],"description":"An Assistant Professor at the faculty of Industrial Engineering and Management of the Technion. Working on Natural Language Processing (NLP). Interested in language learning in its context and design models that integrate domain and world knowledge with data-driven methods.","url":"https://ie.technion.ac.il/~roiri/"},{"name":"Prof. Ronen Feldman","tags":["Labs & Researchers","Academia","The Hebrew University of Jerusalem","Researcher"],"description":"Feldman\'s main areas of research are natural language processing, entity extraction and text relations, text sentiment analysis, and language processing for algorithmic trading. He is one of the founder of the discipline of text mining.","url":"http://pluto.huji.ac.il/~rfeldman/"},{"name":"Prof. Ari Rappoport","tags":["Labs & Researchers","Academia","The Hebrew University of Jerusalem","Researcher"],"description":"With his main contribution in the area of Neuroscience, where he developed a comprehensive theory of the brain, Prof. Rappoport\'s Computer Science area of interest is language (Computational Linguistics, Natural Language Processing (NLP)), from cognitive science and machine learning perspectives.","url":"http://www.cs.huji.ac.il/~arir/"},{"name":"Prof. Omri Abend","tags":["Labs & Researchers","Academia","The Hebrew University of Jerusalem","Researcher"],"description":"My fields of interest are Computational Linguistics and Natural Language Processing. Specifically, I conduct research on semantic (meaning) representation from a computational perspective. My research is tightly linked to statistical learning, language technology (such as Machine Translation and Information Extraction), and computational modeling of child language acquisition.","url":"http://www.cs.huji.ac.il/~oabend/"},{"name":"Prof. Dafna Shahaf","tags":["Labs & Researchers","Academia","The Hebrew University of Jerusalem","Researcher"],"description":"Prof. Shahaf\'s research focuses on helping people make sense of the world. She designs algorithms that help people understand the underlying structure of complex topics, and connect the dots between different pieces. She also likes to formalize intuitive notions; see recent work on Computational Humor.","url":"http://www.cs.huji.ac.il/~dshahaf/"},{"name":"The Neurolinguistics Laboratory at the Edmond and Lily Safra Center for Brain Sciences (ELSC)","tags":["Labs & Researchers","Academia","The Hebrew University of Jerusalem","Lab"],"description":"Hebrew University NLP Lab","url":"https://www.grodzinskylab.com"},{"name":"Prof. Yosef Grodzinsky","tags":["Labs & Researchers","Academia","The Hebrew University of Jerusalem","Researcher"],"description":"Research fields: functional anatomy of language, linguistic theory (syntax, semantics), language acquisition, aphasia, individual variation.","url":"https://en.cognitive.huji.ac.il/people/yosef-grodzinsky?ref_tid=3172"},{"name":"Allen Institute for AI - Israel","tags":["Labs & Researchers","Non-Profit"],"description":"","url":"https://allenai.org/ai2-israel"},{"name":"Researching natural language processing in the industry?","tags":["Labs & Researchers","Academia","Industry"],"description":"Open a pull request and add yourself here now!","url":"https://github.com/NNLP-IL/Resources/pulls"}]')}}]);
//# sourceMappingURL=LabsAndResearchers-vue.46094afb.js.map