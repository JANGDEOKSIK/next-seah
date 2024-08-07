"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function TestPage() {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.to(boxRef.current, {
      scrollTrigger: {
        trigger: boxRef.current,
        start: () => "top center",
        end: () => "bottom top",
        pin: true,
        //pinSpacing: false,
        markers: true,
      },
    });
  });

  return (
    <>
      <h3>스크롤 트리거 연습</h3>

      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat dolor
        dicta sit veniam quos, quas magnam blanditiis. Earum natus adipisci
        molestiae blanditiis ratione inventore nulla quam consequatur, nostrum
        id, ad quod vero odit iusto facilis fugiat temporibus quibusdam
        voluptates soluta tempore. Velit possimus veritatis molestiae
        voluptatem, soluta vel. Quo quos ut beatae, dolores cumque perspiciatis
        quasi voluptate placeat itaque minima voluptas reiciendis. Itaque ipsum
        doloremque ullam laboriosam officiis impedit. Iure quaerat nisi
        consequuntur aperiam possimus provident corrupti esse iste eligendi,
        laudantium nulla quis delectus modi praesentium expedita voluptatem
        recusandae dolores, laboriosam architecto, harum ut ab. Nam ex soluta
        optio aut? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quaerat dolor dicta sit veniam quos, quas magnam blanditiis. Earum natus
        adipisci molestiae blanditiis ratione inventore nulla quam consequatur,
        nostrum id, ad quod vero odit iusto facilis fugiat temporibus quibusdam
        voluptates soluta tempore. Velit possimus veritatis molestiae
        voluptatem, soluta vel. Quo quos ut beatae, dolores cumque perspiciatis
        quasi voluptate placeat itaque minima voluptas reiciendis. Itaque ipsum
        doloremque ullam laboriosam officiis impedit. Iure quaerat nisi
        consequuntur aperiam possimus provident corrupti esse iste eligendi,
        laudantium nulla quis delectus modi praesentium expedita voluptatem
        recusandae dolores, laboriosam architecto, harum ut ab. Nam ex soluta
        optio aut?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quaerat dolor dicta sit veniam quos, quas magnam blanditiis. Earum natus
        adipisci molestiae blanditiis ratione inventore nulla quam consequatur,
        nostrum id, ad quod vero odit iusto facilis fugiat temporibus quibusdam
        voluptates soluta tempore. Velit possimus veritatis molestiae
        voluptatem, soluta vel. Quo quos ut beatae, dolores cumque perspiciatis
        quasi voluptate placeat itaque minima voluptas reiciendis. Itaque ipsum
        doloremque ullam laboriosam officiis impedit. Iure quaerat nisi
        consequuntur aperiam possimus provident corrupti esse iste eligendi,
        laudantium nulla quis delectus modi praesentium expedita voluptatem
        recusandae dolores, laboriosam architecto, harum ut ab. Nam ex soluta
        optio aut?
      </div>

      <div className="scroll-trigger-test-wrapper">
        <div
          ref={boxRef}
          className="box"
        >
          selector
        </div>
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi modi
        velit ipsum recusandae placeat a labore nostrum quia natus. Assumenda
        repellendus velit, minima dignissimos aliquid culpa id mollitia repellat
        reprehenderit distinctio perferendis fugiat quod animi a ullam corporis
        quasi magnam similique rem? Animi, sed. Facilis, at voluptatibus iusto
        voluptatum vitae corrupti consectetur, cum ipsum, nemo ducimus
        necessitatibus. Laboriosam quos soluta numquam sunt aspernatur nulla
        repudiandae unde facere, praesentium voluptatem vitae aliquid, tenetur
        repellendus error excepturi. Rerum voluptatibus cum libero, non alias
        harum consectetur laborum aliquam eaque, corporis nesciunt dolorum sed
        culpa necessitatibus voluptates quos minus quibusdam! Quo neque quam eos
        qui magni repellendus adipisci error eius illo eaque. Magni placeat,
        labore excepturi ipsum deleniti repellendus sint modi ex illum ratione
        omnis laboriosam unde eligendi nobis nihil pariatur ut laborum esse?
        Libero ducimus non aperiam, temporibus, iusto quis dolorem harum fuga
        eligendi tenetur nobis esse, corrupti iste laboriosam distinctio quia
        facere nihil culpa? Nemo alias aliquam harum odio, autem impedit dolores
        distinctio repellendus dolorem cum incidunt vel commodi quaerat magnam
        iusto accusamus deserunt atque obcaecati natus, porro nesciunt
        blanditiis est? Quos quia accusantium debitis quae. Exercitationem
        beatae officiis harum quos! Aliquam modi nobis, officiis quos adipisci
        labore autem temporibus itaque ex cumque reiciendis et, ullam qui
        architecto odit consectetur debitis, veniam mollitia incidunt dolores in
        veritatis. Porro laborum cupiditate quibusdam cumque fugit, iste amet
        quaerat temporibus tenetur officia eum? Debitis tenetur numquam nobis
        odit dolorum ipsa quibusdam rerum quo. Unde, repudiandae iure recusandae
        rem distinctio id dolorum. Pariatur adipisci magni, nesciunt maiores,
        sequi molestiae rem totam corporis soluta architecto ipsam blanditiis
        sit distinctio praesentium numquam vero. Accusamus consequuntur debitis
        voluptates maxime rem quaerat est provident quod enim molestiae deserunt
        quas neque eum autem, fugiat eligendi. Doloribus architecto omnis
        quibusdam quod sunt, aspernatur amet. Quam ipsum quisquam quia et earum
        aliquam voluptatibus, officiis iure possimus quibusdam qui tempore
        eveniet odio sint! Fuga natus porro doloremque rem exercitationem! Iure
        architecto sint quibusdam repellat aliquid recusandae aliquam magni
        doloribus, quisquam in corrupti doloremque. Quam fugiat voluptas sequi
        reprehenderit vel, laborum provident ipsam sapiente obcaecati doloremque
        vero nostrum id sed veniam ut! Commodi quos accusantium praesentium, eum
        quod odio voluptatum distinctio fugit et laboriosam, illum, consectetur
        nam officiis dolore cum ullam corrupti. Minus commodi obcaecati ex at
        quas, magnam magni ratione illo fuga sint itaque sapiente. Magnam dicta
        tenetur et odit facilis saepe doloremque nostrum totam. Aliquam
        reprehenderit vel ullam, at, consequuntur nostrum, non deserunt nisi
        quos beatae doloremque earum laudantium sunt! Mollitia labore saepe
        expedita fugit, ex quidem excepturi pariatur fuga voluptatibus ea
        debitis repudiandae qui recusandae dignissimos laudantium, quia
        voluptatem ut quisquam molestias voluptate. In, accusamus dignissimos
        obcaecati eius sunt consectetur, omnis provident sed, molestiae
        recusandae magni illum illo consequuntur modi asperiores eaque placeat
        nulla quis. Molestias modi harum commodi aut voluptatum in rerum, est
        dolor ad, aspernatur quisquam. Consequuntur, magnam libero.
        Voluptatibus, impedit magnam. Tenetur, laboriosam beatae qui unde atque
        corporis, eaque maiores sequi animi ab consequuntur amet accusamus quos
        esse non, assumenda fugit et vel magni. Fuga aut magni adipisci corporis
        cum praesentium animi esse ducimus unde. Quod, odio amet pariatur
        dignissimos fuga, laboriosam officiis fugit cupiditate sapiente quo
        provident fugiat corporis, iure expedita aut accusantium cumque? Iure
        est assumenda ipsam neque cupiditate inventore ut dolorum unde illum
        maxime quasi odit ratione magni consequatur ab, mollitia non eveniet
        error distinctio perspiciatis! Excepturi, dolores architecto soluta ad
        dicta exercitationem consectetur quaerat? Nobis voluptate facilis iure
        non fugiat consequatur consectetur natus sequi quam aliquid, modi maxime
        sapiente architecto cupiditate possimus similique amet incidunt, odit
        est eos pariatur nam molestias. Error repellendus at numquam, fugiat
        earum natus quo minima, enim accusantium nulla ducimus autem consequatur
        recusandae fuga non consectetur quam illo magni. Unde reprehenderit illo
        sit, quaerat alias consequuntur sapiente ea omnis, veritatis ut quam
        voluptatum ipsum, cupiditate ducimus deserunt nulla possimus in? Officia
        recusandae eum eos culpa. Accusamus quos vitae, necessitatibus sint aut
        vero! Incidunt, assumenda et! Similique rerum molestiae enim. Laudantium
        quia molestias possimus, neque dicta facilis. Repellat quia hic at nemo
        fugit quisquam commodi aut optio ullam enim unde distinctio deserunt vel
        asperiores maiores voluptas, explicabo libero. Dolorum unde perspiciatis
        magnam eaque nihil expedita impedit nemo ab soluta eligendi adipisci
        eveniet quaerat veritatis, repellendus harum fugiat reprehenderit
        dignissimos odio cupiditate sapiente maiores deserunt. Officia nemo
        dicta aut maxime itaque laboriosam facilis aliquid vitae, tempore
        voluptas reiciendis deserunt sit doloribus ipsum optio mollitia vel
        distinctio qui tempora perferendis delectus. Nobis illo molestiae quia
        eum voluptatem magnam, voluptatibus unde repellendus quo assumenda
        ratione pariatur saepe atque reiciendis fuga architecto hic quod at
        aliquam nemo ipsa, consectetur laborum! Inventore cum quae rem
        repellendus ipsa perferendis adipisci dolor ipsam porro assumenda
        officiis quaerat animi veritatis alias dolores tempore esse dolorem
        magnam unde nemo voluptatibus, laboriosam id, dolorum nisi. Asperiores
        libero accusantium repellat, officia veniam nisi repellendus rem eos
        odio dolores tenetur ex alias saepe nulla corporis delectus excepturi
        placeat voluptate doloremque laborum nam, hic harum illum. Natus quas
        suscipit veritatis, exercitationem ipsam delectus eum amet nesciunt
        explicabo ducimus pariatur obcaecati officiis aliquid adipisci ullam
        voluptates esse corporis ea. Consequuntur minima amet sequi numquam
        accusantium voluptas ducimus libero quasi blanditiis debitis recusandae
        molestias laudantium maxime, soluta eius eveniet minus hic ut facere
        modi. Id repellendus atque illo dolores animi assumenda dolorem culpa,
        exercitationem consequuntur odio recusandae eos, nulla accusantium illum
        fuga perferendis eligendi dolor nemo commodi debitis. Optio obcaecati
        ullam doloribus dolores nesciunt exercitationem modi vero possimus quo?
        Molestiae placeat ad sunt repellendus ipsa quos veniam vero voluptatibus
        corporis, fuga a blanditiis natus aliquam eius reiciendis adipisci
        maxime cupiditate doloribus aperiam. Possimus iste quam est enim ut
        laborum, obcaecati molestiae doloremque ipsam? Laudantium at nulla
        tempora provident ea repellendus quis ad beatae necessitatibus ipsam
        numquam quam tenetur, deserunt aut unde optio quisquam cumque dolore ut
        quasi labore libero! Ipsam tempora maiores laborum cum impedit
        temporibus dignissimos animi corrupti iusto molestiae tempore voluptate,
        pariatur quis blanditiis cumque veniam nihil natus in quia. Mollitia,
        laboriosam eius sint quae voluptatem molestias doloribus nesciunt.
        Consequatur pariatur eum quisquam ipsa officiis nam aliquam architecto
        labore minus, molestias, itaque rerum nisi iure.
      </div>
    </>
  );
}
