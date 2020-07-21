import React, { useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Polyline,
  Marker,
} from "react-google-maps";
import maptheme from "./maptheme";
import Redlight from "./Redlight.svg";

//import decode from   "decode-google-map-polyline"
//import Polyline from "./polyline_decoder1";
//import Light from "./trafficlight/light";
// import vector from "./Trafficlogo.svg";
// import light from "./redlight.png";
//import Red from "./icons/Redtl.svg";
//import Green from "./icons/Greentl.svg";
//import Yellow from "./icons/Yellowlt.svg";
//require("dotenv").config();

//import Trafficlightmarker from "./Trafficlightmarker";

class Map extends React.Component {
  render() {
    const decodePolyline = require("decode-google-map-polyline");
    var polyline2 =
      "}|dyCwjnyN[?gACiCK?aBGwBCcACoAAw@AuAIe@CwAEwAMqEy@?{ACyAAi@AeBIyAK{AQeC_@eBYAAk@My@UcBe@AAq@SaA_@o@YwCaBqBkAOIyB_Bi@e@MMWWaBeBwC}CYY]i@cA}A{@aBKS{A_DAEU_@o@oBUu@Ma@K_@AGCKm@gCa@kBMQWmAOiAEg@I_AKaB?MIeC?IGaBAkA@Y@oA@WHkA@SBk@?M?K?IAKMGmBaAcAi@q@@YQ@UaCwAA??@A?A?A??@A?A?AAA?A?AAA??AA??AA?ACAC?E?E?A?A@??A@A?A@??A@??A@?@A@?@?@AX{Ad@}BLuALiABm@DgA?KBqBJ?fALVCT_BF[";
    //     " }|dyCwjnyN[?gACiCK?aBGwBCcACoAAw@AuAIe@CwAEwAMqEy@?{ACyAAi@AeBIyAK{AQeC_@eBYAAk@My@UcBe@AAq@SaA_@o@YwCaBqBkAOIyB_Bi@e@MMWWaBeBwC}CYY]i@cA}A{@aBKS{A_DAEU_@o@oBUu@Ma@K_@AGCKm@gCa@kBMQWmAOiAEg@I_AKaB?MIeC?IGaBAkA@Y@oA@WHkA@SBk@?M?K?IAKMGmBaAcAi@q@@YQ@UaCwAA??@A?A?A??@A?A?AAA?A?AAA??AA??AA?ACAC?E?E?A?A@??A@A?A@??A@??A@?@A@?@?@AX{Ad@}BLuALiABm@DgA?KBqBJ?fALVCT_BF[";
    var pathCoordinates1 = decodePolyline(polyline2);

    console.log(pathCoordinates1);

    var coord = [];
    var temp;
    //  console.log(PYLENGTH);
    /* for (var i = 0; i < PYLENGTH; i++) {
      coord = pathCoordinates1[i];

      temp = coord.lat;
      coord.lat = coord.lng;
      coord.lng = temp;
    }

    console.log(pathCoordinates1);
*/
    //    pathCoordinates1.shift();
    var PYLENGTH = pathCoordinates1.length;

    const pathCoordinates = pathCoordinates1;

    const api_key = "AIzaSyBdNYLs-vqWXBDAjxXvbKe6igT9v7pqrps";
    const GMURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${api_key}`;
    /*
    //polyline decoder


    function polyline_decoder() {
      const str =
        " uglyCczryN_IbmHzeE|nTweBbgMp|BhtMfUh`WffDvvFxwJwyAzbD|c@bvA}pB|jGzzHxxHjqOttJn_UxaRxm[|DteCdwAlkCp~GzrAh|@vdEllG|zDjmFvkIjwBrvKjm@lngKlxQ|s@ftMdpFzpP|uLzfT||@`yKs|DvaGl}E~_KlzHjfFzeE`}Kn~PhdPxtL|rKxzC`uIyT`tNldFzhOtyFraFnjPppYtxIbhSh}LlaLdcM|cDn`KdyHl|YvmCl_KhaInpBftDjuF`tAvfIjpLhwIruKniIh[fzKbqHdcJv}E|mNbbKx}AvxIlpFpoCvnHdOv}FucGnaJzOtgLvdGzhJlcDjwE|sB`kCdvFbrE~lBtaS|}IbnLbpF`|LliJtoJ~}C`oJgIzpErfDnkDbNz}S|@ruOrtAbp^dBpj^xSfiItbDbsW|gLp_]hqOhoSdyH|nMhfIjyGjqCjvJonAdwK}vDxoDvw@jzAlqJ~wKtvBffEz|JpgGhlLv~Q|IbdM|iF`rWtxEf|Si[nqJbwM`eCvhDuu@zmCfrNpjElsUl{IdyO`@x|QrlKl{InvJndDrkD|hFdiAfsH~rAhfHjEtdFmZhyJgyEz`R~wAheG~hC|}Bj`F~hNd[fqIuV`sLx@|s]ryMhiGzxBnzE}gCnnBvaCncAok@lyBqvCppFulExtCdqG~wGbgG`_KzcD|hKyqBfoK`iAtuGfxCbuKvaDdzDjN|dBzoDjsEjx@`{KdwIhwGvx@|cHwqD|uFfZdwB`oBf{Get@l}IarGdjJkjGxEskGt_NybBdgLkzDzpKmiCn}EqfBpvIfu@nkJ}lDriE{lCdwCvgCptKopAzaXuSxhQ_bAntGcq@ew@bfIxaHtbLlt@hkN~rA|fJ~}Fwi@doJu~AdtC{cDfoD}wKzzJclCteNTlpIddJjpQfbLp_LltHvxQ|pBlsQbxCfoPxjHtrZt{XrxQvjGjf[{JlxJacBn`HqYvcHcxCt{CmYvqCr}EdgChuGbeFxnBfkM_jF`cLesLfyJ{uCxvI~pAflIetDfyJt_DnmMvcH|yRvjEfnR~`FpiK`uFt~YjlPfvRpxPzuL~cBfkFrrD`sKpvB~|Md_DzdN{kBrdQ_T|pIxaCpfMseCnjKw|BpdSyOdlYcp@d|Kl~@hnLmLjbFjtCz`FslAvxJ~TrgEFf`A{~Cl`E{xFtfG}kAb_WqjKfwLyoEpyZ~OruYf~GruK~GnnPjgAzhKdhDd`KpgKdvXtuGddFzk@nvEmeA|JhC";

      const precision = 5;

      var index = 0,
        lat = 0,
        lng = 0,
        coordinates = [],
        shift = 0,
        result = 0,
        byte = null,
        latitude_change,
        longitude_change,
        factor = Math.pow(10, Number.isInteger(precision) ? precision : 5);

      // Coordinates have variable length when encoded, so just keep
      // track of whether we've hit the end of the string. In each
      // loop iteration, a single coordinate is decoded.
      while (index < str.length) {
        // Reset shift, result, and byte
        byte = null;
        shift = 0;
        result = 0;

        do {
          byte = str.charCodeAt(index++) - 63;
          result |= (byte & 0x1f) << shift;
          shift += 5;
        } while (byte >= 0x20);

        latitude_change = result & 1 ? ~(result >> 1) : result >> 1;

        shift = result = 0;

        do {
          byte = str.charCodeAt(index++) - 63;
          result |= (byte & 0x1f) << shift;
          shift += 5;
        } while (byte >= 0x20);

        longitude_change = result & 1 ? ~(result >> 1) : result >> 1;

        lat += latitude_change;
        lng += longitude_change;

        coordinates.push([lat / factor, lng / factor]);
      }
      console.log(coordinates);
      return coordinates;
    }
    const pacoordinate = polyline_decoder();
    pacoordinate.shift();

  
  

function flipped(coords) {
  var flipped = [];
  for (var i = 0; i < coords.length; i++) {
      var coord = coords[i].slice();
      flipped.push([coord[1], coord[0]]);
  }
  return flipped;
}
*/

    //   polyline_decoder(" c}}hBsa~}M{{@kb@ya@y~@xM}x@`XujA ", 5);
    /*
    const pathCoordinates = [
      { lat: 25.29932, lng: 83.00466 },
      { lat: 25.29864, lng: 83.00449 },
      { lat: 25.298, lng: 83.00425 },
      { lat: 25.29767, lng: 83.00421 },
      { lat: 25.29681, lng: 83.00441 },
      { lat: 25.29608, lng: 83.00444 },
      { lat: 25.29478, lng: 83.00467 },
      { lat: 25.29292, lng: 83.00493 },
      { lat: 25.29237, lng: 83.00497 },
      { lat: 25.29161, lng: 83.00477 },
      { lat: 25.28989, lng: 83.00452 },

      { lat: 25.28952, lng: 83.00437 },
      { lat: 25.28911, lng: 83.00403 },
      { lat: 25.28809, lng: 83.00379 },
      { lat: 25.28697, lng: 83.00365 },
      { lat: 25.28603, lng: 83.00334 },
      { lat: 25.28443, lng: 83.00352 },
      { lat: 25.28311, lng: 83.0033 },
      { lat: 25.28203, lng: 83.00309 },
      { lat: 25.27798, lng: 83.00241 },
      { lat: 25.27768, lng: 83.00234 },

      { lat: 25.27714, lng: 83.00564 },
      { lat: 25.27648, lng: 83.00648 },
    ];
*/

    const MapWithAMarker = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          defaultZoom={15}
          defaultCenter={{ lat: 25.27794, lng: 83.00244 }}
          defaultOptions={{ styles: maptheme }}
        >
          <Marker color="blue" position={pathCoordinates1[0]} />
          <Marker color="blue" position={pathCoordinates1[PYLENGTH - 1]} />
          <Marker
            icon={Redlight}
            position={{ lat: 25.27794, lng: 83.00244 }}
            id="n"
          />
          <Marker
            icon={Redlight}
            position={{ lat: 25.27773, lng: 83.00241 }}
            id="n"
          />
          <Marker
            icon={Redlight}
            position={{ lat: 25.27776, lng: 83.00217 }}
            id="n"
          />
          <Marker
            icon={Redlight}
            position={{ lat: 25.27796, lng: 83.00218 }}
            id="n"
          />
          <Polyline
            path={pathCoordinates1}
            options={{
              strokeColor: "#ff2527",
              strokeOpacity: 0.75,
              strokeWeight: 4,
              icons: [
                {
                  icon: "lineSymbol",
                  offset: "0",
                  repeat: "20px",
                },
              ],
            }}
          />
        </GoogleMap>
      ))
    );

    const mapvh = this.props.maph;

    return (
      <div style={{ width: "72vw", height: mapvh }}>
        <MapWithAMarker
          googleMapURL={GMURL}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;

/*
 <Polyline
            path={pacoordinate}
            options={{
              strokeColor: "#00FF00",
              strokeOpacity: 0.75,
              strokeWeight: 4,
              icons: [
                {
                  icon: "lineSymbol",
                  offset: "0",
                  repeat: "20px",
                },
              ],
            }}
          />
          <Marker icon={Green} position={{ lat: 25.27794, lng: 83.00244 }} />
          <Marker icon={Red} position={{ lat: 25.27773, lng: 83.00241 }} />
          <Marker icon={Red} position={{ lat: 25.27776, lng: 83.00217 }} />
          <Marker icon={Yellow} position={{ lat: 25.27796, lng: 83.00218 }} />
 
     <Light />
             <img src={Red} height="70" alt="red" />

          <Marker position={{ lat: 25.27794, lng: 83.00244 }} />
          <Marker position={{ lat: 25.27773, lng: 83.00241 }} />
          <Marker position={{ lat: 25.27776, lng: 83.00217 }} />
          <Marker position={{ lat: 25.27796, lng: 83.00218 }} />

          [
  <Marker
  icon={Redlight}
  position={{ lat: 25.27794, lng: 83.00244 }}
  id="n"
/>
<Marker
  icon={Redlight}
  position={{ lat: 25.27773, lng: 83.00241 }}
  id="n"
/>
<Marker
  icon={Redlight}
  position={{ lat: 25.27776, lng: 83.00217 }}
  id="n"
/>
<Marker
  icon={Redlight}
  position={{ lat: 25.27796, lng: 83.00218 }}
  id="n"
/>

  ]
         
           { lat: 25.27807, lng: 83.00185 },
      { lat: 25.27774, lng: 83.00283 },
 <img src={vector} height="50" alt="Trafficlogo" />
 <img src={light} height="50" alt="light" />

  <Polyline_decoder1
          str={
            "usfyCe|vyNeBCKj@YTyAhCiAlBGRMp@E~@Fx@XtBnCvPhBdLnA`IBp@MzAOiAlA}BbBi@To@FKDCFQGYEa@n@y@dAsAfBiAbBy@vAuApBkCzDoCzEeDrGg@jAs@~Bq@xCO`ABD?JKbFQvBOvAg@xBYzAB@BDBF?Bp@h@xDvB~DrBl@RZLp@JlCf@|Cr@dCj@CjAD|FNzAl@~Ez@zD\nAp@nBaDlBwGpD_Af@eAeD_@uAoAsFMQWmAUqBUaDI}CaCJ`@cFBGFIFQEUAKXqCUB{@EWEKn@SPOjB"
          }
          precision={5}
          //           Coordinates= {Coordinates}
        />

        
           { lat: 25.27794, lng: 83.00244 }

           oclyCayryN~Bn@`AFjDg@pCEbGm@rJs@lBGvCf@vIp@hApAbAjEn@~EZzD|@~Hc@fGj@vEh@hXfCz@LjBsSbCgD

           
      { lat: 25.27051, lng: 83.02547 },
      { lat: 25.27102, lng: 83.02549 },
      { lat: 25.27108, lng: 83.02527 },
      { lat: 25.27121, lng: 83.02516 },
      { lat: 25.27166, lng: 83.02447 },
      { lat: 25.27203, lng: 83.02392 },
      { lat: 25.27207, lng: 83.02382 },
      { lat: 25.27214, lng: 83.02357 },
      { lat: 25.27217, lng: 83.02325 },
      { lat: 25.27213, lng: 83.02296 },
      { lat: 25.27201, lng: 83.02237 },
      { lat: 25.27128, lng: 83.01953 },
      { lat: 25.27075, lng: 83.01742 },
      { lat: 25.27035, lng: 83.01581 },
      { lat: 25.27033, lng: 83.01556 },
      { lat: 25.270401, lng: 83.0151 },
      { lat: 25.27048, lng: 83.01547 },
      { lat: 25.27009, lng: 83.016101 },
      { lat: 25.26959, lng: 83.01631 },
      { lat: 25.26948, lng: 83.01655 },
      { lat: 25.26944, lng: 83.01661 },
      { lat: 25.26941, lng: 83.01663 },
      { lat: 25.26937, lng: 83.01672 },
      { lat: 25.26941, lng: 83.01685 },
      { lat: 25.26944, lng: 83.01702 },
      { lat: 25.2692, lng: 83.01731 },
      { lat: 25.26885, lng: 83.01773 },
      { lat: 25.26833, lng: 83.0181 },
      { lat: 25.26783, lng: 83.01839 },
      { lat: 25.26739, lng: 83.01882 },
      { lat: 25.26682, lng: 83.01952 },
      { lat: 25.26588, lng: 83.02024 },
      { lat: 25.26478, lng: 83.02107 },
      { lat: 25.263401, lng: 83.02127 },
      { lat: 25.26302, lng: 83.02153 },
      { lat: 25.26238, lng: 83.02178 },
      { lat: 25.26161, lng: 83.02186 },
      { lat: 25.26128, lng: 83.02184 },
      { lat: 25.26125, lng: 83.02184 },
      { lat: 25.26119, lng: 83.021901 },
      { lat: 25.26005, lng: 83.02199 },
      { lat: 25.25945, lng: 83.02207 },
      { lat: 25.25901, lng: 83.02227 },
      { lat: 25.2584, lng: 83.022401 },
      { lat: 25.25794, lng: 83.02238 },
      { lat: 25.25793, lng: 83.02236 },
      { lat: 25.257901, lng: 83.02234 },
      { lat: 25.25786, lng: 83.02234 },
      { lat: 25.25784, lng: 83.02209 },
      { lat: 25.25763, lng: 83.02116 },
      { lat: 25.25703, lng: 83.020201 },
      { lat: 25.25645, lng: 83.01997 },
      { lat: 25.25635, lng: 83.01983 },
      { lat: 25.25628, lng: 83.01958 },
      { lat: 25.25622, lng: 83.01887 },
      { lat: 25.25602, lng: 83.01808 },
      { lat: 25.25576, lng: 83.01741 },
      { lat: 25.25554, lng: 83.01743 },
      { lat: 25.25516, lng: 83.017401 },
      { lat: 25.25389, lng: 83.01732 },
      { lat: 25.25343, lng: 83.01709 },
      { lat: 25.25231, lng: 83.01679 },
      { lat: 25.25137, lng: 83.01673 },
      { lat: 25.25138, lng: 83.01648 },
      { lat: 25.25082, lng: 83.01729 },
      { lat: 25.25027, lng: 83.01869 },
      { lat: 25.24938, lng: 83.01901 },
      { lat: 25.24918, lng: 83.01936 },
      { lat: 25.24918, lng: 83.01936 },
      { lat: 25.25001, lng: 83.01952 },
      { lat: 25.25044, lng: 83.01992 },
      { lat: 25.25166, lng: 83.01999 },
      { lat: 25.25175, lng: 83.02011 },
      { lat: 25.25214, lng: 83.02022 },
      { lat: 25.25271, lng: 83.02033 },
      { lat: 25.25352, lng: 83.02038 },
      { lat: 25.25431, lng: 83.02103 },
      { lat: 25.25425, lng: 83.02086 },
      { lat: 25.25539, lng: 83.02084 },
      { lat: 25.25543, lng: 83.020801 },
      { lat: 25.25548, lng: 83.02076 },
      { lat: 25.25557, lng: 83.02079 },
      { lat: 25.25568, lng: 83.020801 },
      { lat: 25.25574, lng: 83.02067 },
      { lat: 25.25647, lng: 83.02078 },
      { lat: 25.25645, lng: 83.02108 },
      { lat: 25.25648, lng: 83.021201 },
      { lat: 25.25651, lng: 83.02126 },
      { lat: 25.25627, lng: 83.02136 },
      { lat: 25.25618, lng: 83.02144 },
      { lat: 25.25564, lng: 83.02144 },
    ]

    15- 5pm last deadline
    frontend , backend -traffic1 
    frontend , backend -hospital 
    app - 
    frontend- 6_    
    
   App - driver { signup - details - liscense verify } 
           { signin - phone OTP } 
           { home - patientform }
           { route -locationpick }
           { Maps - navigation }
           { Request - request}

          [-(RegistrationPg)
           -(LoginPg)
           -(profilePg )] -3 days
          [-(Guiding Nav) 
           -(StatusPG)]- 2 days
    
   Website -{Incoming Request - Request timer{auto} - (auto/maual)} 
            {Driver,Patient details }
            
      
      [-(homestyle_Logo,Mapscolour) ] -1 day
      [-(Request -  include frioz)] - 2 days  #ASK Harish
      [-(Driver -maps-details-pastrides)]  - 2 days
      [-(LoginPAGE)] - 2 days

    BackEnd -[7 Days]

    11.59pm -12th deadline 
    2 delay max - 14th (last checkup)
    15- 16 days legal 

    
    */
