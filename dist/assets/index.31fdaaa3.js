import{m as C}from"./vendor.625f8fdd.js";!function(){const C=document.createElement("link").relList;if(!(C&&C.supports&&C.supports("modulepreload"))){for(const C of document.querySelectorAll('link[rel="modulepreload"]'))e(C);new MutationObserver((C=>{for(const t of C)if("childList"===t.type)for(const C of t.addedNodes)"LINK"===C.tagName&&"modulepreload"===C.rel&&e(C)})).observe(document,{childList:!0,subtree:!0})}function e(C){if(C.ep)return;C.ep=!0;const e=function(C){const e={};return C.integrity&&(e.integrity=C.integrity),C.referrerpolicy&&(e.referrerPolicy=C.referrerpolicy),"use-credentials"===C.crossorigin?e.credentials="include":"anonymous"===C.crossorigin?e.credentials="omit":e.credentials="same-origin",e}(C);fetch(C.href,e)}}();const e={C:["C^","D-7","E-7","F^","G7","A-7"],Db:["Db^","Eb-7","F-7","Gb^","Ab7","Bb-7"],D:["D^","E-7","F#-7","G^","A7","B-7"],Eb:["Eb^","F-7","G-7","Ab^","Bb7","C-7"],E:["E^","F#-7","G#-7","A^","B7","C#-7"],F:["F^","G-7","A-7","Bb^","C7","D-7"],Gb:["Gb^","Ab-7","Bb-7","Cb^","Db7","Eb-7"],G:["G^","A-7","B-7","C^","D7","E-7"],Ab:["Ab^","Bb-7","C-7","Db^","Eb7","F-7"],A:["A^","B-7","C#-7","D^","E7","F#-7"],Bb:["Bb^","C-7","D-7","Eb^","F7","G-7"],B:["B^","C#-7","D#-7","E^","F#7","G#-7"],"A-":["A-7","C^","D-7","E-7","F^","G7"],"Bb-":["Bb-7","Db^","Eb-7","F-7","Gb^","Ab7"],"B-":["B-7","D^","E-7","F#-7","G^","A7"],"C-":["C-7","Eb^","F-7","G-7","Ab^","Bb7"],"C#-":["C#-7","E^","F#-7","G#-7","A^","B7"],"D-":["D-7","F^","G-7","A-7","Bb^","C7"],"Eb-":["Eb-7","Gb^","Ab-7","Bb-7","Cb^","Db7"],"E-":["E-7","G^","A-7","B-7","C^","D7"],"F-":["F-7","Ab^","Bb-7","C-7","Db^","Eb7"],"F#-":["F#-7","A^","B-7","C#-7","D^","E7"],"G-":["G-7","Bb^","C-7","D-7","Eb^","F7"],"G#-":["G#-7","B^","C#-7","D#-7","E^","F#7"]},t={1:["T44{C   | x  | x  | x  }"],2:["T44{C   | C  }","T44{C   | x  | C  | x  }"],3:["T44{C C |C   }","T44{C   |C C }","T44{C   | x  |C   | C  }","T44{C   |C   | x  | C  }","T44{C   |C   | C  | x  }"],4:["T44{C C |C C }","T44{C   |C   |C   |C   }"],5:["T44{C C |C   |C   |C   }","T44{C   |C C |C   |C   }","T44{C   |C   |C C |C   }","T44{C   |C   |C   |C C }","T44{C C |C C |C   | x  }","T44{C   | x  |C C |C C }"],6:["T44{C C |C C |C   |C   }","T44{C C |C   |C C |C   }","T44{C C |C   |C   |C C }","T44{C   |C C |C   |C C }","T44{C   |C   |C C |C C }","T44{C   |C C |C C |C   }"]};function r(C){return o(C,1)[0]}function o(C,e){return[...C].sort((()=>.5-Math.random())).slice(0,e)}window.Alpine=C,C.data("data",(()=>({available_keys:Object.keys(e),selected_key:"C",number_of_chords:4,song:"",get songUrl(){return`irealbook://Chord Changes=Me=Medium Swing=${this.selected_key}=n=${this.song.replaceAll("\n","")}`},randomize(){this.selected_key=r(this.available_keys),this.number_of_chords=Math.ceil(6*Math.random()),this.submit()},submit(){const C=o(e[this.selected_key],this.number_of_chords);this.song="",C.forEach((C=>{this.song+=`[${C}   | x  | x  | x  ]\n`})),this.song+="YYY";let s=r(t[this.number_of_chords]);C.forEach((C=>{s=s.replace("C",C)})),this.song+=s}}))),C.start();
