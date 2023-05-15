import React from "react";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import Layout from "../../components/Layout/layout";
import Link from "next/link";
import Head from "next/head";
import {getAllPostIds, getPostData} from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import path from "path";
import Date from "../../components/Date";

interface PostProps {
  postData: any;
}

const Post: NextPage<PostProps> = ({postData}) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
      </article>
      <hr />
      <Link href="/">Back to home</Link>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({params}) => {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
