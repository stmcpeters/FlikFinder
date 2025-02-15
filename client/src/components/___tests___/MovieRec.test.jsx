import React from 'react';
import MovieRec from 'client/src/components/MovieRec.jsx';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
})

// array of 2 movies from API data
const movies = [
    {
      "itemType": "show",
      "showType": "movie",
      "id": "283665",
      "imdbId": "tt9536804",
      "tmdbId": "movie/564096",
      "title": "\"BLESSED\"",
      "overview": "Supreme presents, \"BLESSED\" a full length video directed by William Strobeck featuring Tyshawn Jones, Ben Kadow, Sean Pablo, Aidan Mackey, Na-kel Smith, Sage Elsesser, Vincent Touzery, Kevin Bradley, Rowan Zorilla, Kevin Rodrigues, Mark Gonzales, Jason Dill. . .",
      "releaseYear": 2018,
      "originalTitle": "\"BLESSED\"",
      "genres": [
        {
          "id": "documentary",
          "name": "Documentary"
        }
      ],
      "directors": [
        "William Strobeck"
      ],
      "cast": [
        "Tyshawn Jones",
        "Ben Kadow",
        "Aidan Mackey",
        "Sean Pablo",
        "Vincent Touzery",
        "Rowan Zorilla",
        "Na-kel Smith"
      ],
      "rating": 50,
      "runtime": 84,
      "imageSet": {
        "verticalPoster": {
          "w240": "https://www.movieofthenight.com/media/image.svg?title=%22BLESSED%22&width=240&direction=vertical",
          "w360": "https://www.movieofthenight.com/media/image.svg?title=%22BLESSED%22&width=360&direction=vertical",
          "w480": "https://www.movieofthenight.com/media/image.svg?title=%22BLESSED%22&width=480&direction=vertical",
          "w600": "https://www.movieofthenight.com/media/image.svg?title=%22BLESSED%22&width=600&direction=vertical",
          "w720": "https://www.movieofthenight.com/media/image.svg?title=%22BLESSED%22&width=720&direction=vertical"
        },
        "horizontalPoster": {
          "w360": "https://cdn.movieofthenight.com/show/283665/poster/horizontal/en/360.jpg?Expires=1749514654&Signature=K~KBThlqn-GmDEORBp4UcKHS6w-CIM0ZjaaBZMS-uhVPxd0pPMtaqURh~uzzsaUIGmfgCnfF-9d1~tyTy22rxAGDPQMIVy0UnpCjOk3~77d2Vut8QE18BGQvwQC0dgNfHe7hacwMLD5gb6Ef2GvjM3DnbRMo0fBKDFggUJEb2MlkJC-2wKLWo57BfpMF8xtdtD0iVDGArmIvs-~XBbr8Tog5lwuQlVIo7n1mSHsnycHkXlCK~~v5yrbBFOkve7CWU13gr24sqCe3K8b-qzZ1SKGJTENgna~Jq8nK7634lPNyJ27zb9~qTQE4k8y7M-wkX3DBy~hRhS9x6UmHGGUkgQ__&Key-Pair-Id=KK4HN3OO4AT5R",
          "w480": "https://cdn.movieofthenight.com/show/283665/poster/horizontal/en/480.jpg?Expires=1749514654&Signature=i-B9xyr3HNFgegHM4YwrUUz8-TxDa~cOoJBSugl74PsLK8tE47n7IJXC8080KogYCmxBAyEsjKMyoj71i~Ynjnq-861jncz~bRCC1iqc~yItepalJYlJVLvn7CxDL2mdjmWGqj0lpa-6JttjjHzVqRKrhM9IdoUC2-KDcDvWKd7gNlGC2dW7AouNUhHeNvueUZvpAsK1FbROOn5VaDMIP9yq62meKNW96gMb-nRkN3XuPmW6-e~FfBGgjxzD9orsugyWiZ4qSq6MIvHZewuLptvs1D6mKIJxmTzaxnR5SADeNOxspR76tfWb1RSwaD8sDWRFcVug7B7QD24wFBfqLw__&Key-Pair-Id=KK4HN3OO4AT5R",
          "w720": "https://cdn.movieofthenight.com/show/283665/poster/horizontal/en/720.jpg?Expires=1749514654&Signature=TF8h3lAr5uDmhDn6Djm1e7Owr4m3RGAB0UlciAUudUdv-ZefDDI7PGpux0AWeb4ruxtns5ksfV-BxY9KAvIv5k~cKwMFD1bK8~VOqsC4TfxUxLGgGIY2yL78oxM7epJxgTGX3Imo7cXw7Xq1ob6iBo1W~FNi6f~O64dsMt~gieukf5gIXzXlrNdE--ZbeZqcrhb6b04KtefhdgsHDyGTxJ5Dyg-sWz1o2xL3JynUH1aw4Cgp8Sl845nHxFfCXUJz8e0q0ZV44Zvvz~wsaozR~LLcxKKQbPcg8SJ8GPQWAEUJ~K21JOp0dEnbtGQJ6ROZqIHAAYPZIzLhth2gKD-N0g__&Key-Pair-Id=KK4HN3OO4AT5R",
          "w1080": "https://cdn.movieofthenight.com/show/283665/poster/horizontal/en/1080.jpg?Expires=1749514654&Signature=Tsg~bH4eB~XpuWfsDsCGmf9uPhOI03UHyoQny2ngqtErvBjEtnF~1L7woJ4FmCzxhBxXNb0pVb9p-ONVick173NtbZXGKjOIi38CVE~7Ppx1Zl7R26j4fWfDbExDSwWzvyYuyIuTavacWf2W-KyNLvBQt-LkolxcVY0Y2VsZb380RIhovD62bFIc4MgGOxSSrXIpKmqfipDxJ1Zv8SmX3pXEV-3jW7NszM0aWmKcV2Jxk5cKPmIkK2-zkhrB1jOoO1TG6Sb3IUieJ3vKtQm9sR4HEtGVjADbeWGfC700P84Rz6fZsffCqdFRjjr4zIYuB4UtO0H1JocIVVr13D44VA__&Key-Pair-Id=KK4HN3OO4AT5R",
          "w1440": "https://cdn.movieofthenight.com/show/283665/poster/horizontal/en/1440.jpg?Expires=1749514654&Signature=SbLBLrgGVzNrMrp6CnIKUm22H-63uP6YGHq2h6-976o13vnjLNBJ0Tl4Ebx87aHdfcGvPaDLpe8wXzbndHuqe5gam9jNciSf41npqEKmSzlYfk7-WXILWIG5kYjDZhf9Wx2Sndh3UlS3c4Ox20Y6FNGrb9YoeDYi0AWBb51HHnJl9jR7CcCiwIAbpmi30bn3YMii2aG~hJBKfWIDMA2ykS9I62fpldsu2FOmH9Pro9aBpCX7t~TQJvIzZ1uU~XbmYFNmSvOZwB8wzTT0abtIr2aj0-jTRIPqA5jNCwbDhoOGZC8ByBDiuRCrsKpMTZr3af-W1vKBg7ivLp-8sAxypA__&Key-Pair-Id=KK4HN3OO4AT5R"
        },
        "verticalBackdrop": {
          "w240": "https://cdn.movieofthenight.com/show/283665/backdrop/vertical/240.jpg?Expires=1749514649&Signature=hhOypiL7UmkqIlcXApBuG78mXmjjFujD21iX-Hnk3dm2Rmg8J67aD5QwhgiaQLJJE-N2KVWXO1iqqjJ97w30ErsWPF4WUIADnUuJAy1KwVy0WVa9QgjJM2Q7SU8wMm9tFCqYXkukTQK0xMjkWm2CgLPe9IyG8nPQIWHIaWBIalFfhGi0vme0mSjeiWEJzSh4avRLV8xWVtljZCmL34M14k086~J7vUT3NZAiC06ZaLOuis7vAGW3rCzU7aZzazTmCsPlEzDpm1zbRm~RlrvNTxrctz~xMeKuBTWv2q068GU--C41BLGOSQT3rlLqPQ5wZm-EDQH8EYVeR9jZ-ntX9Q__&Key-Pair-Id=KK4HN3OO4AT5R",
          "w360": "https://cdn.movieofthenight.com/show/283665/backdrop/vertical/360.jpg?Expires=1749514649&Signature=bKQEBCFaQpZ7CtEVEz-T1e3P7Uzsphti95kIej-jkndjFeO4MO8CJVRkZ~9GZHWrE-HrXNPbT36vrq1vngDixvQHEnVT8YKgecR4nNLj~Ow0XyAa6oYCApI8uFSDyUJmJ9rw-uVaxL~HNYHejqNWfodg~OEX6ie~He4hjvXyvukkWn9Z7uGrRVxfpO4WKNpvcisezYaE1E7sGGmmbkSxxQIwH6r-5LnuydaGrqhu-9Zq0uCzVB54dpNzB40-y4OJJymjgt~KY6OyeTUxoCrWoaEXFHJ7M9Yoc3nHAhpKoYUAC6Np5UWLUFauCDTFUpYoaJwGZjmAt2ciBtEJr~IjvA__&Key-Pair-Id=KK4HN3OO4AT5R",
          "w480": "https://cdn.movieofthenight.com/show/283665/backdrop/vertical/480.jpg?Expires=1749514649&Signature=htovuw~6ol3Vfuvwmar5Ekbh-T6hhIKYfIBSRrbyz9t61sdYAAQ6CDGcNKWCPOGlw9F3brsLd2LbF5PjKTpXgF7hFcBvBFTndPFiFTW-BzyTeVaYahECuBIlUFUGg9Kw~PavAPFx4vXDt95hybfev6BbxDoPXoHnuUBu4bJ3ohX691SdZufio0m35B~vuVGD-1d281ElBJydDIYjiUE6fYSdnWmfQCzxkB0eFCHVkbE5XZEodYygVBGRRZCHTafPyTBZUFXIQ4LYlK-NoR7GTznf6V6K5EyIQzIARQb6grfgzH0BI1AgwTkZnyKicLNiYbglwo8~CVxEZMJLoapbsA__&Key-Pair-Id=KK4HN3OO4AT5R",
          "w600": "https://cdn.movieofthenight.com/show/283665/backdrop/vertical/600.jpg?Expires=1749514649&Signature=MFgeSZGaC6sSHZSrkORPUA9FSIu0-CnmZw7iNdD99oRJU~6CbBF8zKDQhZz0SOBFpYVazLTdUUsJs5mSUDVRuuNQIkPUndw3hwFigcxG15l9jmq2IRnNoBOod49QD~xwtR0-BrZPRxwps4FndXzwm-KX259lbn5vEQyNW8rZEl7NbGcpQ15-EZ9qquJhvoLxaQFKkFko3pUI62ck1od76Y6VMYmKZLoUdVLVgo3K4bkaD1-Vk5KK1epA8JYnGiSu2hq2eYQMYFrH62kEEOnrE7hP9eGSzNWxjNZto9jWADEqY0JOsVoMbPHVkb9-4QD5HAVEG89kl0BVJlvqZ~4uRQ__&Key-Pair-Id=KK4HN3OO4AT5R",
          "w720": "https://cdn.movieofthenight.com/show/283665/backdrop/vertical/720.jpg?Expires=1749514649&Signature=D5m26WRrESh8bE~97Iymr2lJzmXe77VB7GFpRu4gjm6DGSsQa~Cp4MLO4Q65kFXThHzsESzR4K2t7ew5SeyHsVivMGNkQiy2AmEmgpLtc92hY8~fXsgKjro7EIbyG1XuURSfvjLZIqj3hOUYwrLZgWAoEa5yAxpBmu1oN-86c4Hz8P5769zN0sDMgLwJ1KIQxarDgsv0P-9zvyzCX1oiSa~Tn2ynxQUueK8p7jo0Y5H3XnpuCdBzPjiesi8oiGZnwDq64RrTnSL8mKoZNiKXslmGAjOGf~0vCOehDryYjDuX2BrtxHIEhdaA31A2hxJ0ApZCdKkhnRPEGfD7-qSVWQ__&Key-Pair-Id=KK4HN3OO4AT5R"
        },
        "horizontalBackdrop": {
          "w360": "https://cdn.movieofthenight.com/show/283665/backdrop/horizontal/360.jpg?Expires=1749514651&Signature=Kv8IR9jyW5L5svko3VsbQONkLqhHl6ehxTeMVbsVgnbrG4Szs6mf8zNj1HH3Z5961RX19O2T~b05~vWcm3X5F15bnFVNVaeamepHxgSg9p74hQe~l3gFEEAGuHge5naK7~dSiGPSMsIq3FAqJAjb7Y9heddjRoDgYOA4fP1ADA3BxRKMJIsFs6iVknTIeYuFEf7QyVb8hsPZMyvqgf8bz4qCSaxCyaxpjA6L3HeeOehuBvYga6tASCKFpC56S6vKQ1krzHGfk9ybl7F8Miq76bcvgbKcN77W-cfWqk22k0513mthQCme8-H5je~e4moVZSDrq9yYwZ1Uh5bP1~gl9A__&Key-Pair-Id=KK4HN3OO4AT5R",
          "w480": "https://cdn.movieofthenight.com/show/283665/backdrop/horizontal/480.jpg?Expires=1749514651&Signature=YlD-uvOOApL-DZgL3ZzGGSUVynLeRNtre~XYhKuXQSMAXaj5FnISvmO~6GoZGfSCHqAjdqdTZPD0MzeRbLzcAUzrDSNGsn71omR1YxyEU0bGjQanYFU31tNdo8~ZM1DGmVz7eLTExr4LlZoYaV~lB7HcV1YSgTDnaYg9opQ2tWDRJShNeqUkZjsgInUdmS~GkQxe7trGyaJnzooTPBM~ja2H8PSp7bfD8R0bZ8Li9TD06GJZqSRWl-vJsKOsYcAzUS~V6m8gQw-Zu5JlbEwerWWaLtuLMZZAmnA1WdKIB6Hf0ziR0ehseHnUNuQpH4plmmwCK0nr~J~Y2mivet1naA__&Key-Pair-Id=KK4HN3OO4AT5R",
          "w720": "https://cdn.movieofthenight.com/show/283665/backdrop/horizontal/720.jpg?Expires=1749514651&Signature=fLmZRopnF8TgMQds8pUx~zYtDWgioSaKqiVrPjnSm6QEbnXJs1Gxf9MVqmRsnCcxJHOTNYUJnTqmS4hLUKeIWuerHDYRAkdPzvhDEaiBO9Kl3mJrhgX1wEzY7PITaMCzn5Rn2xSDxUb77azTAboyged3CLp6LjJj1yQPYapuD8VAEHTfclSzOHRCXsMxEXYan61MqrQfijIM8Kx0iFGwdUrrOY3dYrpg~cNLJGGH-gRcIYuUatHfo5AgUd6zvO5N97Ea05-fyoZhTrt18HHUSQDHYRYVU8kjo0G3IN5rEw8Fi46dD5Qgw17NwENfFKHwH6ZXLjeKI4FGUdMmJlIdgg__&Key-Pair-Id=KK4HN3OO4AT5R",
          "w1080": "https://cdn.movieofthenight.com/show/283665/backdrop/horizontal/1080.jpg?Expires=1749514651&Signature=RKfoNGXGi9-ytzvONt1eHTZxb28fnewbfFkaJlDv9CMLWg4b~Qlwhs1gSkfGGkAvrOfIwkWZHxSWalMQsK6temQnVXi7YmzFFb55zgsGST1yGp49wCk111yiOG~ygtFCDz97F1S~KgKVNCk6oxEVdH4VHYR0ula~tTQUAmuScM0SRRERZ0hE5~fb7427X8cJXUZ~YkvF4uL4wx4B0FGascMnGgAjtMjrlxb17DkFAgU5X~EEdTN901SZiQQk58hB5BmsRe0P8Y5QLDBouNEpxd0gfBsNSG6aUKq1ntr8B0Ud~FNQWHXDu30okTmCYFKkR2AiIlBOdKRlJg0Jll~nQw__&Key-Pair-Id=KK4HN3OO4AT5R",
          "w1440": "https://cdn.movieofthenight.com/show/283665/backdrop/horizontal/1440.jpg?Expires=1749514651&Signature=gy4nsuInTHT1Lx~VKNovFvtTkV-rJ917Pkw8DRFMHUjx3zYGW4qv28AVIl0e7UKquHMZcJlUxBcoyEX5XiztNi3b14dZwHHKPXNg9CPiP-Q-DaJYWwu5tBuUwYltLNlr9XWrHycKHGkdsyXbYnTa83CnshibP5EJhlzYmycuvkJ2EQCXxN9o7QXUwX6ooazUSPIow9l6g-cV5NdHIx9D~IpjfC0ummJkZ2kWviv1X~ZeLdVxYZ2E4NObs7U6qI9Lp5c1R2YFUVAEactjb4UPaXxRcqEvO7DRSrbmqkrfRwCGA97CWBWjKBNVVtqiIkL8furEXSponHjUGAKy-DK-Ig__&Key-Pair-Id=KK4HN3OO4AT5R"
        }
      },
      "streamingOptions": {
        "us": [
          {
            "service": {
              "id": "apple",
              "name": "Apple TV",
              "homePage": "https://tv.apple.com/",
              "themeColorCode": "#000000",
              "imageSet": {
                "lightThemeImage": "https://media.movieofthenight.com/services/apple/logo-light-theme.svg",
                "darkThemeImage": "https://media.movieofthenight.com/services/apple/logo-dark-theme.svg",
                "whiteImage": "https://media.movieofthenight.com/services/apple/logo-white.svg"
              }
            },
            "type": "buy",
            "link": "https://tv.apple.com/us/movie/blessed---supreme/umc.cmc.3rhiiv16ny0avim81jotg82z3?playableId=tvs.sbd.9001%3A1440921537",
            "quality": "hd",
            "audios": [],
            "subtitles": [],
            "price": {
              "amount": "12.99",
              "currency": "USD",
              "formatted": "12.99 USD"
            },
            "expiresSoon": false,
            "availableSince": 1654530198
          },
          {
            "service": {
              "id": "apple",
              "name": "Apple TV",
              "homePage": "https://tv.apple.com/",
              "themeColorCode": "#000000",
              "imageSet": {
                "lightThemeImage": "https://media.movieofthenight.com/services/apple/logo-light-theme.svg",
                "darkThemeImage": "https://media.movieofthenight.com/services/apple/logo-dark-theme.svg",
                "whiteImage": "https://media.movieofthenight.com/services/apple/logo-white.svg"
              }
            },
            "type": "rent",
            "link": "https://tv.apple.com/us/movie/blessed---supreme/umc.cmc.3rhiiv16ny0avim81jotg82z3?playableId=tvs.sbd.9001%3A1440921537",
            "quality": "hd",
            "audios": [],
            "subtitles": [],
            "price": {
              "amount": "3.99",
              "currency": "USD",
              "formatted": "3.99 USD"
            },
            "expiresSoon": false,
            "availableSince": 1654530198
          },
          {
            "service": {
              "id": "apple",
              "name": "Apple TV",
              "homePage": "https://tv.apple.com/",
              "themeColorCode": "#000000",
              "imageSet": {
                "lightThemeImage": "https://media.movieofthenight.com/services/apple/logo-light-theme.svg",
                "darkThemeImage": "https://media.movieofthenight.com/services/apple/logo-dark-theme.svg",
                "whiteImage": "https://media.movieofthenight.com/services/apple/logo-white.svg"
              }
            },
            "type": "buy",
            "link": "https://tv.apple.com/us/movie/blessed---supreme/umc.cmc.3rhiiv16ny0avim81jotg82z3?playableId=tvs.sbd.9001%3A1440921537",
            "quality": "sd",
            "audios": [],
            "subtitles": [],
            "price": {
              "amount": "9.99",
              "currency": "USD",
              "formatted": "9.99 USD"
            },
            "expiresSoon": false,
            "availableSince": 1707291203
          }
        ]
      }
    },
    {
      "itemType": "show",
      "showType": "movie",
      "id": "34511",
      "imdbId": "tt0073396",
      "tmdbId": "movie/32303",
      "title": "Mitchell",
      "overview": "A tough, slobby, honest cop risks his life trying to simultaneously take down drug dealers and a corrupt businessman who murdered a burgurlar.",
      "releaseYear": 1975,
      "originalTitle": "Mitchell",
      "genres": [
        {
          "id": "action",
          "name": "Action"
        },
        {
          "id": "crime",
          "name": "Crime"
        },
        {
          "id": "drama",
          "name": "Drama"
        }
      ],
      "directors": [
        "Andrew V. McLaglen"
      ],
      "cast": [
        "Joe Don Baker",
        "Martin Balsam",
        "John Saxon",
        "Linda Evans",
        "Morgan Paull",
        "Harold J. Stone",
        "Merlin Olsen"
      ],
      "rating": 27,
      "runtime": 97,
      "imageSet": {
        "verticalPoster": {
          "w240": "https://cdn.movieofthenight.com/show/34511/poster/vertical/en/240.jpg?Expires=1749681750&Signature=SuxHjOlEBC8sYZZAIsOlb~8YWbjTBT1ymEcVVbFKJcD12ylEP-aP3ym0qIy3YUW4Ybu-Bb6ARlJXFBaNswm5fbAt2mDMPJqfHOL9zFFmT0DBxjTb60oX0CYmOvq4IFm73VhuaJQoBu-15xl1594mCdOYzZGXWZqrPTpBhP-QsNUtC8RGsrzljlQTSr6NXbmkdid2oWuchw9hmoshDVeoqlUrQqEUATAGM8Q0crzI29zqHXAzhnEmjpqriD~-wxDT2vkZM8oFJf01RxjelbFJN10Bsoer4AbrBn-gBTfuqlsfLfN1hIe~mW14-wrMDLTH3hRjPfZUvVLbORtHMlMPKQ__&Key-Pair-Id=KK4HN3OO4AT5R",
          "w360": "https://cdn.movieofthenight.com/show/34511/poster/vertical/en/360.jpg?Expires=1749681750&Signature=MlM-0FN~KR2eO1szEF1Fs5eFtX35rVWhx6qjbkqjJmPV-5ggOYhu4W2PnACS1JaCoFS4BVvGXWm-Sp8cK6qP1YNk9rwVw2t0G-PhLC4L3fOKv65EIUFs7jQdddVY5k4nITUG5fHkerzlatPnRzApQUZ-pNmvrS6m4vsjkr6TAdpyHNGWqJRPsgXmFW9JYazsT6RV-QwggMwGpn-J90Y20rrTJLmFQ1sZExVkCTMds9vhinrc7MvKcVV8csMjSsG5w8Gt09lxZOE-i8OrOUJlE0H-G05HSppSi834ZUlDJT-bmMW2aO7wmRINuSKRWtmoEs8OsWj9nq~BqELXtnXQ~w__&Key-Pair-Id=KK4HN3OO4AT5R",
          "w480": "https://cdn.movieofthenight.com/show/34511/poster/vertical/en/480.jpg?Expires=1749681750&Signature=I~EGNX5-Dv3YRSDEUFrBiHHIvE7HBODYCpBMNSkq7PRJ-cvSj5axSjv~w-2UZQLqf3UuNjHQ4zuczwnp6qzEvpiLW-jR8vu8CqaR~hOvLWMXTwo4-qqFufKeC2l4J7Cez5~RUrzVUq9ZA1KXL~sg5C6tkXlVyTVvglE20hLU1qn~hbFge8ORUExWbnuEH0Mzz-fSfZhols0waU11sYXUshFKDHxithbW6Ej9vfP1Wfom2r1zXUJ2InC5YcSHD1JXz4xDIIeV21Ku4DkV-0BXNntMvHfnf479MyhkmH8xCaNlPc-hkysb4VayiZdb89We0FHD1mzFIkW7Fav~ypT~9w__&Key-Pair-Id=KK4HN3OO4AT5R",
          "w600": "https://cdn.movieofthenight.com/show/34511/poster/vertical/en/600.jpg?Expires=1749681750&Signature=HQQhTEWx2Fxsm2V2Sfhvgx13VrMNxdfXxr4sxrlraZXmT2HbMQ0FS2VCN1pHgqlZ~wmk4BHmFPaNTfcUs9PPiMnMukWkTvfvHfdyubCmJU2t82oA8~oSQwUTZAk6~km5~0Rszm0-VJ6Y4KoPscbRsTbUxl~bkbLeutyHPlsJMNqds9YIfbFoNxuMBUSkr16w6pXsb96e4JIEclOmtb0yAivq~ExSdw~bNDGQTKEl0Zt1i-WFPFZZNTOzjIS-8lbFh7vydeGCF0cLkmVlq2J5305~0Dxp~XcxBXMVOb-SreJF0D1VfSlYIQxBw5wUtOQr9veF2njIxCdSHue85-00nA__&Key-Pair-Id=KK4HN3OO4AT5R",
          "w720": "https://cdn.movieofthenight.com/show/34511/poster/vertical/en/720.jpg?Expires=1749681750&Signature=GmQsaDon2pdoDMGUZY3i24SLT2ZS7rDWqURaR2qLhM7wAtBWzINyPEaRDtfff81T245y8SW5qWLPMU5sQ5P399wMiRigCWxBD64bKpBowJWMnNkw2uW0MjQm4vbN1GeOxDWtm3XdCCT82xbIPAlt8R9sj-g4Uweu08UI-3CeOzbPBnfYSy3bXs6jX4qNsJ60qS1-L3TpbIQ1I68RqtYG~qFAPzJp~LNUsP3jNBT4K00fjNq45aVfOLkr-h5T48NodkYbx4oK8TkYixMd4YKgnrKZhjcAzNfvAeinDa08LrtK8uT-o9REz4WE2aSOFU52NkLeQcOxBwefhGo7sxK2Wg__&Key-Pair-Id=KK4HN3OO4AT5R"
        },
        "horizontalPoster": {
          "w360": "https://cdn.movieofthenight.com/show/34511/poster/horizontal/en/360.jpg?Expires=1749681752&Signature=XNC~-12gBP-73rkT9Vb02Myu3Hd0300UPVUU~5Q8ED0JvltMym0vbJSqzt9465rpYUCVt6ku0tUE0KsSEZb8EKSu2SxzzPYgPkNAar~GQ4Idn57V9DZ64Zmg1omo3zcEOJnEdoWbD4qFqXau0OvhB5NEc4i5PMaC137kzPc9poTGpj2v5sWXNuHY0Cxf~nekYGdVvy0htmb-ZmBXwDlxey10IYSkk8jCVVewRDHjwy24zfTuE1rkj8mAACX5TUF54y8TZEHlY~moxsNj-fGjAjwC5z6GGVTygFoRE8YLyjLMM-QxYdTTd-CewsJ-KTvTpcfTWKj66DpykV8l-EYUHw__&Key-Pair-Id=KK4HN3OO4AT5R",
          "w480": "https://cdn.movieofthenight.com/show/34511/poster/horizontal/en/480.jpg?Expires=1749681752&Signature=aMZ7H0QkuFRXkUmRd0uom7Hd6wWTlr17efWWHsFkr3PlTNLtyaOVy3eFtBtSbKfPYmeai6vMms-MVqfNjCLRq5Zxrdq3Zh88n9vVliEMpReuPZ9hfQEZCJlZl0NZ3Vmcc6esviP7KsaxHN0RQOeXTzBRY0pdRuXL-aYPg6hwEV6JytDnJQajV5RPS~GT8ginTcY~cHNutnwwz3ApUtgni-rDYA9g87TdJ8bVIMOAmKpDfXzmUJrZLU6YtZqoLu47hIANTl0EWlQnwK4ptDNWIsUJD6yCqqVvflMzHmJtZAAqxU55o~8j66W2RIlCMMsKoqE1ISRT1XeMgNU0wdKCZg__&Key-Pair-Id=KK4HN3OO4AT5R",
          "w720": "https://cdn.movieofthenight.com/show/34511/poster/horizontal/en/720.jpg?Expires=1749681752&Signature=jAE~znqk3ySKi01OlEjjmT4WoRAG-zTouFm5Y59ryopEL6MISjDL~9KqntxsQhBf~Mqx72zFp1oQ7gfIeoLg0qft7p9cfABopyirt35BqrGYVXmKuRTHcW4kvOj7eBJ-LQSBjZwqnk7H6UXET-SlHkrP4f15q0jhsIr0BuYLnLOfOCbnvhc5epLJblQpAdx-aKVgFTvXAfAG57RV8A7Ts0bO-T2DiJA~Bu7l306gnE7fwZrdqKT0YH2K6qACdD3H5GxvJz4sz2TErXn1LXZ44Q~Bi1mK6N-PV8wl4jsosG0EzC9yUOmwqAo4-r9BBuvJ4dAn1o~SqQjXgdztT99~iQ__&Key-Pair-Id=KK4HN3OO4AT5R",
          "w1080": "https://cdn.movieofthenight.com/show/34511/poster/horizontal/en/1080.jpg?Expires=1749681752&Signature=Aq6Zbet~rZegfCTp5GULU6KHeKPEO59ZbcVZWZTzV7Riqq7q9R1vdIx5-uQEX5EdKPfHazFq5PEBjgcLzWj11Fd9Sf6jfL2EWU-EhdqqCnh-u~WYO3PAP4zet36zVbUIFpyUwsc9qW1uBUovtKHUDx9bUOG8CHp4uDhsDp~1fjoj7ASRSicrZ4j4mWs7yHEDHzli2vXyyP2dx1ti85vse34h09bJavSnb6Pc0fbH9eXGO4NCRUPID0R7L1mDXq1KT8dTUw-7aGawcoJ9XJHk63cjVM5v6kW6vGqhuPlIQrl~wl5moxd9qvgAiNtHP1NubBIDlFqeG7DletTLvfRyzg__&Key-Pair-Id=KK4HN3OO4AT5R",
          "w1440": "https://cdn.movieofthenight.com/show/34511/poster/horizontal/en/1440.jpg?Expires=1749681752&Signature=QcvRmv1nAmLHtW2Nx~k5401HoZHx5Uz2E3BoyqKaec5vwL-kz8mhpnRYzh-JszW80dIg1rQALAhOYiQCxoSZNmpG8QrrmlG2HcZxWAGcuWH1S11Zu3N4KIBB4b-axtkk1uhO4Af1zkw6PgUjM4zOnjj5zuXFr8MjCphy2wpY8nvI9j2PbnvNaN0iFv3x0RZ3VQ-YwXyGqMMrlbfyLxLcFrWl4YfbcjLY01YVwuuamJJvBVKSffElAK6lrURaX0E4kHZpu6m157qGRvacgaD41W0A92y0dWdYTo5SpMcXTHIgSrDn~96f7pwqdZmJWWGM3PAM7vh0kJq90aHAm5vWBQ__&Key-Pair-Id=KK4HN3OO4AT5R"
        },
        "horizontalBackdrop": {
          "w360": "https://cdn.movieofthenight.com/show/34511/backdrop/horizontal/360.jpg?Expires=1749681749&Signature=iVZylH~VuuhH~vQSUjhFvsHIE83Mn4pj3dkdCvxBXS9BCt3w8e~mfzGhq~W4aWNF6KyhDAjf7fMEM28baVnznyZlHNy0hHsHjDhHRQNJ4a9a9UrPIev4GIpgSHdmCze4q1Gj-puEVLdbOt5HWTMt2LPb1qHMKGGRNNZwPIyagt35Ve6gKFMyAQ8k-4-9sMnKrRcR4-ODPxEfWdfYVKslsEgG61APMAtuPgSaK9KpFCH5ov9VHoFs9o6za7vwiQNs96H5Iw20UqWJ-DX04Eb3WAHKO2s~McoE1TnJlJ3iUB68fLfLyTtCZaxjr6YzufYIRw14iKfaZWPsNamA94lCqg__&Key-Pair-Id=KK4HN3OO4AT5R",
          "w480": "https://cdn.movieofthenight.com/show/34511/backdrop/horizontal/480.jpg?Expires=1749681749&Signature=QjV0gLX8B1bwH9r0NoRHMLb8E-Qhbk~dIL-fnsax97kMNhGlhKq4qoVxTo~gmzl4Y3RHC1ptm76zH7KYNvDbGZYEcoGJVfPR~2tjLJboV1SEdVU2aUCjJpP7HHdgUoGlXe94jEXN~uP-4VI301I33nsDAWmrDxqo5GeRAsfaOyQzDcQRvnNuoDeO77-sWw5iumpq0UCcwHjcuQ3Yi8bE~Il1FWfKHmts8-fRu8cp6ZXFTIJi6VoGIJPIB8rspLeh2lDjzljS8bwYsvq37wW5vHJ4iln9tIVe34hviHyDcCGxj6ZItxL4y5rWy5ub2y9ug1zGVP0ZSZxUs3pS~eCq3A__&Key-Pair-Id=KK4HN3OO4AT5R",
          "w720": "https://cdn.movieofthenight.com/show/34511/backdrop/horizontal/720.jpg?Expires=1749681749&Signature=e7BCrfFmBKhTsYTmYZ63BpiCh6mGhC938VpK5xYWA2LckB-rCRf1Xc4rDh~IWwXAzJthnb8fbSvq-JFJ6~UXHJaRWZz6FcyTWi9ki1VuD8I~~R2-wXQlz8~sQL8n3Dkth6Zy3udCiDASMILxzDd9ro6QWGklQnNy3ikq1sKFjXh3Lza2Z6fcFVdYKMM1VfJ7kqTMAB~0MMZcF7YrqG73hnLZ2PcTInSAxO67xefWM-YAaILS9GrPZLX01tNyGmf6y2X8hEFWY5pMkV89xQUo8~0UGnyo2V-eb5BfXvknGBOQO4lKHj540KmHCQbaTp14uIm-pxpjbuTIP~oasoOLaQ__&Key-Pair-Id=KK4HN3OO4AT5R",
          "w1080": "https://cdn.movieofthenight.com/show/34511/backdrop/horizontal/1080.jpg?Expires=1749681749&Signature=G75NZY~sg6fWtiDrCHYEN8Z2jedSfn8V44FJ~DXYLEDaMWWJYXPE8nsMjeAvQT31LHspa7zb~fv1GCFq4SsZyG2hKU5yRfz9qPm8ql3xEhfZ6NfrYquZyiUp~FARpfLem9LRH12H1PUE8nFsELYrMFydCAADEZfJSPjt2FPV~Nu5Nnn7R9qc0YVO9iyYeZo9UZS2CuRlyoTjox1S0Yd62~RJzgdzaMn4gE1PsWpFWFYTDnTwFGg87NeQKyPKzpFv14pAsN2xZYfATI7KE7XxMBNcPTkkEWC3CKb1lCTVOg317vYhu5FR6yDnFgHLjoCJy0~BrMpxB-YNTYRH1cXH4Q__&Key-Pair-Id=KK4HN3OO4AT5R",
          "w1440": "https://cdn.movieofthenight.com/show/34511/backdrop/horizontal/1440.jpg?Expires=1749681749&Signature=R-YDfMOQfMDfmG2BLRQjWd0zy11ymTIWTXEXNMKRBoNBBb9qV5UVF~-SYiEGE1zjq48f69fZBeGUzspEm3uLAqL~hYfbUMlsFBo2YzIJwK15T5gB-VOfm-o2FuVGIQViF9TpKzVlkq0oQVihZ1cqKs8SAUEF9MlM0NKalblnUu6v0Av-SM9qhBDA6o7eAsCtBJ~yZd-YD~0sxyDDBBqiPZStX1WhyVthOcxn5CK2pMt5vl7QLaeV2aP4ss4irGCKcdItrS3RkFGGUUiLQdd53EuK37LpoSbhnsAMCsPBfRWAin67aPXO~lVVJiJzKRzUOH4q5hsjJ1ukaH7CsNR2IQ__&Key-Pair-Id=KK4HN3OO4AT5R"
        }
      },
      "streamingOptions": {
        "us": [
          {
            "service": {
              "id": "prime",
              "name": "Prime Video",
              "homePage": "https://www.amazon.com/gp/video/storefront/",
              "themeColorCode": "#00A8E1",
              "imageSet": {
                "lightThemeImage": "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
                "darkThemeImage": "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
                "whiteImage": "https://media.movieofthenight.com/services/prime/logo-white.svg"
              }
            },
            "type": "rent",
            "link": "https://www.amazon.com/gp/video/detail/B000YFTJ08/ref=atv_dp",
            "quality": "sd",
            "audios": [
              {
                "language": "eng"
              }
            ],
            "subtitles": [
              {
                "closedCaptions": true,
                "locale": {
                  "language": "eng"
                }
              }
            ],
            "price": {
              "amount": "3.99",
              "currency": "USD",
              "formatted": "3.99 USD"
            },
            "expiresSoon": false,
            "availableSince": 1690092681
          },
          {
            "service": {
              "id": "prime",
              "name": "Prime Video",
              "homePage": "https://www.amazon.com/gp/video/storefront/",
              "themeColorCode": "#00A8E1",
              "imageSet": {
                "lightThemeImage": "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
                "darkThemeImage": "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
                "whiteImage": "https://media.movieofthenight.com/services/prime/logo-white.svg"
              }
            },
            "type": "subscription",
            "link": "https://www.amazon.com/gp/video/detail/B000YFTJ08/ref=atv_dp",
            "quality": "sd",
            "audios": [
              {
                "language": "eng"
              }
            ],
            "subtitles": [
              {
                "closedCaptions": true,
                "locale": {
                  "language": "eng"
                }
              }
            ],
            "expiresSoon": false,
            "availableSince": 1690092681
            }]}},
       
]

describe('Movie Recommendation component', () => {
  it('renders a random movie in the movie rec component', () => {
    // renders the component and makes sure to pass movies prop
    render(<MovieRec movies={movies} />);
    // will show the html of component
    // screen.debug();
  })

  it('returns a loading statement if no movies are found', () => {
    // initializes empty array for mock
    const emptyArr = [];
    // renders component and passes empty array as prop
    render(<MovieRec movies={emptyArr} />);
    // we expect to see the loading message if no movies are found
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  })

    // it('takes an array of movies and returns one', () => {

  // })
});