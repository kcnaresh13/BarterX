<template>
<div id="rJeh9_g-Pw">
  <div class="HJchTNQdv">
    <div class="Bkm06E7dD">
      <label class="HJg70a47_v"  overflow="hidden" text-overflow="ellipsis">{{major}}</label>
    
      <label class="H1WQR64muP" overflow="hidden" text-overflow="ellipsis">{{dob}}</label>
    
      <label class="ryG7Ca47_P" overflow="hidden" text-overflow="ellipsis">{{schoolName}}</label>
    
      <label class="SJXm0pVm_v" overflow="hidden" text-overflow="ellipsis">{{email}}</label>
    
      <label class="Hy4QCTVXdD" overflow="hidden" text-overflow="ellipsis">{{name}}</label>
    
      <span class="B1rQCpE7uw">Name:</span>
    
      <span class="ry8XApN7_v">Email:</span>
    
      <span class="rkvXRaEQOw">School name:</span>
    
      <span class="rJOQATV7uP">Date of birth:</span>
    
      <span class="SJFXC6VX_P">Major:</span>
    </div>
  </div>
  <div class="HyUeCEXuw">
    <img class="H1b-0VQ_D" src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"/>
  
    <span class="rJHaySmOv">User Rating: {{userRating}}/5</span>
  
    <div class="SyBXQrmdv"></div>
  </div>
  <div class="rkqegH7dD">
    <div class="rkesIQrQOv">
      <span class="S1ZvQB7dD">Here are your last purchases:</span>
    </div>
  
    <div class="HkNKmHmOv">
      <img class="rJeEtmHXdw" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAO0AxgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQQFBgcDAv/EAEkQAAEDAwICBgUKAwYCCwAAAAEAAgMEBRESIRMxBiJBUWFxFHOBsbIHIzI1QpGhwdHwFVLhJDM0YoKiJXIWN0NUY3R1ksLS8f/EABoBAQADAQEBAAAAAAAAAAAAAAACAwUBBAb/xAAnEQACAgEEAQQCAwEAAAAAAAAAAQIRAwQSITEyEyJBUQUUYXGx8P/aAAwDAQACEQMRAD8Aq6EI7crdKBAuFw+r6n1L/cV3XC4bW+p9S/3FRn4sIz4pEpSLELwQhCAEIQgBCVLp8UB5QvWlGlAeUL1pRjxQHlCXT4oI2zlAIhCEAIQhACEIQAhCEBpSEHkjtW6UB2pvcPq+q9S/4SnCb3H6vqvUv+EqMvFhGfFIlKRYheCEIQAhCEAo2UnBfKyCYSxuBIhERDskEDwzzx7yowc1Z7rbIqZhZb7YKuldRxyMrw927iG6jkHTs4lujGfagIc3acxCJ7WPbwnREuzkhztRzvzyvf8AG6vjOly3U6VkuMHGW8u1WKs6N0bP4P6JGZZGVbKG5s6396dLvDHN7dtuoDzKW4WK0xWu71tFGZC6KOqomay408Zka1zXb7nU57Otv80T25QFYjuk7Kl1QAzW6EQkacDSGhvYe4Be5LzVPiER0hulo2zkY043z/kH4q4S2axf9Kqe0xUDi/iSGWNvE0iLghzcknJdr1ctsEDdcmWK28arcKBz2i201QGCOR74pXPa1+Y2uBGQXHTqO2CO5AVYXyrEpkxGTrc/cHYucHd/LLR+eU2qrhNVU8UEunRF9HAx2Yx5fqVN19md/AuPBbXMnZcKmKV4D/m42NYQDkkAAufud9uZwmvSa2Po5oZIqF1PTOpaZ2otcA6R8LXvwT/mLthyQEGhCEAIQhACEIQAhCEBpKO9KgrdKATe4/V9V6l/wld1wuH1fVepf8JUZeLCM+KRKUixC8meilop79eaa1z1jqSSqkbHFIIOINR7+sMD71Yqf5P4a7pJcOjlvu5fdaPXhk9Lw45yzmGvD3Y9oCh/k526d2An/v0XxBaRbLnxfliu9kbQQxmvnnp3V1MCypiGC7U12SBy32QGNRxMbU8Kqc6JofpeQ3UW777ZGfvVj6b9E4eihoYzcxVzVlO2pY1tOWBsTs4JJPPI5KEvVGy33ivooZhPHTVEkTZR9sNcRn2q8fLWf+KdHf8A0Gn970BVLB0eqbvDV1hlipLdRNDqqsmzojycAADdzj2NCe2fo3bb7WegWq94r3kiCKtpOCyc9zXh7sE9moBWO1sbcfkQuNJbt6uhuQqqyJv0nRYwHY7h/wDAqk9GaeqrOklsgoGvdUvqo+HoGSCHA59mM58EA0r6Kot1fNRV8L4KiF5ZLG8btIVlufRKioOilD0h/jJlgr3PZTxijIdqbkEO62BuMZ3Xb5YrjR3P5QrnPbyx8TdETpGHIkc1oBP3jHsUh0k/6l+h/wD5uq+N6AzvO2FYIOjnDssN4vNY2go6gubSM4ZkmqccyxmR1Ry1EgKFkpJ46aGpkic2GYuETzyfpxnHhvzWifKsxtbYOiF2tvWtf8NbSgNORFK36TXdzuz/AElAV6k6JC72yqrujdf/ABCSjZxKijkg4M7WfzNblwcPI58FWYo3zTNiiY573uDWMYMlxJ2AHaVoHyISmj6XTXSofwqChopX1cztmtaRgAnvJxgduFC9Aq6gpflEtdbVtbBRitzh3KLOdOe4Akb+CA83jovR9HpWUl9uxjuWA6Wko6bj8DIyA9xe0Zx2DKZdIrJDaG0EtNcIq6nrqfjRyxxuZjDi0tIPaC05Uj0/o5KD5QrzHeWziOStkmyz6To3uLmFuduRH3YXXp10at3R+gss1DV1lQ65Ujatgna0NjjcM42PPfyQHqw9Cqa+9HK+70d4DpbfFxKmibSkytGOY62457+CjbDYKS5Wy4XCtuXoFPRaNTjTmQPLjhrW4I6x327gTlcuhvSKq6LX+mulGQdB0yxk4EsZ+k0/vYgFWf5YooLPf3dHLTTtprbTH0nhM+3LKMlx8hhoHYAgM/k0hxDDluTgkYyF4QhACEIQGlFCCkHat0oFTe4fV9V6l/wlOE3uH1fVepf8JUZeLCM9QhCxC8f2e819kqhVWyVsNQPoy8Jj3N/5S4HB8QpOp6c9JqkzOku0rZJm6ZZYmMjkeO4vaA4j2quoQD22wVE8zpKZsZdTgSHiadONTWjIdsd3DZWK+y9Kb/DbheZ21TJpjBSOdwgdQcW6QQAQMg+H4KsUdZU0MplpJ5IXlukujcQSO5dmXe4sZGxtbOGRODo26zhrgSQR3HLnHPiUBI0dNfLBNUV9FO6imon8KWSKoaHMccYaQDvnu7dLv5ThX32/vb1D6OK/LeLS0kcDqgZwRrY0FwzsRnzTe1isvteKCe4OjbOMukmcS3LGu0aj3dmTyypB3RrhT8GW6MDIpGsEgjcWtDoTLqGDnAxg4Hj4ICLNmrvSKiJsTHy0sLpp2sla7htacOzg8xjl7eSs0d76atonU8VVH6LRsa/hCKDRC1zNYIbp2BB5jtIB3Iyzlo7jEa2c3352EOD3NkDtWI9e7g47O1ua076jle6qz18FdLSG8vc11I+Xi7gO0DhmMnVgdQDmeRAO5wgIG73G63lzLhc3yzhoEDJTGGsbjfQMAAcycDvU1babpRaKMegShtJXlrOBxY5I5i4NxqjdlpOHNO42C4no0G1VHSSXDQyqpfSWPMWWg6Q4s2d9IDP+3vUZDWVxoy2K4PFPSHMULpsY1EjLGZ59Y5xyyUBKVLOklwp20MgDKf0x1MKWERwx8cbkFjMAu8Tz7Ewg6N3OaSnZHTtLqkyNiHEaNRZq1fCf2QpS30twr4aWd17cx1VOw4e4nrPkdESTnd4ALiP5TnO69fw+56K9zbzI40TRJCQ4njiVj3O0HVuSC/OM5yd8boD1HV9LZLTh7mVVDQmRoNXHDUcDh41BpeCRzGAOe+ORTOtoekl9rWG4GepqDTMmjEso2hdy0DOAB2gcsHI2KiXXi5kSsNdUaZdXEHEOH5BBz35yfvPekN4uRe1/p1RqactdxDlp1a8g9nW380BzpKue21jKilLBNEctc+NrwD34cCE7vnSK63+Vk14qhUzMGBI6JgfjuLgASPNRZOUiAEIQgBCEIDSkg5oQOZW6UCpvcP8AAVPqX+4ruuFw/wABU+qf7ioz8WEZ6hKUixC8EIQgBCEIAS5SIQCoRhIgFSJcJEAufBCRCAEIQgBCEIAQhCAEIQgNK70I70BbpQIuFw/wFT6l/uKcJvX/AOAqfUv9xUZ+LCM+KRKUixC8EISoBEK2U3Qyoq7HBXUr81MjDIIHN2c3O2D2HHemFi6PTXKuqaSfVTyQx5Ic3cOzgAjuVnpStKuzm5EEukET55o4oxqfI4NaO8ld7lQVNuqn01ZHw5Gnl2Ed47wpPobCJL3G8/8AYsdJjvPIe9cjG5KIviyauvR6AWbgUUYdU07deoN6zz9rz8PYqU1jnva1gy5xwAO0rYaSJjYyZnBnHaQ1+rGkA7Z8MqvydHWC/U9yjaxsOovljz9sDYjwJ39i9ufTq04kIS+xKCzQ0tLHbzEJJZm/PHGdR/QKk3egfba+Ske9r9GMPbycCMrTnSsg40mr50jS09rQorpNY33W30ktLEHVzSAWjm5jnYx7Mg+0qWowrZ7V0dT5KNbbXV3KUx0kRdp+k47Nb5nsTWWMxSvjcQSxxaSOWy1G2QQ2+gZQwY0xnrux/eE83fvswqH0ppBSXmdrBhr8SAefP8crzZcHpwTZ1StkOhCF5iQIQhACEIQAhCEBpKAl70dq3SgE3uA/sFT6l/uK7hcK/wDwFT6l/uKjLxYRnqEpQFiF4LRj0OtdXa6cs101ToaHSsJcNRH2gfywoH/os6pt0MtG7+0aAXMcdnkjOx7D+CuFsfWNskclfBJDNgjDsHJadj7V7cOHlqaKpy+h9Q0bqG1U9JWOImp4wwaN2uA5OB7iMfevNI+GW4aZgC6WMt1HnkHIGfvTuSKR0TXGpdPC7rYxgctvLZQ3U/iMWklrHHQdXMZ2969sYpKis73uw092o3wzyHiMPzMoGox+Hl4Kt9G7HV2u7VcdVHsYfm5B9F4z2forwyJ7CAwnI5k/aXu5tYPRJXZB4gLxnkMquWOLmpfJNNpEa0TamcaNoawYDR3BeLy4y8CeJuhrXYdnxxv5Kc4YlnIawsZpyNXbuQuE9JwnzNGrSN8DsBVm7kFalYJHNc0HBJJIHYurnvIM0YLJMEZ8F7jaRIyN4zoJBwpSWkDaMuHI5xlSujpBUshczJ78FQ3T+i+apq1oOQ4xOOPaPzU02PhyPbjZzdQUlV2+G8UzaGoJDJJmuOnngYJA8wCPaq88d0KOr7M3oLBNU2qa4vdw4mtdwhpyZCPy7PNQx5rZK6JjHxQxxBkUewa0bBrexZBPA+OaZga4iJ5aTjlvjdZ+bEsaVEk7OKF0hglnkEcMbpHnk1oyV4IIOCMFeckIhCEAIQhAaVlBSfqj9VulALhcD/YKn1L/AHFd1wuH1fVepf8ACVGXiwjPUoQUixC80vo7UCo6PwSx/Ta3gv37W/0wVN0cgq7bJC93ztO/ke0dh/H8FQeg1zdT1xoHAGKqPVB+y8cvv5fcr1BDFBWulMkkWtpa9rm5b9/9FrYJ74f0UyVMfWSaN9MYpD1ouq4DmW82ny7PYuF4t2Q6ePn9LbsXDgVVDWtqYI+K0fSazmWd2OanqosqKMSse1pLd2yZG375hWPh2RGsdQaikgrIZHNlZhrw12MHf8/eEtQyK40xPGAlLc4O2/L9+YTO21BYZKN7jpDS4BwBDf1bj3bc1Hz1LqetGhuI5MlrM5DTyI+/8lF8clkY2SrK8kQDYuc1wcc9uez996cVteA6JrSA0szIc77gf1+9QDpBBPWQtJ0dSRhPcTz/ANyY8WSQVDpc5hDWSNz3FoPuKg8kVyWrC32WGEU752T6m6Q8mUE+G3u/FdZaxr4zBENLs9Yduexv3qG1QPewFzo4JpOq14wc6RgfeUzhqXZLoc8R0z8nxy4j3BdeSK7CxNj+vZmZogGoMDm5B5gbZ/felt8kjr2I+xriAAezC5GpD4IYAWs0uDnHH2RnA/AL1bsx1U9a7AwDoaTucnAP75q1NNEXFrhkvUmN1S+M/SdhgDd8DtKgr1Yoq9rIKdzaaiMz5JNH05HDb36sk+Ck+E6KMTuI4km+32fFc43ta2OP+8Ay3u5nOVBwUlTIdMrd19Hs1olNGxsY/uo8c3vI3cT2kDJVCKt/yg1UbamG2wFj2wDW+Ro5uI7/AC39qr1utNbcT/ZYSW5wZHbNHtWfne6e2PwSjwuRghT1Z0d9BoJaioqmukYBhsbcjJPLJ7fYoJVThKDqR1OxEIQoHTSikSn97pFulABcLj9X1PqX/CV3XC472+q9S/4Soy8WEZ8UIKAsQvJexSstd6hNfC3T/wCK0EMzu12PDZa1S8OZoZN884j6WAM5/lIVPsNVTXqz8CWKJ9TAPnGPaCS3kCFLWe4/wnFPNDxKQHqgHePy8PBaeCDjH2u0Uy5ZYmUzI+Uxewdjxpezy714qKV7QACHB5yHZ2P6J9RS0ddCHRASxE82nBafLs8kNpZI9fo7HSwl2/EJBGO79VZu5OUVu5QPp3F3DMbQRokHOJ3n3Z3x5pg8iZnDmHDJw4OaM430uHsPZ3YVlq2iUODnOdCHFj2OG7D3OUNTQtZU8J7OKGkOYc79wd+R9h7dqc89qTfR6cLtV8nDgA3KB03XjkjMb9HLYdn+ph+8JvT0UlTJcGsBc+oYx0Y/mLslT8dKTGGtyXekdUN5jOCdu4816q201qlgbI3VLpIa3H2S46SfIZ+5ZUdQ5ZVih2/8PZXttkVFb5aOSiiqXxOIfI0dfIB7Pdt5qOponRtgeATjiyHbu5fErFU1sH9rkjLNL2Fze0hwcQQNttguVvpBJboKpnXZw9Of82sud8IC9OsyehG38kMaclZDzQuMjBsA/DGnPMNJyfcu1JUtL8ydcF50NDfpAfl2BFXA+MhsTuI4tayPPJrnEl33BNWu+aa6nw4vPCgZ2lo21e3mvThy0kkcnDdyyZiFbXuaJWOY3t0t6x8MDl7U6jhFNreICSYyyJrttTjtv5DKbWjjHXA5r2QxDMpOxkOM4Hs59wOEt6uTjVejx/Nsh2LvHwC9ffR46p0RDeilA+sfWV80lVPI/U5pOGA55YG58lKTwiN3otLEWFuWtBAGAOew5BdbZTSTvBJLCGa2auZ8Uw6QXplC+arbguDeFEwfbd4e1QjGOO2cfLKl05q4mSQW6n5RjXLv9rG34e9VNTsXR69XOYzyUzozK7UX1B0c+3B3PsC6XPo0LfSPnfXMeW/ZEZwT3ZyvBkU8jc6JLjgryEpQqDppBQlQt0oEXC4b2+p9S/4Su64V5/4fU+pf8JUZeLCM+KRKUixC8cUVXNRVDKimkdHKw7Efvkr5Z7zR3prYpNMFb2xHYSf8p/JZ2u1LBNUTsjgBL3EYx2eKuw5ZY3wRcUzTIRU0VS19G97ZicANGdXhjtVoiF4rGB0joqSZuHFsj2uafHAyR7VXrHV1VkZFFc/7S/SNcrNntB7NRG/tVqiqqS4U5Zb7gQ4jrRPADseIPvC0m20nREjammuNPUPm1Ux+bHEMcgLQO4g747u7y5cKSminuFMCeDI/UHFxG52xyPcT+CfOpp4GEC5xxOedREces+092AmkMVQHvkqYvSKfaRz+HpPPAPPOfEHO3gvDq4P0ZKPyX45LcmywtpfR+AZW6tEUjfDUwnA+4k/6VRbjPLPWCpn1nqt3d5AAfh+K0KeaOW3UlTTPdIIycE4JIIwWk+494GVydbbdV2+mppSHuZCCyVg3e1oGfeF8to9f+u9zTb6f8VZpwa+TPLaRIWxyDJLJD7cP/PCsXQedzqeop5RmBpMgPccb+wj3LpcujcFGz0ilke7VKGtZjcNc4A/gVKR2uKhofQIsanxhrpRsT2Z+4r26/wDJ4dRp1GPLb/wm4pNtELUW5sduE83UMrdR1fYa4AvPnvj2quVD3tnPBjLamQAMbj+4j/8AsRuVeLyHzQlrQwNYMySjdkfcM9pHcO1VSkoaqR54T3gyu0uqZs6iO4DsH7AV34ycpSe+7+jy5Kq0ORMyliMVBMwTMZgl52aSe87ZPPcpLTa3lzZ52ank5aHnbz8U+o7bSUzdcVQ8uY3IIAaSfPfCctdCIIqyWuAyXAskOzRvgE95X0ibozZPngWZtLDS+lvqJXl7C3q4acnkN8qDppKeLSThrmgjU1o1H/UU2qHV10c6VrNMUY6rGnAaMpIWQ0zXS1UrI2M+k9zhge1SpJcnUkkSTQ+q/umcOPtLu3xJWf8ATK6Q1VU2ko3aqeA7vH239pTrpJ0udVRuorWXR0xGHy8nSfoFUl4c+dSW2J1IRCELxnTSkJO9Kt0oEXC4fV9V6l/wld03uH1fVepf8JUZeLCM/KAlALiABknsCstnskbNMtU3XLzEfY3z7ysjHilkdIvGFqsclYBLUEwwHkftP8h+fvVst9FTU/zMbRDGftdrj2ZKd09I53WIKcejdmM+C08WGGP+zjEmrNMfCrqdxwMCRh62PHPNFpu1Jb5nlwE0MmNbXAteMfhjwXOVjo241HT/AC8wo2d8bOcQcf8AKcK6kzkV8GjUV2s9awimmgjLhjTnS7PkVzrxcWdejqIpI9OnTIMNHn3/ALwszfURHbgO/wDf/RENRUNy6nEjGMOTiQgeWyoaSfBPbRd7Lcaihr3tlmhjpR1pYgHaHZ2xjTufZkqbNxtlTVbVT6aRjQQ5waxrXEYxgnOMHB2/JV62UZuEjS2umbC+PjsGScnluee2eSdTWiOnbK8SwUkcbXfORjkw8wM9/ed1kan8Lhyz3xlTLY6hx4JytvAponmT0aYMaCNEm+/bjt7+xQlzvkM4Boaym4jzhz6k4e0dwbjv7s571XJntrI/R6VzIqYYBLnjVJ57rk2Sgtriad8c9QBkSHdkZ7P/ANUtL+Ew4GpSVyX/AHRKedyT5JWvvVNDNwIJTAWuzKzUNJOB2HfsGyiRWUTZXOknmnc7HJ34bBNY7a954jnCQOOdQOc+1Pqa0F5GGH2BbEMWOL3JclNpKrHMt7kbAH0lCGsAxqcdh5gKP1VFS7iTP/Jrf0Xe9V0dms9Q2FgmleNDjza3J7/0VArbpWVY0TzuLP5G7N+4KvLqI43VckEWe79J46WE0tse18hADpBu0Y7u8qp1ddU1jw6pmfIRyBOw8gm6RZ+TNLI+QkCEIVR0EIQgNJCXCRC3SgOS4XD6vqvUv+Erv2pvcfq+p9S/4Soy8WEU6zzU8FSHVOwPJ+M6VfrP6FM0GKqgf5OCzJCzMWoeNVRebY2OIMwH58k1qCGjDfcseEj28nuHkUpkeebnferP2/4OUaVVzMa0l8jGjvLgFCVVyoYs5qWO8Gdb3KnZQu/uy+EdJupvUe4pYiT/ADP/AEVsho5W0EEbWmQuYHvc0bEkZys4BwpWhv8AXUkDaYPL4W8mk8lzFqvfczjtltpK+rtoMcT3CPVnAJBBUpUXGtvTGtmjLYvpE5DY895PM+SrUl3bLDFJUUxEj25wHfdlR9ZdaingzC4xGQ4a0d3evVLVYVyGiwVNu1vMvHjMI7SNOn2KNne2XMVO08MHdxG7v6KOoK2euaWTyve9p7TzCsNupRo6zd+SnHJ6kbXROPHLG9JRztaXRSOjPPqnGVIshqS0cWome3uLzhSNNThrcexdnw4BGFwluGU9IK20z0rxuWkDwz/VZa7IJBGD2ha7TNw9ze9qyu6sEdzq4xybO8f7ivHq10yDdjVCELxnAQhCAEIQgNKR2pO0oW6UAuFx+r6n1L/hKcJtcf8AAVPqX/CVGXiwjPykSoWIXiISpEAIQhACdW2m9Jqmtd9AdZ/kE1U3b4vR6TUR15dz4DsXGBzI0TTeHuULcJxPVOLfoN6rfJSFVNwaVxB67+qPzUKkQOKGpNLVMmAzpO47wtLtoikjjliIdFIA5p71litPQ69CmmFDVH5h7sxuJ+g7u8ivVp8ri9r6OGgwx9cZ5FdpYMZ1Ds7EsIy3Odwc5Tx2Cw6d8jK91hkHGQx2TzwQsrvJBu9aR2zv95WoVMgYHe1ZRWSCWrmkByHyOd95Xm1fSOnFCELwgEIQgBCEIDSkJEq3SgMJtcfq+q9S/wCEpym9w+r6r1L/AISoy8WEZ+BkgDtWkdHvk6imt8dVdp4oTIMtEsxYPHAAJOO08lndK9sVTDI8Zax7XHyBW89GaqBj62SXW+GSgkaDHuSDjl2LNwQTTf0VarJKNJcWZn036GHo+xlTA4Pp34Ozw9paeTmu7RnbvCppWofKZeoZbPT0EMfCjADIoy7U4NDtTnE95OFl5VeaKjKkW6aTlC2IhC6QxPmkEcYy4qovOtDT8eXrfQbu79FLOdqK8xxNp4uGz2nvK418op4dAPzkg+4KPYGNdPxpsNPUbsE2QhSAJcpEIC9dEulfUZQ3F/WG0Uru3wPj4q5CuZoIaRsCsUUtbr9U0jRG9zpIxyydwvZh1CXEwWu93Dh0szw7cNOD48gs+KkrldDVs0MBa0nJz2qMUNTkU5e3oAhCF5gCEIQAhCEBpPelQkW6UCpvcfq+q9S/4Su6b3E/8PqvUv8AhKjLxYRn6lKHpBc6GAQU9U4Rj6LXNDtPlkKLKRYqk07RbKMZKmrO9VVT1cxmqZXSyO5ucVxSIS7JdHqNjpHhjGlznHAAU7S0zKOI5IMzh1j3eAS0NMylgbI3rSPbnUezPYF0Z13kuUG7BymlZTxGSTc/Zb3lQc0rppHSPOXOO66VdQ+plL37AbNHcFwXUgCEIXQCEIQAhCEAIQhACEIQAhCEAIQhAf/Z"/>
    </div>
  
    <div class="BymsQrX_D">
      <span class="HkOi7S7Ov">Bio Textbook</span>
    </div>
  </div>
  <div class="HyfzeHm_P">
    <div class="H1r67rmOv">
      <span class="SygSpmBX_P">Here are the items that you currently have listed:</span>
    </div>
  
    <div class="Byrl4Hmuv">
      <img class="ryIgVS7uD" src="data:image/jpeg;base64,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"/>
    </div>
  
    <div class="BJ4N4rX_w">
      <span class="H1x4EVrmuP">{{Listingtitle}}</span>
    </div>
  </div>
  <div class="H1n1frX_v">
    <input class="HkxbGr7uw" value="10/08/2020" type="date" placeholder="10/08/2020" overflow="hidden" text-overflow="ellipsis"/>
  </div>
</div>
</template>

<script>
import axios from "axios";
import cookies from "js-cookie";
const url = "api/info/";
export default {
  data: () => {
		return {
			id: '5f67e3c5597b0a0e53982fd2',
			Listingtitle: "JAVA BOOK",
      name: "John Doe",
     
			email: "johndoe@gmail.com",
			schoolName: "Hofstra University",
			dob: "june 20 2000",
      major: "Computer Science",
      userRating: "4.8",
    };
  },
   methods: {
    async onClickButton () {
          await axios.get(`${url}${this.id}`).then((res) => (this.info = res.data));
       var profileId=cookies.getJSON("sessionCookie")
       this.name = profileId.userName;
      this.schoolName = this.info.schoolName
       this.dob = this.info.dob
       this.major = this.info.major
       
       console.log(profileId.userName)
       this.email= profileId.email;



         }
         },
  created () {
    this.onClickButton();
    //var profileId=cookies.getJSON("sessionCookie")
    //console.log(profileId.email)
    //this.email= profileId.email;
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#rJeh9_g-Pw {
  --mdc-theme-primary: inherit;
  --mdc-theme-secondary: #f44336;
  --mdc-theme-background: #ffffff;
  position: absolute;
  margin-top:168px;
  background-color: #ddc6b6;
  overflow: hidden;
  width: 100%;
  height: 100%;
  size:10px;
}

.HJg70a47_v {
  /* background-color: rgb(92, 104, 187); */
  color: #262223;
  position: absolute;
  font-size: 20px;
  width: 300px;
  height: 40px;
  top: 242px;
  left: 137px;
  z-index: 1;
}

.H1WQR64muP {
  /* background-color: rgb(92, 104, 187); */
  color: #262223;
  position: absolute;
  font-size: 20px;
  width: 300px;
  height: 40px;
  top: 181px;
  left: 234px;
}

.ryG7Ca47_P {
  /* background-color: rgb(92, 104, 187); */
  position: absolute;
  font-size: 20px;
  color: #262223;
  width: 300px;
  height: 40px;
  top: 139px;
  left: 236px;
}

.SJXm0pVm_v {
  /* background-color: rgb(92, 104, 187); */
  position: absolute;
  font-size: 20px;
  color: #262223;
  width: 300px;
  height: 40px;
  top: 73px;
  left: 143px;
}

.Hy4QCTVXdD {
  /* background-color: rgb(92, 104, 187); */
  position: absolute;
  font-size: 20px;
  color: #262223;
  width: 300px;
  height: 40px;
  top: 19px;
  left: 144px;
}

.B1rQCpE7uw {
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  font-size: 34px;
  color: #262223;
  font-style: inherit;
  text-decoration: inherit;
  position: absolute;
  width: 227px;
  height: 48px;
  top: 19px;
  left: 0px;
}

.ry8XApN7_v {
  overflow: hidden;
  text-overflow: ellipsis;
  color: #262223;
  font-size: 35px;
  font-weight: inherit;
  text-decoration: inherit;
  text-align: inherit;
  position: absolute;
  width: 186px;
  height: 53px;
  top: 63px;
  left: 2px;
}

.rkvXRaEQOw {
  overflow: hidden;
  text-overflow: ellipsis;
  color: #262223;
  font-size: 36px;
  position: absolute;
  width: 314px;
  height: 57px;
  top: 122px;
  left: 2px;
}

.rJOQATV7uP {
  overflow: hidden;
  text-overflow: ellipsis;
  color: #262223;
  font-size: 33px;
  position: absolute;
  width: 209px;
  height: 65px;
  top: 171px;
  left: 1px;
}

.SJFXC6VX_P {
  overflow: hidden;
  text-overflow: ellipsis;
  color: #262223;
  font-size: 37px;
  position: absolute;
  width: 190px;
  height: 49px;
  top: 225px;
  left: 6px;
}

.Bkm06E7dD {
  overflow: hidden;
  background-color: #ddc6b6;
  position: absolute;
  width: 679px;
  height: 281px;
  top: 0px;
  left: 98px;
}

.HJchTNQdv {
  overflow: hidden;
  position: absolute;
  width: 777px;
  height: 317px;
  top: 16px;
  left: 387px;
}

.H1b-0VQ_D {
  position: absolute;
  width: 271px;
  height: 245px;
  top: 39px;
  left: 13px;
}

.rJHaySmOv {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 33px;
  color: #262223;
  font-weight: bold;
  font-family: Roboto, sans-serif;
  position: absolute;
  width: 304px;
  height: 61px;
  top: 315px;
  left: 0px;
}

.SyBXQrmdv {
  overflow: hidden;
  position: absolute;
  width: 300px;
  height: 300px;
  top: 69px;
  left: 16px;
}

.HyUeCEXuw {
  overflow: hidden;
  position: absolute;
  width: 319px;
  height: 380px;
  top: 14px;
  left: 19px;
}

.S1ZvQB7dD {
  overflow: hidden;
  text-overflow: ellipsis;
  color: #262223;
  font-size: 25px;
  text-align: center;
  position: absolute;
  width: 300px;
  height: 65px;
  top: 3px;
  left: 19px;
}

.rkesIQrQOv {
  overflow: hidden;
  position: absolute;
  width: 369px;
  height: 64px;
  top: 3px;
  left: 45px;
}

.HkNKmHmOv {
  overflow: hidden;
  position: absolute;
  width: 321px;
  height: 300px;
  top: 74px;
  left: 60px;
}

.HkOi7S7Ov {
  overflow: hidden;
  text-overflow: ellipsis;
  color: #262223;
  font-weight: bold;
  position: absolute;
  width: 110px;
  height: 20px;
  top: 12px;
  left: 180px;
}

.BymsQrX_D {
  overflow: hidden;
  position: absolute;
  width: 446px;
  height: 51px;
  top: 330px;
  left: -13%;
}

.rkqegH7dD {
  overflow: hidden;
  position: absolute;
  width: 446px;
  height: 450px;
  top: 339px;
  left: 777px;
}

.SygSpmBX_P {
  overflow: hidden;
  text-overflow: ellipsis;
  color: #262223;
  font-size: 25px;
  text-align: center;
  position: absolute;
  width: 297px;
  height: 65px;
  top: 0px;
  left: 4px;
}

.H1r67rmOv {
  overflow: hidden;
  position: absolute;
  width: 331px;
  height: 63px;
  top: 7px;
  left: 37px;
}

.Byrl4Hmuv {
  overflow: hidden;
  position: absolute;
  width: 300px;
  height: 300px;
  top: 75px;
  left: 49px;
}

.H1x4EVrmuP {
  overflow: hidden;
  text-overflow: ellipsis;
  color: #262223;
  font-weight: bold;
  position: absolute;
  width: 113px;
  height: 23px;
  top: 10px;
  left: 142px;
}

.BJ4N4rX_w {
  overflow: hidden;
  position: absolute;
  width: 387px;
  height: 47px;
  top: 330px;
  left: -13%;
}

.HyfzeHm_P {
  overflow: hidden;
  position: absolute;
  width: 387px;
  height: 452px;
  top: 344px;
  left: 350px;
}

.H1n1frX_v {
  overflow: hidden;
  position: absolute;
  width: 302px;
  height: 230px;
  top: 523px;
  left: 21px;
}

</style>
