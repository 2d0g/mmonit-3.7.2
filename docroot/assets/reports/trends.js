Trend=function(a){return{linear:function(A,g){if(g.data.length<2){return null}var p,m,d,h,c,l;p=m=d=h=c=l=0;for(var u=0;u<g.data.length;u++){var f=g.data[u][0]-g.data[0][0];var e=g.data[u][1];if(f!==null&&e!==null){p+=f;m+=e;d+=(f*f);h+=(e*e);c+=(f*e);l++}}var C=l*c-p*m;var B=l*d-p*p;var w=B?C/B:0;var z=(m-w*p)/l;B=Math.sqrt(Math.abs((l*d-p*p)*(l*h-m*m)));var j=B?C/B:1;var s=j*j;var q=a.extend(true,{},g,{label:g.label+" trend",lines:{show:false,fill:false},points:{show:true,radius:1},trend:{type:"L"}});q.data=[];var o=null,k=0,t=null;var v=A.yaxis.max?A.yaxis.max:(A.yaxis.autoscaleMax?A.yaxis.autoscaleMax:Number.MAX_VALUE);for(var f=A.xaxis.min;f<=A.xaxis.max;f+=A.xaxis.step){var e=MMONIT.math.round(z+w*(f-g.data[0][0]),2);if(e>=0&&e<=v){q.data.push([f,e]);if(o===null||e<o){o=e}if(t===null||e>t){t=e}k+=e}}if(q.data.length){k/=q.data.length}return{series:q,r2:s,min:o,avg:k,max:t}},exponential:function(C,j){if(j.data.length<2){return null}var s,p,e,k,d,o;s=p=e=k=d=o=0;for(var w=0;w<j.data.length;w++){if(j.data[w][0]>0&&j.data[w][1]>0){var h=j.data[w][0]-j.data[0][0];var g=Math.log(j.data[w][1]);s+=h;p+=g;e+=(h*h);k+=(g*g);d+=(h*g);o++}}var E=o*d-s*p;var D=o*e-s*s;var A=D?E/D:0;var B=(p-A*s)/o;D=Math.sqrt(Math.abs((o*e-s*s)*(o*k-p*p)));var l=D?E/D:1;var u=l*l;var f=Math.exp(A);var c=Math.exp(B);var t=a.extend(true,{},j,{label:j.label+" trend",lines:{show:false,fill:false},points:{show:true,radius:1},trend:{type:"E"}});t.data=[];var q=null,m=0,v=null;var z=C.yaxis.max?C.yaxis.max:(C.yaxis.autoscaleMax?C.yaxis.autoscaleMax:Number.MAX_VALUE);for(var h=C.xaxis.min;h<=C.xaxis.max;h+=C.xaxis.step){var g=MMONIT.math.round(c*Math.pow(f,h-j.data[0][0]),2);if(g>=0&&g<=z){t.data.push([h,g]);if(q===null||g<q){q=g}if(v===null||g>v){v=g}m+=g}}if(t.data.length){m/=t.data.length}return{series:t,r2:u,min:q,avg:m,max:v}},auto:function(b,c){var d=[Trend.linear(b,c),Trend.exponential(b,c)];d.sort(function(f,e){return f&&e?e.r2-f.r2:0});return d[0]}}}(jQuery);