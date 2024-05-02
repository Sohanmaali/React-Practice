import config from "../config/config.js";
import { Client, ID, Databases, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  //variables
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl) // Setting the Appwrite endpoint
      .setProject(config.appwriteProjectId); // Setting the Appwrite project ID

    this.databases = new Databases(this.client); // Creating an instance of the Databases service
    this.bucket = new Storage(this.client); // Creating an instance of the Storage service
  }

  //Create post
  async createPost({ titel, slug, contant, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDataBaseId,
        config.appwriteCollectionId,
        slug,
        { titel, contant, featuredImage, status, userId }
      );
    } catch (error) {
      console.log("Appwrite serive :: createPost :: error", error);
    }
  }

  //Update post
  async updatePost(slug, { titel, contant, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDataBaseId,
        config.appwriteCollectionId,
        slug,
        { titel, contant, featuredImage, status }
      );
    } catch (error) {
      console.log("Appwrite serive :: updatePost :: error", error);
    }
  }

  //delete All post
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDataBaseId,
        config.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deletePost :: error", error);
      return false;
    }
  }

  //get All post
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDataBaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite serive :: getPost :: error", error);
      return false;
    }
  }

  //get All posts
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDataBaseId,
        config.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite serive :: getPosts :: error", error);
      return false;
    }
  }

  //file upload service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite serive :: uploadFile :: error", error);
      return false;
    }
  }

  //delete file
  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite serive :: uploadFile :: error", error);
      return false;
    }
  }

  //file preview
  getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(config.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite serive :: getFilePreview :: error", error);
      return false;
    }
  }
}

const service = new Service();

export default service;
