export default function Robot({blink=false}){
  return(
    <svg viewBox="0 0 180 200" className={`robot${blink?' is-blinking':''}`} aria-hidden="true">
      <g className="rover-body">
        <path d="M82 48 91 28 108 20" fill="none" stroke="#44372a" strokeWidth="5" strokeLinecap="round"/>
        <circle cx="110" cy="19" r="5" fill="#d58d60" stroke="#44372a" strokeWidth="2"/>
        <path d="M55 44Q56 36 66 34L133 38Q143 41 141 52L137 77Q135 86 126 86L59 82Q50 80 51 70Z" fill="#a98552" stroke="#44372a" strokeWidth="4"/>
        <path d="M60 48Q62 41 70 41L121 44Q130 45 129 54L127 69Q126 76 119 76L65 73Q58 72 58 65Z" fill="#28322e" stroke="#514332" strokeWidth="3"/>
        <g className="eye">
          <circle cx="96" cy="58" r="17" fill="#c4b58f" stroke="#241f19" strokeWidth="3"/>
          <circle cx="96" cy="58" r="11.5" fill="#152126"/>
          <circle cx="99" cy="55" r="4" fill="#e8dab3"/>
          <circle cx="90" cy="63" r="2" fill="#bb7547"/>
        </g>
        <circle cx="119" cy="61" r="3" fill="#e0a34c"/>
        <path d="M44 85 133 89 138 149 127 160 48 155 39 145Z" fill="#c58a3e" stroke="#44372a" strokeWidth="4"/>
        <path d="m50 94 34 2-2 29-31-2Z" fill="#6e5940" stroke="#44372a" strokeWidth="3"/>
        <path d="m89 97 36 2v25l-35-2Z" fill="#af7940" stroke="#44372a" strokeWidth="3"/>
        <path d="M56 103h19M56 110h14M94 105h24M94 112h17" stroke="#d9c292" strokeWidth="2"/>
        <circle cx="119" cy="137" r="6" fill="#864329" stroke="#44372a" strokeWidth="2"/>
        <path d="m52 140 27 2m-20 5 13 1m35-4 16 1" stroke="#765739" strokeWidth="2" strokeLinecap="round"/>
        <path d="M49 105 33 119 28 139" fill="none" stroke="#51402d" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="m27 138-8 8m10-8 8 8" fill="none" stroke="#39342a" strokeWidth="5" strokeLinecap="round"/>
        <path d="m133 107 15 12 4 13" fill="none" stroke="#51402d" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="m152 130-7 7m8-7 7 5" fill="none" stroke="#39342a" strokeWidth="4" strokeLinecap="round"/>
        <path d="M59 158h67" stroke="#44372a" strokeWidth="6" strokeLinecap="round"/>
        <path d="M49 164a16 16 0 0 0 0 30h80a16 16 0 0 0 0-30Z" fill="#504432" stroke="#30291f" strokeWidth="4"/>
        <g className="rover-wheel">
          <path d="M55 175h69" stroke="#d5bf91" strokeWidth="3" strokeDasharray="5 6" strokeLinecap="round"/>
          <circle cx="66" cy="180" r="6" fill="#ae9364" stroke="#30291f" strokeWidth="2"/>
          <circle cx="91" cy="180" r="6" fill="#ae9364" stroke="#30291f" strokeWidth="2"/>
          <circle cx="116" cy="180" r="6" fill="#ae9364" stroke="#30291f" strokeWidth="2"/>
        </g>
        <path d="m72 40 8-3m45 39 8-5m-74 78 8 3" stroke="#ead8b1" strokeOpacity=".7" strokeWidth="2" strokeLinecap="round"/>
      </g>
    </svg>
  )
}
