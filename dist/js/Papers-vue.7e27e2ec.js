(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Papers-vue"],{"2a4a":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e._self._c;return a("div",[a("h1",[e._v("Hebrew NLP Papers")]),a("div",{staticClass:"filters"},[a("label",[e._v("\n       Search Your Item\n    "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],attrs:{type:"text",placeholder:"Search items"},domProps:{value:e.searchQuery},on:{input:function(a){a.target.composing||(e.searchQuery=a.target.value)}}})]),a("br"),a("label",[e._v("\n      Filter by tag:\n      "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedTag,expression:"selectedTag"}],on:{change:[function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.selectedTag=a.target.multiple?t:t[0]},e.filterItems]}},[a("option",{attrs:{value:"all"}},[e._v("All")]),e._l(e.tags,(function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])}))],2)]),a("br")]),a("div",{staticClass:"items-section"},e._l(e.itemsToDisplay,(function(t,i){return a("div",{key:t.name,staticClass:"item"},[a("h3",{staticClass:"item-name"},[e._v(e._s(t.name))]),a("p",[e._v(e._s(t.tags.join(", ")))]),a("a",{staticClass:"linkToRef",attrs:{href:t.url,target:"_blank"}},[e._v("Link to source")]),a("br"),a("br"),a("div",[a("transition",{attrs:{duration:{enter:800,leave:100},name:"fade",mode:"out-in"}},[t.expanded?a("div",{staticClass:"expandable"},[e._v("\n            "+e._s(t.description)+"\n            "),a("br"),a("br")]):e._e()]),a("button",{staticClass:"expand-button",on:{click:function(a){return e.toggleExpanded(t.name)}}},[e._v(e._s(t.buttonText))])],1)])})),0)])},r=[],n={data(){return{searchQuery:"",expanded:!1,items:[],tags:["Corpora, Lexicon and Dictionary Generation","Morphological Analysis & Disambiguation","Word Embeddings","Methodology","Other NLP Papers"],selectedTag:"all"}},computed:{itemsToDisplay(){let e=this.items.map(e=>({...e,buttonText:e.expanded?"Collapse":"Expand"}));return e=e.filter(e=>e.name.toLowerCase().includes(this.searchQuery.toLowerCase())),"all"===this.selectedTag?e:e.filter(e=>e.tags.includes(this.selectedTag))}},beforeMount(){let e=t("66b0").map(e=>({...e,expanded:!1}));this.items=e},methods:{filterItems(){},toggleExpanded(e){const a=this.items.find(a=>a.name===e);a.expanded=!a.expanded}}},o=n,s=(t("481c"),t("2877")),l=Object(s["a"])(o,i,r,!1,null,null,null);a["default"]=l.exports},"481c":function(e,a,t){"use strict";t("661d")},"661d":function(e,a,t){},"66b0":function(e){e.exports=JSON.parse('[{"name":"Hebrew Dependency Parsing: Initial Results","tags":["Papers","Corpora, Lexicon and Dictionary Generation"],"writers":["Yoav Goldberg","Michael Elhadad"],"description":"IWPT-2009 (Short Paper)","url":"https://www.cs.bgu.ac.il/~yoavg/publications/iwpt2009depbaseline.pdf"},{"name":"A Computational Lexicon of Contemporary Hebrew","tags":["Papers","Corpora, Lexicon and Dictionary Generation"],"writers":["Alon Itai","Shuly Wintner","Shlomo Yona"],"description":"Proceedings of The fifth international conference on Language Resources and Evaluation (LREC-2006). Genoa, Italy.","url":"http://www.cs.technion.ac.il/~itai/publications/NLP/lexicon-final.pdf?fbclid=IwAR1bBcwEA7A__fWG1a1fwDdcqKZj375YcMdCrhYrdBkUw_SZTrB8flHnf9M"},{"name":"Language Resources for Hebrew.","tags":["Papers","Corpora, Lexicon and Dictionary Generation"],"writers":["Alon Itai","Shuly Wintner"],"description":"Language Resources and Evaluation 42(1):75-98, March 2008.","url":"http://cs.haifa.ac.il/~shuly/publications/lre4h.pdf"},{"name":"Hebrew WordNet: A Test Case of Aligning Lexical Databases Across Languages.","tags":["Papers","Corpora, Lexicon and Dictionary Generation"],"writers":["Noam Ordan","Shuly Wintner"],"description":"International Journal of Translation 19(1):39-58, 2007.","url":"http://cs.haifa.ac.il/~shuly/publications/wordnet.pdf"},{"name":"Representing Natural Gender in Multilingual Lexical Databases.","tags":["Papers","Corpora, Lexicon and Dictionary Generation"],"writers":["Noam Ordan","Shuly Wintner"],"description":"International Journal of Lexicography 18(3):357-370, September 2005.","url":"http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.81.8099&rep=rep1&type=pdf"},{"name":"Building a Tree-Bank of Modern Hebrew Text.","tags":["Papers","Corpora, Lexicon and Dictionary Generation"],"writers":["Khalil Sima\'an","Alon Itai","Yoad Winter","Alon Altman","Noa Nativ"],"description":"Traitment Automatique des Langues, 42, 347-380. 2001.","url":"http://www.cs.technion.ac.il/~winter/Corpus-Project/paper.pdf"},{"name":"A Finite-State Morphological Grammar of Hebrew.","tags":["Papers","Morphological Analysis & Disambiguation"],"description":"","writers":["Shlomo Yona","Shuly Wintner"],"url":"http://cs.haifa.ac.il/~shuly/publications/morphgram.pdf"},{"name":"Hebrew Morphological Disambiguation: An Unsupervised Stochastic Word-based Approach.","tags":["Papers","Morphological Analysis & Disambiguation"],"description":"","writers":["Meni Adler"],"url":"https://www.cs.bgu.ac.il/~adlerm/dat/thesis.pdf"},{"name":"Part-of-Speech Tagging of Modern Hebrew Text.","tags":["Papers","Morphological Analysis & Disambiguation"],"description":"","writers":["Roy Bar-Haim","Khalil Sima\'an","Yoad Winter"],"url":"http://www.cs.technion.ac.il/~barhaim/MorphTagger/HebrewPOSTaggingNLE.pdf"},{"name":"Data-Driven Morphological Analysis and Disambiguation for Morphologically Rich Languages and Universal Dependencies","tags":["Papers","Morphological Analysis & Disambiguation"],"description":"","writers":["Amir More","Reut Tsarfaty"],"url":"http://aclweb.org/anthology/C16-1033"},{"name":"A Characterwise Windowed Approach to Hebrew Morphological Segmentation","tags":["Papers","Morphological Analysis & Disambiguation"],"description":"","writers":["Amir Zeldes"],"url":"http://aclweb.org/anthology/W18-5811"},{"name":"The Interplay of Semantics and Morphology in Word Embeddings","tags":["Papers","Word Embeddings"],"writers":["Oded Avraham","Yoav Goldberg"],"description":"Proceedings of the 15th Conference of the European Chapter of the Association for Computational Linguistics (EACL 2017).","url":"https://arxiv.org/abs/1704.01938"},{"name":"Named Entities Tagging Guidelines for Hebrew","tags":["Papers","Methodology"],"writers":["Michael Elhadad","Naama Ben-Mordecai"],"description":"Written during M.Sc. research by Naama Ben-Mordecai advised by Dr. Michael Elhadad at the Department of Computer Science, Ben-Gurion University.","url":"https://github.com/NLPH/NLPH_Resources/blob/master/methodology/hebrew_named_entity_tagging_guidelines.doc?raw=true"},{"name":"Automatic Hebrew Text Vocalization","tags":["Papers","Other NLP Papers"],"writers":["Eran Tomer"],"description":"Thesis submitted as part of the requirements for the M.Sc. degree of Ben-Gurion University of the Negev, 2012. Broken Link","url":"http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.357.7101&rep=rep1&type=pdf"}]')}}]);
//# sourceMappingURL=Papers-vue.7e27e2ec.js.map