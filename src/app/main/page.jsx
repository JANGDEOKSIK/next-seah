"use client";

import { getList } from "@/app/_lib/fetch";
import Image from "next/image";
import { useSelector } from "react-redux";
import PageTransition from "../_components/layout/PageTransition";
import { Children, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function MainPage() {
  // const { data } = getList("/menus", ["test1", "test2"]);
  return (
    <PageTransition>
      <div className="main-kv-area">
        <h2 className="page-tit">메인페이지</h2>
        {/* <Image
          className="kv-img"
          src="/images/main-kv.jpg"
          alt="main kv"
          width="3840"
          height="2160"
          priority={true}
          placeholder="empty"
          //placeholder="blur" // Optional blur-up while loading
        /> */}
      </div>

      <Link href="/">루트페이지로 이동</Link>

      <div className="cont">
        <div className="inner">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          accusantium ipsa est, aliquam magni doloribus earum eum necessitatibus
          deserunt iste dolorem explicabo neque? Inventore distinctio aperiam
          tempora libero atque voluptatum rerum ratione earum enim dolor commodi
          voluptates temporibus provident suscipit explicabo blanditiis nemo
          animi vero sunt facilis non, voluptatibus dolorem ullam. Eveniet vitae
          facilis, iusto, totam tempora beatae corporis quia qui minus nemo,
          quis voluptas fugiat? Dolores illum non nobis? Soluta molestias aut
          error dicta repellat sequi autem rerum voluptatum itaque ullam beatae
          voluptatibus minus, consectetur ipsa minima sed quaerat? Aut neque
          consequatur commodi reiciendis natus tempora ut quia laboriosam qui
          numquam fugit rem explicabo, recusandae officiis quod. Impedit quos
          reprehenderit consequuntur architecto. Officia molestias tempore porro
          eum fugiat repellat saepe ea est laudantium cupiditate reprehenderit,
          quasi provident earum. Saepe enim amet dolore repellat temporibus quis
          provident repudiandae, harum veniam expedita reiciendis ipsa, nostrum
          ducimus? Earum, laborum. Tenetur ipsam voluptas dolor soluta provident
          sapiente sequi iusto non minima odit maiores iste, voluptatum,
          possimus dignissimos perspiciatis cum sit dolorum delectus? Unde vero
          doloribus nihil error, atque maxime laborum, delectus modi, laudantium
          in animi! Odit perferendis quis ducimus consequatur unde quisquam iure
          sunt temporibus beatae iusto eum dicta dolorum error odio nesciunt
          tempore maxime ea, iste asperiores. Reprehenderit neque exercitationem
          omnis a temporibus, eaque ut facere, beatae quas fugiat delectus eum
          iusto distinctio assumenda, quidem porro nesciunt! Omnis repudiandae,
          repellat optio modi vero et. Commodi obcaecati accusantium recusandae
          voluptas sit. Exercitationem, enim incidunt. Incidunt natus quos iste
          dolorum soluta molestias, laboriosam earum alias tenetur hic ipsum
          fugit blanditiis eius et est maiores voluptate deleniti ut harum aut
          sunt eveniet neque architecto doloremque! Dolorem, optio! Ipsum iusto
          non recusandae eveniet atque veniam corrupti ab excepturi in eum
          delectus cupiditate commodi fugiat quos, nam officiis, qui quasi odit
          unde tenetur rerum numquam aspernatur explicabo. Consequatur in iure
          dolorum laborum veniam doloremque, amet rerum explicabo quam debitis
          deserunt beatae, fugiat velit impedit ratione aperiam nemo eius!
          Sapiente ullam nisi eos minus cupiditate maxime rerum sed asperiores
          quas explicabo, magni architecto voluptas facere, adipisci,
          repudiandae illum cumque doloremque nostrum nulla in. Minima iure nam
          placeat! Est nostrum similique ex autem beatae itaque? A cum ullam
          saepe ipsam mollitia iste nostrum provident architecto quia laudantium
          odio, fuga beatae perspiciatis at autem et tempore ducimus expedita
          consequuntur esse quibusdam eveniet quaerat perferendis. Expedita in
          distinctio consequuntur esse officiis similique tempora atque, ullam
          numquam facere, commodi consequatur excepturi facilis perferendis
          tenetur earum minima assumenda laborum omnis dolore ipsam, illum
          dolorum iste totam. Deserunt molestias, ipsam dignissimos minima
          mollitia modi ad magnam impedit. Placeat quidem iste facere molestiae
          possimus distinctio optio tempore eius hic quod eos ipsam aperiam at
          dignissimos qui incidunt doloribus sed, consectetur quos? Quidem
          aliquid iste eaque reprehenderit maiores? Laboriosam recusandae
          dolores iste dicta accusamus similique nesciunt vitae omnis natus
          porro mollitia, earum aperiam perferendis sapiente voluptatibus iure
          sequi tempore minus pariatur eveniet asperiores praesentium! Pariatur,
          sit explicabo soluta dolorum accusantium a laborum officiis illum
          voluptas repudiandae repellat nostrum perspiciatis omnis non alias
          cupiditate cum laboriosam quaerat reprehenderit voluptatum sed est
          nisi? Iure quidem hic consectetur perferendis dignissimos et saepe
          eius facere nam. Ad fugit minus quae sequi optio autem laudantium
          molestiae repellendus impedit. Fuga iste quidem omnis cupiditate
          voluptas aut aliquam voluptates, voluptatem minus possimus, delectus
          incidunt numquam veniam corporis aliquid. Ipsam, iste adipisci
          reiciendis sapiente aperiam possimus optio eveniet, hic, impedit
          pariatur sed? Earum ut tempore quisquam dolores ducimus. Pariatur in
          libero odit nihil, quae non! In aspernatur soluta quo, nemo culpa
          nulla officia eligendi earum architecto fugit quisquam incidunt nisi
          cumque. Esse eius officiis vitae omnis sit nisi odit fuga voluptatum
          dolore ad, adipisci nam culpa nostrum, assumenda dolorem voluptatem!
          Ut eum possimus unde, nesciunt reprehenderit repellendus dolorem
          praesentium! Unde odio quae repudiandae nam itaque magni veritatis
          commodi placeat earum consequuntur esse deleniti soluta illo quasi
          dolore pariatur perspiciatis ipsa, corrupti assumenda modi! Assumenda
          autem nostrum delectus dolorem quibusdam debitis, iste voluptatum
          nulla maxime, obcaecati culpa eos voluptatibus labore fugit provident?
          Earum ipsum et blanditiis veritatis. Repellendus quam consequuntur
          laudantium in numquam adipisci voluptatem eaque facere pariatur cumque
          delectus rem nemo accusantium sapiente, reprehenderit laboriosam iusto
          fugiat, itaque vero placeat illo, possimus nobis alias eos. Magni
          reprehenderit, id optio eligendi quod officia similique, sed
          dignissimos odio accusamus maxime recusandae voluptatibus natus ut eos
          consequatur tempora alias magnam suscipit deleniti ducimus nobis.
          Excepturi a inventore, temporibus illum optio dolorum fugiat
          blanditiis quas! Corporis id sit ratione magnam deserunt maiores
          fugiat totam. Neque, autem? Necessitatibus, deleniti consectetur neque
          repudiandae est iusto corporis dignissimos provident molestias quod
          mollitia facere tenetur velit eveniet aliquam tempore cupiditate
          molestiae placeat vel doloremque. Provident, sit! Quas molestias
          tempore totam maiores hic facere quaerat amet excepturi voluptas
          possimus, minus veritatis rem placeat aut. Ullam ut delectus molestias
          distinctio aut, ab fugiat quibusdam sequi. Eum eveniet odio ratione et
          atque, nihil fuga a? Porro dolorem sunt temporibus nisi accusamus sint
          amet, aliquid debitis assumenda vitae, ipsa quo consequatur, iste ut
          inventore praesentium unde? Ipsam similique, quas autem commodi rem
          eius cupiditate nostrum in blanditiis laudantium ut ducimus eligendi
          mollitia quis reprehenderit enim dolores dolor at alias voluptate
          tempore? Harum alias perferendis ex qui autem repellat deleniti
          exercitationem, velit consequatur. Dolorum voluptas fugit et id
          voluptatum? Corrupti rerum autem incidunt neque maxime fugiat, itaque
          accusamus vitae recusandae aperiam nulla veniam tempora a,
          perspiciatis dolores. Pariatur dolores inventore quia, culpa
          voluptatum delectus sed praesentium eaque est corrupti iste minus quo,
          deserunt, asperiores a quae repudiandae? Modi, cupiditate laborum quis
          inventore itaque atque amet corporis! Magnam sapiente, enim
          accusantium quasi doloribus amet temporibus neque perspiciatis culpa,
          commodi repudiandae impedit porro aliquid aperiam in aspernatur natus
          quis sed mollitia laboriosam minus alias. Harum numquam molestiae,
          maxime iusto, dolores quibusdam temporibus fugit corrupti quos ullam
          ipsam fugiat, atque dolorem ducimus reprehenderit. A mollitia sunt in
          totam autem illo eius numquam, ab debitis rem distinctio adipisci
          necessitatibus labore libero! Porro atque perferendis officia facere
          illo, laboriosam nulla adipisci. Unde asperiores, totam sequi
          incidunt, libero corrupti neque vitae voluptatum tempora corporis,
          praesentium similique? Exercitationem laborum rerum ducimus
          cupiditate, deleniti minima.
        </div>
      </div>
    </PageTransition>
  );
}
