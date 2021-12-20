import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore, getDocs, collection, addDoc, doc, deleteDoc, query, orderBy } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject  } from "firebase/storage";
import { randToken } from "./utility.jsx";


// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBhWK0rdCp4VR7EfyaW3A7ppnTBKAGLCXc",
	authDomain: "murraymemories-96fe6.firebaseapp.com",
	projectId: "murraymemories-96fe6",
	storageBucket: "murraymemories-96fe6.appspot.com",
	messagingSenderId: "630789844875",
	appId: "1:630789844875:web:86f268f47717d7f6bb098e"
};


initializeApp( firebaseConfig );

const db      = getFirestore();
const storage = getStorage();
const auth    = getAuth();

const memoriesFirestoreRef = collection( db, "memories" );
const memoriesStorageRef   = ref( storage, "memories" );
let signedIn = false;


async function ensureSignedIn() {

	if( !signedIn ) await signInAnonymously( auth );
	signedIn = true;
}


async function getSrcs() {	

	await ensureSignedIn();

	const docsSnap  = await getDocs( memoriesFirestoreRef );
	const fileNames = [];
	docsSnap.forEach( d => fileNames.push( d.data().fileName ) );

	const imgRefs   = fileNames.map( fileName => ref( memoriesStorageRef, fileName ) );
	const srcs      = await Promise.all( imgRefs.map( getDownloadURL ) );

	return srcs;
}


async function clearMemories() {

	await ensureSignedIn();

	const orderQuery = query( memoriesFirestoreRef, orderBy("createdTime") );
	const docsSnap   = await getDocs( orderQuery );
	const docs       = [];
	docsSnap.forEach( d => docs.push( doc( memoriesFirestoreRef, d.id ) ) );

	const refs       = [];
	docsSnap.forEach( d => refs.push( ref( memoriesStorageRef  , d.id ) ) );

	await Promise.all( docs.map( deleteDoc   ) );
	await Promise.all( refs.map( deleteObject) );
}


async function addMemory( inputRef, srcs, setSrcs ) {

	await ensureSignedIn();

	const file     = inputRef.current.files[0];
	const fileName = randToken(10) + file.name;
	const fileRef  = ref( memoriesStorageRef, fileName );
	const newDoc   = { fileName: fileName, createdTime: new Date() };

	const newFirestoreRef = await addDoc( memoriesFirestoreRef, newDoc );
	const newStorageRef   = await uploadBytes( fileRef, file );
	const newSrc          = await getDownloadURL( fileRef );

	setSrcs( [ newSrc, ...srcs ] );
}

export { getSrcs, addMemory };
