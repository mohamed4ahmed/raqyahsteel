import React, { useEffect, useState } from "react";
import {
  FullPage,
  HighlightPosts,
  InfoMaps,
  InfoSection,
  InstaPosts,
  Products,
  SectionLink,
  SpinnerBook,
} from "../../components";
import {
  setAboutData,
  setHero,
  setInstaPosts,
  setPosts,
  setProductsList,
  setProductSpecial,
} from "../../app/slice/fetchApi";
import { useDispatch } from "react-redux";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import {
  fetchAboutData,
  fetchBlogData,
  fetchHeroData,
  fetchInstaPost,
  fetchProduct,
} from "../../api";
import {
  Door,
  Kitchen,
  Decor,
  Stair,
  Glass,
  Outside,
  Partation,
  Handmade,
  Stanlissteal,
} from "../../app/ItemTypes";
import { useSelector } from "react-redux";
import feedbackImg from "../../assets/img/feedback.svg";
import { AiOutlineStar } from "react-icons/ai";

const feedback = {
  subHeader: "RAQYAH",
  header: "RAQYAH service rating",
  description:
    "Each of your comments will help RAQYAH improve its service to serve you better!",
  linkBtn: "/feedback",
  contentBtn: "Evaluate",
  img: feedbackImg,
  icon: <AiOutlineStar />,
};

const Home = () => {
  const [spinner, setSpinner] = useState(true);
  const dispatch = useDispatch();

  const special = useSelector((state) => state.api.products.special);
  const posts = useSelector((state) => state.api.posts);
  const hero = useSelector((state) => state.api.hero);
  const about = useSelector((state) => state.api.about);
  const instaPosts = useSelector((state) => state.api.instaPosts);

  useEffect(() => {
    document.title = "RAQYAH FOR METAL - HomePage";
  }, []);

  useEffect(() => {
    if (!hero) {
      fetchHeroData()
        .then((data) => {
          const action = setHero(data);
          dispatch(action);
        })
        .catch((error) => console.log("error", error));
    }
  }, [dispatch, hero]);

  useEffect(() => {
    if (!about) {
      fetchAboutData()
        .then((data) => {
          const action = setAboutData(data);
          dispatch(action);
        })
        .catch((error) => console.log("error", error));
    }
  }, [dispatch, about]);

  useEffect(() => {
    if (!posts) {
      fetchBlogData()
        .then((posts) => {
          let postSort = [];
          postSort = posts.slice().sort((value1, value2) => {
            const dateValue1 = new Date(value1.publishedAt).getTime();
            const dateValue2 = new Date(value2.publishedAt).getTime();
            return dateValue1 < dateValue2 ? 1 : -1;
          });
          const action = setPosts(postSort);
          dispatch(action);
        })
        .catch((error) => console.log("error", error));
    }
  }, [dispatch, posts]);

  useEffect(() => {
    if (!instaPosts) {
      fetchInstaPost()
        .then((instaPosts) => {
          let postsSort = [];
          postsSort = instaPosts.slice().sort((value1, value2) => {
            const dateValue1 = new Date(value1.publishedAt).getTime();
            const dateValue2 = new Date(value2.publishedAt).getTime();
            return dateValue1 < dateValue2 ? 1 : -1;
          });
          const action = setInstaPosts(postsSort);
          dispatch(action);
        })
        .catch((error) => console.log("error", error));
    }
  }, [dispatch, instaPosts]);

  useEffect(() => {
    if (!special) {
      fetchProduct()
        .then((products) => {
          const special = [];

          const door = [];
          const kitchen = [];
          const decor = [];
          const stair = [];
          const glass = [];
          const outside = [];
          const partation = [];
          const handmade = [];
          const stanlissteal = [];

          products.map((product, index) => {
            if (product.projectType === Door) door.push(product);
            else if (product.projectType === Kitchen) kitchen.push(product);
            else if (product.projectType === Decor) decor.push(product);
            else if (product.projectType === Stair) stair.push(product);
            else if (product.projectType === Glass) glass.push(product);
            else if (product.projectType === Outside) outside.push(product);
            else if (product.projectType === Partation) partation.push(product);
            else if (product.projectType === Handmade) handmade.push(product);
            else if (product.projectType === Stanlissteal)
              stanlissteal.push(product);

            product.special && special.push(product);

            return null;
          });
          let action;
          const object = {
            special: special,
            door: door,
            kitchen: kitchen,
            decor: decor,
            stair: stair,
            glass: glass,
            outside: outside,
            partation: partation,
            handmade: handmade,
            stanlissteal: stanlissteal,
          };
          action = setProductsList(object);
          dispatch(action);
          action = setProductSpecial(special);
          dispatch(action);
        })
        .catch((error) => console.log("error", error));
    }
  }, [dispatch, special]);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 2300);
  }, []);

  return (
    <div>
      {spinner ? (
        <SpinnerBook />
      ) : (
        <>
          <FullPage />
          <LazyLoadComponent>
            <InfoSection />
          </LazyLoadComponent>
          <LazyLoadComponent>
            <InfoMaps />
          </LazyLoadComponent>
          <LazyLoadComponent>
            <Products products={special} />
          </LazyLoadComponent>
          <LazyLoadComponent>
            <HighlightPosts />
          </LazyLoadComponent>
          <LazyLoadComponent>
            <InstaPosts />
          </LazyLoadComponent>
          <LazyLoadComponent>
            <SectionLink
              subHeader={feedback.subHeader}
              header={feedback.header}
              description={feedback.description}
              linkBtn={feedback.linkBtn}
              img={feedback.img}
              contentBtn={feedback.contentBtn}
              iconBtn={feedback.icon}
              dark
            />
          </LazyLoadComponent>
        </>
      )}
    </div>
  );
};

export default Home;
