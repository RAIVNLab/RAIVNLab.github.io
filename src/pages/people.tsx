import React from "react";
import Latex from "react-latex";
import { Button } from "antd";
import { Helmet } from "react-helmet";
import { css } from "@emotion/react";
import color from "~styles/color";

import Header from "~components/header";
import Hero from "~components/hero";

import { StaticImage } from "gatsby-plugin-image";

function Person(props: {
  name: string;
  title: string;
  email?: string;
  additional?: string;
  next?: string;
  image: string;
  website?: string;
}) {
  return (
    <div className="align-top hover:-translate-y-1 duration-150">
      <a
        href={props.website}
        target="_blank"
        className="!hover:cursor-pointer z-10 relative text-inherit !hover:text-inherit"
      >
        <div className="rounded-md overflow-hidden border-slate-200 border-[1px] pb-3 bg-white">
          <div
            style={{
              width: "100%",
              paddingTop: "100%",
              backgroundImage: `url(${props.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          {/* <StaticImage src={props.image} className="w-full" alt={props.name} /> */}
          {/* {props.image} */}
          <div className="font-medium text-xl text-left mt-2 px-2 !text-gray-900 leading-7">
            {props.name}
          </div>
          <div className="text-sm text-left mt-0 px-2 !text-gray-900">
            {props.title}
          </div>
          <div
            className="text-xs text-left mt-1 px-2 text-slate-400"
            style={{
              fontStyle: props.additional ? "normal" : "italic",
            }}
          >
            {props.email ? props.email : props.additional}
          </div>
          <div
            className="text-xs text-left mt-1 px-2 text-slate-400">
            {props.next}
          </div>
        </div>
      </a>
    </div>
  );
}

/**
 * @param {number} a some number.
 * @param {number} b some other number.
 */
export default function Home() {
  return (
    <div>
      <Helmet>
        <title>UW RAIVN LAB People</title>
      </Helmet>
      <Header />
      <div className="pt-24 bg-slate-50">
        <div className="max-w-6xl mx-auto text-left pb-24 md:pb-28">
          <div className="grid md:grid-cols-2 align-top mb-4 px-5 grid-cols-1 gap-y-8 md:gap-y-0">
            <div>
              <h3 className="h3">Faculty</h3>
              <div className="grid grid-cols-2 gap-x-3">
                <Person
                  name="Ali Farhadi"
                  title="Professor"
                  email="ali [at] cs.uw.edu"
                  image="/Ali-Farhadi1.jpg"
                  website="https://homes.cs.washington.edu/~ali"
                />
                <Person
                  name="Ranjay Krishna"
                  title="Assistant Professor"
                  email="ranjay [at] cs.uw.edu"
                  image="/ranjay_old.jpg"
                  website="https://www.ranjaykrishna.com/index.html"
                />
              </div>
            </div>
            </div>
          <div className="px-5">
            <h3 className="h3 mb-4 mt-8">Ph.D. Students</h3>
            <div className="grid md:grid-cols-5 md:gap-x-3 md:gap-y-3 sm:grid-cols-3 gap-3 grid-cols-2">
              <Person
                name="Matt Deitke"
                title="Ph.D. Student, 2023 - Now"
                additional="Advisor: Ali Farhadi"
                image="/matt-deitke.jpg"
                website="https://mattdeitke.com/"
              />
              <Person
                name="Jiafei Duan"
                title="Ph.D. Student, 2022 - Now"
                additional="Advisors: Ranjay Krishna & Dieter Fox"
                image="/jiafei.jpg"
                website="https://duanjiafei.com/"
              />
              <Person
                name="Ainaz Eftekhar"
                title="Ph.D. Student, 2022 - Now"
                additional="Advisors: Ali Farhadi & Ranjay Krishna"
                image="/ainaz.jpg"
                website="https://ainaz99.github.io/"
              />
              <Person
                name="Xiang Fan"
                title="Ph.D. Student, 2023 - Now"
                additional="Advisor: Ranjay Krishna"
                image="/xiang-2.jpg"
                website="https://xiangfan.io/"
              />
              <Person
                name="Scott Geng"
                title="Ph.D. Student, 2023 - Now"
                additional="Advisors: Ranjay Krishna & Pang Wei Koh"
                image="/scott2.jpg"
                website="https://www.scottgeng.com/"
              />
              <Person
                name="Cheng-Yu Hsieh"
                title="Ph.D. Student, 2021 - Now"
                additional="Advisors: Ranjay Krishna & Alex Ratner"
                image="/cheng-yu-2.jpeg"
                website="https://chengyuhsieh.github.io/"
              />
              <Person
                name="Amita Kamath"
                title="Ph.D. Student (UCLA), 2022 - Now"
                additional="Advisors: Ranjay Krishna & Kai-Wei Chang"
                image="/amita.jpg"
                website="https://amitakamath.github.io/"
              />
              <Person
                name="Nabil Omi"
                title="Ph.D. Student, 2024 - Now"
                additional="Advisor: Ali Farhadi"
                image="/nabil.jpg"
                website="https://scholar.google.com/citations?user=18iysQgAAAAJ&hl=en"
              />
              <Person
                name="Zixian Ma"
                title="Ph.D. Student, 2023 - Now"
                additional="Advisor: Ranjay Krishna & Dan Weld"
                image="/zixian.jpg"
                website="https://zixianma.github.io/"
              />
              <Person
                name="James Park"
                title="Ph.D. Student, 2019 - Now"
                additional="Advisors: Ali Farhadi & Yejin Choi"
                image="/james-2.jpg"
                website="https://homes.cs.washington.edu/~jspark96/"
              />
              <Person
                name="Sarah Pratt"
                title="Ph.D. Student, 2020 - Now"
                additional="Advisor: Ali Farhadi"
                image="/sarah.jpg"
                website="https://sarahpratt.github.io/"
              />
              <Person
                name="Vivek Ramanujan"
                title="Ph.D. Student, 2020 - Now"
                additional="Advisor: Ali Farhadi"
                image="/vivek.jpg"
                website="https://vkramanuj.github.io/"
              />
              <Person
                name="Reza Salehi"
                title="Ph.D. Student, 2021 - Now"
                additional="Advisors: Ali Farhadi & Hanna Hajishirzi"
                image="/reza-2.jpg"
                website="https://homes.cs.washington.edu/~mrsalehi/"
              />
              <Person
                name="Yashas Samaga"
                title="Ph.D. Student, 2024 - Now"
                additional="Advisor: Ali Farhadi"
                image="/yashas.jpg"
                website="https://github.com/YashasSamaga"
              />
              <Person
                name="Matt Wallingford"
                title="Ph.D. Student, 2019 - Now"
                additional="Advisor: Ali Farhadi"
                image="/matt.jpg"
                website="https://mattwallingford.github.io/"
              />
              <Person
                name="Jieyu Zhang"
                title="Ph.D. Student, 2020 - Now"
                additional="Advisor: Ranjay Krishna & Alex Ratner"
                image="/jieyu2.jpg"
                website="https://jieyuz2.github.io/"
              />
              <Person
                name="Chenhao Zheng"
                title="Ph.D. Student, 2024 - Now"
                additional="Advisor: Ranjay Krishna"
                image="/chenhao.jpg"
                website="https://hellomuffin.github.io/"
              />
              <Person
                name="Rustin Soraki"
                title="Ph.D. Student, 2024 - Now"
                additional="Advisor: Linda Shapiro & Ali Farhadi"
                image="/rustin.jpeg"
                website="https://github.com/RustinS"
              />
            </div>
          </div>
          <div className="px-5">
            <h3 className="h3 mb-4 mt-8">Undergraduate/Masters Students</h3>
            <div className="grid md:grid-cols-5 md:gap-x-3 md:gap-y-3 sm:grid-cols-3 gap-3 grid-cols-2">
            <Person
                name="Huong Ngo"
                title="BS Student, 2023 - Now"
                additional="Advisor: Matt Deitke"
                image="/huong.jpg"
                website="https://huongngo-8.github.io/"
              />
            <Person
                name="Ethan Shen"
                title="BS Student, 2023 - Now"
                additional="Advisor: Matt Wallingford, Aditya Kusupati"
                image="/ethan.jpg"
                website="https://ethanlshen.github.io/"
              />
            <Person
                name="Javon Hickmon"
                title="MS Student, 2024 - Now"
                additional="Advisor: Sarah Pratt"
                image="/javon.jpg"
                website="https://javon.dev/"
              />
            </div>
          </div>
          <div className="px-5">
            <h3 className="h3 mb-4 mt-8">Alumni</h3>
            <div className="grid md:grid-cols-5 md:gap-x-3 md:gap-y-3 sm:grid-cols-3 gap-3 grid-cols-2">

              <Person
                name="Wei-Chiu Ma"
                title="Postdoc, 2023 - 2024"
                additional="Advisors: Ali Farhadi & Ranjay Krishna"
                next="Assistant Professor, Cornell University"
                image="/weichiu.jpg"
                website="https://www.cs.cornell.edu/~weichiu/"
              />
              <Person
                name="Aditya Kusupati"
                title="Ph.D. Student, 2019 - 2024"
                additional="Advisors: Ali Farhadi & Sham Kakade"
                next="Research Scientist, Google DeepMind"
                image="/aditya-2.jpg"
                website="http://adityakusupati.com"
              />
              <Person
                name="Gabriel Ilharco"
                title="Ph.D. Student, 2019 - 2024"
                additional="Advisors: Ali Farhadi & Hanna Hajishirzi" 
                next="Member of Technical Staff, xAI"
                image="/gabriel.jpg"
                website="http://gabrielilharco.com/"
              />
              <Person
                name="Mitchell Wortsman"
                title="Ph.D. Student, 2019 - 2023"
                additional="Advisors: Ali Farhadi & Ludwig Schmidt" 
                next="Member of Technical Staff, Anthropic"
                image="/mitchell.jpg"
                website="https://mitchellnw.github.io/"
              />
              <Person
                name="Aaron Walsman"
                title="Ph.D. Student, 2015 - 2023"
                additional="Advisors: Ali Farhadi & Dieter Fox"
                next="Research Fellow, Harvard Kempner Institute"
                image="/aaron.jpg"
                website="http://aaronwalsman.com/"
              />
              <Person
                name="Kuo-Hao Zeng"
                title="Ph.D., 2018 - 2023"
                additional="Advisors: Ali Farhadi & Roozbeh Mottaghi" 
                next="Research Scientist, AI2"
                image="/hao.jpg"
                website="https://kuohaozeng.github.io/"
              />

              <Person
                name="Rowan Zellers"
                title="Ph.D., 2016 - 2022"
                additional="Advisors: Ali Farhadi & Yejin Choi"
                next="Research Scientist, OpenAI"
                image="/rowan.jpg"
                website="https://rowanzellers.com/"
              />

              <Person
                name="Junha Roh"
                title="Ph.D., 2016 - 2022"
                additional="Advisors: Ali Farhadi & Dieter Fox"
                next="Research Scientist, Third Wave Automation"
                image="/junha.jpg"
                website="https://rohjunha.github.io/"
              />

              <Person
                name="Maxwell (Max) Horton"
                title="Ph.D., 2016 - 2022"
                additional="Advisors: Ali Farhadi & Mohammad Rastegari"
                next="Machine Learning Researcher, Apple"
                image="/max.jpg"
                website="https://homes.cs.washington.edu/~mchorton/"
              />

              <Person
                name="Keunhong Park"
                title="Ph.D., 2015 - 2022"
                additional="Advisors: Ali Farhadi & Steve Seitz"
                next="Research Scientist, Google"
                image="/keunhong.jpg"
                website="https://keunhong.com/"
              />

              <Person
                name="Joseph (Joe) Redmon"
                title="Ph.D., 2013 - 2021"
                additional="Advisor: Ali Farhadi"
                next="Something we can never predict!!"
                image="/joe.png"
                website="https://pjreddie.com/"
              />

              <Person
                name="Kiana Ehsani"
                title="Ph.D., 2015 - 2021"
                additional="Advisors: Ali Farhadi & Roozbeh Mottaghi"
                next="Research Scientist, AI2"
                image="/kiana-2.jpg"
                website="https://ehsanik.github.io/"
              />

              <Person
                name="Keivan Alizadeh-Vahid"
                title="MS, 2018 - 2021"
                additional="Advisors: Ali Farhadi & Mohammad Rastegari"
                next="Machine Learning Research Engineer, Apple"
                image="/keivan.jpg"
                website="https://homes.cs.washington.edu/~keivan/"
              />

              <Person
                name="Hessam Bagherinezhad"
                title="Ph.D., 2014 - 2020"
                additional="Advisor: Ali Farhadi"
                next="Member of Technical Staff, OpenAI"
                image="/hessam.jpg"
                website="https://homes.cs.washington.edu/~hessam/"
              />

              <Person
                name="Daniel Gordon"
                title="Ph.D., 2014 - 2020"
                additional="Advisors: Ali Farhadi & Dieter Fox"
                next="Research Scientist, Apple Maps 3D Vision"
                image="/daniel.jpg"
                website="https://danielgordon10.github.io/"
              />

              <Person
                name="Minjoon Seo"
                title="Ph.D., 2013 - 2020"
                additional="Advisors: Ali Farhadi & Hannaneh Hajishirzi"
                next="Assistant Professor, KAIST AI"
                image="/minjoon.jpg"
                website="https://seominjoon.github.io/"
              />

              <Person
                name="Xin Ru (Nancy) Wang"
                title="Ph.D., 2014 - 2019"
                additional="Advisors: Ali Farhadi & Rajesh Rao"
                next="Applied Scientist, Amazon"
                image="/nancy_wang.jpg"
                website="#"
              />

              <Person
                name="Junyuan (Eric) Xie"
                title="Ph.D., 2013 - 2019"
                additional="Advisor: Ali Farhadi"
                next="Applied Scientist, ByteDance"
                image="/junyuan.jpg"
                website="#"
              />

              <Person
                name="Mark Yatskar"
                title="Ph.D., 2010 - 2017"
                additional="Advisors: Ali Farhadi & Luke Zettelmoyer"
                next="Assistant Professor, University of Pennsylvania"
                image="/mark-2.jpg"
                website="https://www.cis.upenn.edu/~myatskar/"
              />

              <Person
                name="Bilge Soran"
                title="Ph.D., 2010 - 2015"
                additional="Advisors: Ali Farhadi & Linda Shapiro"
                next="Research Scientist, MetaAI"
                image="/bilge.jpg"
                website="#"
              />

              <Person
                name="Santosh Divvala"
                title="Postdoc, 2014 - 2015"
                additional="Advisors: Ali Farhadi & Carlos Guestrin" 
                next=""
                image="/santosh.jpg"
                website="https://scholar.google.com/citations?user=-DYvinwAAAAJ&hl=en"
              />

              <Person
                name="Min Sun"
                title="Postdoc, 2013 - 2014"
                additional="Advisors: Ali Farhadi, Steve Seitz & Ben Taskar"
                next="Associate Professor, National Tsing Hua University"
                image="/min-sun.jpg"
                website="http://aliensunmin.github.io/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
